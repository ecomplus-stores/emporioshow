import {
  i19add,
  i19addDiscountCoupon,
  i19campaignAppliedMsg,
  i19code,
  i19couponAppliedMsg,
  i19discountCoupon,
  i19errorMsg,
  i19hasCouponOrVoucherQn,
  i19invalidCouponMsg
} from '@ecomplus/i18n'

import { i18n } from '@ecomplus/utils'
import { store, modules } from '@ecomplus/client'
import ecomCart from '@ecomplus/shopping-cart'
import ecomPassport from '@ecomplus/passport-client'
import AAlert from '@ecomplus/storefront-components/src/AAlert.vue'

const addFreebieItems = (ecomCart, productIds) => {
  if (Array.isArray(productIds)) {
    productIds.forEach(productId => {
      if (!ecomCart.data.items.find(item => item.product_id === productId)) {
        store({ url: `/products/${productId}.json` })
          .then(({ data }) => {
            ecomCart.addProduct(
              {
                ...data,
                flags: ['freebie', '__tmp']
              },
              null,
              productIds.reduce((qnt, _id) => {
                return _id === productId ? qnt + 1 : qnt
              }, 0)
            )
          })
          .catch(console.error)
      }
    })
  }
}

export default {
  name: 'DiscountApplier',

  components: {
    AAlert
  },

  props: {
    amount: Object,
    couponCode: String,
    hasCouponInput: {
      type: Boolean,
      default: true
    },
    isFormAlwaysVisible: Boolean,
    isCouponApplied: Boolean,
    isAttentionWanted: Boolean,
    canAddFreebieItems: {
      type: Boolean,
      default: true
    },
    modulesPayload: Object,
    ecomCart: {
      type: Object,
      default () {
        return ecomCart
      }
    },
    ecomPassport: {
      type: Object,
      default () {
        return ecomPassport
      }
    }
  },

  data () {
    return {
      alertText: null,
      alertVariant: null,
      isFormVisible: this.isFormAlwaysVisible || this.couponCode,
      isLoading: false,
      localCouponCode: this.couponCode,
      localPontoMarketCode: this.pontoMarketCode,
      localAmountTotal: null,
      isUpdateSheduled: false,
      pontoMarketOptions : null,
      
    }
  },

  computed: {
    i19add: () => i18n(i19add),
    i19addDiscountCoupon: () => i18n(i19addDiscountCoupon),
    i19code: () => i18n(i19code),
    i19couponAppliedMsg: () => i18n(i19couponAppliedMsg),
    i19discountCoupon: () => i18n(i19discountCoupon),
    i19hasCouponOrVoucherQn: () => i18n(i19hasCouponOrVoucherQn),
    i19invalidCouponMsg: () => i18n(i19invalidCouponMsg),
    i19campaignAppliedMsg: () => i18n(i19campaignAppliedMsg),

    canAddCoupon () {
      return !this.couponCode || !this.isCouponApplied ||
        this.couponCode !== this.localCouponCode
    },
    
    
    listeners() {
      return {
        ...this.$pontoMarketOptions
      }
    },

    docNumber(){
      const customer = this.ecomPassport.getCustomer(); return customer.doc_number
    }
  },

  methods: {    
    getPontoMarket(){
      //console.log('teste')
      const customer = this.ecomPassport.getCustomer()
      axios.post('https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/points', {
      storeId : storefront.settings.store_id,
      params : {
        customer:{
          _id : customer._id,
          doc_number : customer.doc_number
          //doc_number : '43335443608'
        } 
      }
      })
      .then((response) => {
        if(response.data.pm.prize_list){
          response.data.pm.prize_list.push({
            id_prize: -1,
            name: 'Não desejo utilizar meus pontos',
            points_required: 0,
            prize_value: 0,
            prize_value_type: 1

          })
        }
        this.pontoMarketOptions = response.data
        //console.log(this.pontoMarketOptions)
        //console.log(response.data)
        
        //console.log(this.pontoMarketOptions)
        //console.log(response)
        this.localPontoMarketCode = response.data.fb.selected_prize_id || ''
        //console.log(this.localPontoMarketCode)
        if(this.localPontoMarketCode){
          const data = {
            pm_selected_prize_id: localPontoMarketCode,
            storeId: storefront.settings.store_id
          }
          this.updateDiscount(true)
          //this.fetchDiscountOptions(data)
        }
      })    
    },
    setPontoMarket(){
      const { localPontoMarketCode } = this
      console.log(localPontoMarketCode)
      const customer = this.ecomPassport.getCustomer()
      console.log(customer)
      axios.post('https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/selectPrize', {
      storeId : storefront.settings.store_id,
      params : {
        prize_id : localPontoMarketCode,
        customer:{
          _id : customer._id,
          doc_number : customer.doc_number
        } 
      }       
      })
      .then((response) => {
        console.log(response)
        if(localPontoMarketCode != null){
          const data = {
            pm_selected_prize_id: localPontoMarketCode,
            storefrontId: storefront.settings.store_id
          }
          this.updateDiscount(true)
        }
        //console.log(response)
      })    
    },
    // removePontoMarket(){
    //   const { localPontoMarketCode } = this
    //   const customer = this.ecomPassport.getCustomer()
    //   console.log(customer)
    //   axios.post('https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/removePrize', {
    //   storeId : storefront.settings.store_id,
    //   params : {
    //     prize_id : localPontoMarketCode,
    //     customer:{
    //       _id : customer._id,
    //       doc_number : customer.doc_number
    //       //doc_number : '43335443608'
    //     } 
    //   }       
    //   })
    //   .then((response) => {
    //     localPontoMarketCode = null
    //     this.getPontoMarket()
    //     //if(localPontoMarketCode){
          
    //     //}        
    //   })    
    // },
    fixAmount () {
      const amount = this.amount || {
        subtotal: this.ecomCart.data.subtotal
      }
      this.localAmountTotal = (amount.subtotal || 0) + (amount.freight || 0)
    },    
    

    parseDiscountOptions (listResult = []) {
      let extraDiscountValue = 0
      let sumOfDiscounts = 0
      let bindFlags = []
      if (listResult.length) {
        //console.log(listResult)
        let discountRule, invalidCouponMsg
        listResult.forEach(appResult => {
          const { validated, error, response } = appResult
          if (validated && !error) {
            const appDiscountRule = response.discount_rule
            if (appDiscountRule) {
              console.log(appDiscountRule)
              const discountRuleValue = appDiscountRule.extra_discount.value
              sumOfDiscounts += discountRuleValue
              bindFlags = bindFlags.concat(appDiscountRule.extra_discount.flags)
              if (discountRuleValue) {
                extraDiscountValue = discountRuleValue
                discountRule = {
                  app_id: appResult.app_id,
                  ...appDiscountRule
                }
                discountRule.extra_discount.value = sumOfDiscounts
                discountRule.extra_discount.flags = bindFlags
              }
            } else if (response.invalid_coupon_message) {
              invalidCouponMsg = response.invalid_coupon_message
            }
            if (this.canAddFreebieItems) {
              addFreebieItems(this.ecomCart, response.freebie_product_ids)
            }
          }
        })
        if (extraDiscountValue) {
          let msgAlert = ""
          console.log(discountRule)
          if(discountRule.extra_discount.flags.includes('clube-show')){
            //msgAlert = msgAlert + "- Pontos Clube Show foram aplicados"
          }
          //console.log('1 - ' + msgAlert)
          if (this.localCouponCode) {
            if(discountRule.extra_discount.flags.includes('COUPON') || !discountRule.extra_discount.flags.includes('clube-show')){
              this.$emit('update:coupon-code', this.localCouponCode)              
              msgAlert = msgAlert != "" ? msgAlert + '<br> - ' + this.i19couponAppliedMsg : this.i19couponAppliedMsg
            }
            //console.log('2 - ' + msgAlert)
          } else {
            msgAlert = msgAlert != "" ? msgAlert + '<br> - ' + this.i19campaignAppliedMsg : this.i19campaignAppliedMsg
            //console.log('3 - ' + msgAlert)
          }
          //console.log('4 - ' + msgAlert)
          //this.alertText = ""
          this.alertText = msgAlert
          this.$emit('set-discount-rule', discountRule)
          this.alertVariant = 'info'
        } else {
          if (this.localCouponCode) {
            this.alertText = invalidCouponMsg || this.i19invalidCouponMsg
            this.alertVariant = 'warning'
          } else {
            this.alertText = null
          }
          this.$emit('set-discount-rule', {})
        }
      }
    },

    fetchDiscountOptions (data = {}) {
      this.isLoading = true
      data.pm_selected_prize_id = this.localPontoMarketCode,
      data.storefrontId = storefront.settings.store_id
      if (this.ecomPassport.checkLogin()) {
        const customer = this.ecomPassport.getCustomer()
        data.customer = {
          _id: customer._id
        }
        if (customer.display_name) {
          data.customer.display_name = customer.display_name
        }
      }
      modules({
        url: '/apply_discount.json',
        method: 'POST',
        data: {
          ...this.modulesPayload,
          amount: {
            subtotal: this.localAmountTotal,
            ...this.amount,
            total: this.localAmountTotal,
            discount: 0
          },
          items: this.ecomCart.data.items,
          ...data
        }
      })
        .then(({ data }) => this.parseDiscountOptions(data.result))
        .catch(err => {
          console.error(err)
          this.alertVariant = 'danger'
          this.alertText = i18n(i19errorMsg)
        })
        .finally(() => {
          this.isLoading = false
        })
    },

    submitCoupon (isForceUpdate) {
      if (isForceUpdate || this.canAddCoupon) {
        const { localCouponCode } = this
        const data = {
          discount_coupon: localCouponCode
        }
        this.fetchDiscountOptions(data)
      }
    },

    updateDiscount (isForceUpdate = true) {
      if (this.couponCode) {
        if (isForceUpdate || !this.isCouponApplied) {
          this.submitCoupon(isForceUpdate)
        }
      } else if (
        isForceUpdate ||
        (!this.isUpdateSheduled && this.amount && this.amount.total)
      ) {
        this.fetchDiscountOptions()
      }
    }
  },

  watch: {
    couponCode (couponCode) {
      if (couponCode !== this.couponCode) {
        this.localCouponCode = couponCode
        if (couponCode && !this.isFormVisible) {
          this.isFormVisible = true
        }
      }
    },

    isFormAlwaysVisible (isFormVisible) {
      if (isFormVisible) {
        this.isFormVisible = true
      }
    },

    isFormVisible (isFormVisible) {
      if (isFormVisible) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        })
      }
    },

    localAmountTotal (total, oldTotal) {
      if (oldTotal !== null && Math.abs(total - oldTotal) > 0.01 && !this.isUpdateSheduled) {
        this.isUpdateSheduled = true
        this.$nextTick(() => {
          setTimeout(() => {
            this.updateDiscount()
            this.isUpdateSheduled = false
          }, 600)
        })
      }
    },

    amount: {
      handler () {
        this.fixAmount()
      },
      deep: true
    }
  },

  
  mounted () {
    this.fixAmount()
    this.updateDiscount(false)
    this.getPontoMarket()
    
  }
}