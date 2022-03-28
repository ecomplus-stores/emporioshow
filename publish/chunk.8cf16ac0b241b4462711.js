(window.webpackJsonp=window.webpackJsonp||[]).push([[10,9],{277:function(t,o,e){"use strict";e(43);var s=e(33),i=e(52),a=e(2),n=e(12),l=e(40),r=e(274);var p={name:"DiscountApplier",components:{AAlert:r.a},props:{amount:Object,couponCode:String,hasCouponInput:{type:Boolean,default:!0},isFormAlwaysVisible:Boolean,isCouponApplied:Boolean,isAttentionWanted:Boolean,canAddFreebieItems:{type:Boolean,default:!0},modulesPayload:Object,ecomCart:{type:Object,default:()=>n.a},ecomPassport:{type:Object,default:()=>l.a}},data(){return{alertText:null,alertVariant:null,isFormVisible:this.isFormAlwaysVisible||this.couponCode,isLoading:!1,localCouponCode:this.couponCode,localPontoMarketCode:this.pontoMarketCode,localAmountTotal:null,isUpdateSheduled:!1,pontoMarketOptions:null}},computed:{i19add:()=>Object(i.a)(s.h),i19addDiscountCoupon:()=>Object(i.a)(s.j),i19code:()=>Object(i.a)(s.M),i19couponAppliedMsg:()=>Object(i.a)(s.Z),i19discountCoupon:()=>Object(i.a)(s.db),i19hasCouponOrVoucherQn:()=>Object(i.a)(s.Fb),i19invalidCouponMsg:()=>Object(i.a)(s.Rb),i19campaignAppliedMsg:()=>Object(i.a)(s.B),canAddCoupon(){return!this.couponCode||!this.isCouponApplied||this.couponCode!==this.localCouponCode},listeners(){return{...this.$pontoMarketOptions}},docNumber(){return this.ecomPassport.getCustomer().doc_number}},methods:{getPontoMarket(){const t=this.ecomPassport.getCustomer();axios.post("https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/points",{storeId:storefront.settings.store_id,params:{customer:{_id:t._id,doc_number:t.doc_number}}}).then((t=>{if(t.data.pm.prize_list.push({id_prize:-1,name:"Não desejo utilizar meus pontos",points_required:0,prize_value:0,prize_value_type:1}),this.pontoMarketOptions=t.data,console.log(t),this.localPontoMarketCode=t.data.fb.selected_prize_id||"",console.log(this.localPontoMarketCode),this.localPontoMarketCode){const t={pm_selected_prize_id:localPontoMarketCode,storeId:storefront.settings.store_id};this.fetchDiscountOptions(t)}}))},setPontoMarket(){const{localPontoMarketCode:t}=this;console.log(t);const o=this.ecomPassport.getCustomer();console.log(o),axios.post("https://us-central1-pontomarket-ecomplus.cloudfunctions.net/app/get/selectPrize",{storeId:storefront.settings.store_id,params:{prize_id:t,customer:{_id:o._id,doc_number:o.doc_number}}}).then((o=>{if(console.log(o),null!=t){const o={pm_selected_prize_id:t,storefrontId:storefront.settings.store_id};this.fetchDiscountOptions(o)}console.log(o)}))},fixAmount(){const t=this.amount||{subtotal:this.ecomCart.data.subtotal};this.localAmountTotal=(t.subtotal||0)+(t.freight||0)},parseDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=0;if(t.length){let e,s;t.forEach((t=>{const{validated:i,error:n,response:l}=t;if(i&&!n){const i=l.discount_rule;if(i){const s=i.extra_discount.value;o>s||(o=s,e={app_id:t.app_id,...i})}else l.invalid_coupon_message&&(s=l.invalid_coupon_message);this.canAddFreebieItems&&(r=this.ecomCart,p=l.freebie_product_ids,Array.isArray(p)&&p.forEach((t=>{r.data.items.find((o=>o.product_id===t))||Object(a.g)({url:"/products/".concat(t,".json")}).then((o=>{let{data:e}=o;r.addProduct({...e,flags:["freebie","__tmp"]},null,p.reduce(((o,e)=>e===t?o+1:o),0))})).catch(console.error)})))}var r,p})),o?(this.localCouponCode?(this.$emit("update:coupon-code",this.localCouponCode),this.alertText=this.i19couponAppliedMsg):this.alertText=this.i19campaignAppliedMsg,this.$emit("set-discount-rule",e),this.alertVariant="info"):(this.localCouponCode?(this.alertText=s||this.i19invalidCouponMsg,this.alertVariant="warning"):this.alertText=null,this.$emit("set-discount-rule",{}))}},fetchDiscountOptions(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.isLoading=!0,this.ecomPassport.checkLogin()){const o=this.ecomPassport.getCustomer();t.customer={_id:o._id},o.display_name&&(t.customer.display_name=o.display_name)}Object(a.c)({url:"/apply_discount.json",method:"POST",data:{...this.modulesPayload,amount:{subtotal:this.localAmountTotal,...this.amount,total:this.localAmountTotal,discount:0},items:this.ecomCart.data.items,...t}}).then((t=>{let{data:o}=t;return this.parseDiscountOptions(o.result)})).catch((t=>{console.error(t),this.alertVariant="danger",this.alertText=Object(i.a)(s.qb)})).finally((()=>{this.isLoading=!1}))},submitCoupon(t){if(t||this.canAddCoupon){const{localCouponCode:t}=this,o={discount_coupon:t};this.fetchDiscountOptions(o)}},updateDiscount(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.couponCode?!t&&this.isCouponApplied||this.submitCoupon(t):(t||!this.isUpdateSheduled&&this.amount&&this.amount.total)&&this.fetchDiscountOptions()}},watch:{couponCode(t){t!==this.couponCode&&(this.localCouponCode=t,t&&!this.isFormVisible&&(this.isFormVisible=!0))},isFormAlwaysVisible(t){t&&(this.isFormVisible=!0)},isFormVisible(t){t&&this.$nextTick((()=>{this.$refs.input.focus()}))},localAmountTotal(t,o){null!==o&&Math.abs(t-o)>.01&&!this.isUpdateSheduled&&(this.isUpdateSheduled=!0,this.$nextTick((()=>{setTimeout((()=>{this.updateDiscount(),this.isUpdateSheduled=!1}),600)})))},amount:{handler(){this.fixAmount()},deep:!0}},mounted(){this.fixAmount(),this.updateDiscount(!1),this.getPontoMarket()}};o.a=p},311:function(t,o,e){"use strict";e.d(o,"a",(function(){return s})),e.d(o,"b",(function(){return i}));var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"discount-applier"},[t.getPontoMarket?e("div",{attrs:{id:"pm-selectOption"}},[t.pontoMarketOptions.pm.prize_list.length>0?[e("label",{staticClass:"pm__title",attrs:{id:"pm-title"}},[t._v("Clube Show: "),e("i",[t._v(t._s(Math.floor(t.pontoMarketOptions.pm.point_balance).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")))]),t._v(" pontos")]),e("small",[t._v("Que podem ser trocados por:")]),e("ul",{attrs:{id:"pm-list"}},t._l(t.pontoMarketOptions.pm.prize_list,(function(o){return 1==o.prize_value_type||o.prize_value>0?e("li",[e("label",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localPontoMarketCode,expression:"localPontoMarketCode"}],key:o.id_prize,attrs:{type:"radio",name:"pm-prize",id:o.id_prize,prize_value:o.prize_value,prize_value_type:o.prize_value_type},domProps:{value:o.id_prize,checked:t._q(t.localPontoMarketCode,o.id_prize)},on:{change:[function(e){t.localPontoMarketCode=o.id_prize},t.setPontoMarket]}}),e("span",[t._v(t._s(o.name)),e("br"),e("small",[t._v(t._s(o.points_required)+" pontos")])])])]):t._e()})),0)]:t._e()],2):t._e(),t.hasCouponInput?[e("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[t.isFormVisible?e("form",{key:"form",staticClass:"discount-applier__form",on:{submit:function(o){return o.preventDefault(),t.submitCoupon.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"discount-applier-coupon"}},[t._v(" "+t._s(t.i19discountCoupon)+" ")]),e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.localCouponCode,expression:"localCouponCode"}],ref:"input",staticClass:"form-control discount-applier__input",attrs:{type:"text",id:"discount-applier-coupon",required:"",readonly:t.isLoading,placeholder:t.i19code,"aria-label":t.i19code},domProps:{value:t.localCouponCode},on:{input:function(o){o.target.composing||(t.localCouponCode=o.target.value)}}}),e("div",{staticClass:"input-group-append"},[t.isLoading?e("span",{staticClass:"input-group-text"},[e("span",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}),e("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t.canAddCoupon?e("button",{key:"add",staticClass:"btn btn-outline-secondary",attrs:{type:"submit"}},[t._v(" "+t._s(t.i19add)+" ")]):e("button",{key:"applied",staticClass:"btn btn-outline-success",attrs:{disabled:"",type:"button"}},[e("i",{staticClass:"fas fa-check-circle"})])])])])]):e("div",{key:"button"},[t.isAttentionWanted?e("h6",{staticClass:"discount-applier__intro"},[t._v(" "+t._s(t.i19hasCouponOrVoucherQn)+" ")]):t._e(),e("button",{staticClass:"discount-applier__coupon-btn btn btn-sm",class:"btn-"+(t.isAttentionWanted?"secondary":"light"),attrs:{type:"button"},on:{click:function(o){o.preventDefault(),t.isFormVisible=!t.isFormVisible}}},[e("i",{staticClass:"fas fa-tag mr-1"}),t._v(" "+t._s(t.i19addDiscountCoupon)+" ")])])])]:t._e(),e("a-alert",{key:"alert-"+t.alertVariant,attrs:{"can-show":!t.isLoading&&Boolean(t.alertText),variant:t.alertVariant},on:{dismiss:function(o){t.alertText=null}}},[t._v(" "+t._s(t.alertText)+" ")])],2)},i=[]}}]);