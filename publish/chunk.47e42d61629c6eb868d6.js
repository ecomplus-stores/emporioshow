(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{204:function(t,e,i){"use strict";i(218)},205:function(t,e,i){"use strict";e.a=(t,e)=>new Promise((i=>{const s="object"==typeof window&&window.storefront;if(s){const o=()=>{let o=s.info&&s.info[t];return!!(o&&(e&&(o=o[e]),o&&Object.keys(o).length))&&(i(o),!0)};o()||s.on("info:".concat(t),o)}}))},206:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"a",(function(){return n}));var s=i(40);const o=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s.a;const i=e.getCustomer(),o=i.favorites||[],a=n(t,e);if(a){const e=o.indexOf(t);o.splice(e,1)}else o.push(t);return e.requestApi("/me.json","patch",{favorites:o}),!a},n=(t,e)=>{const{favorites:i}=e.getCustomer();return i&&i.includes(t)}},216:function(t,e,i){"use strict";var s={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((t=>{let{path:e}=t;return e===this.href}))))}}},o=i(61),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=n.exports},217:function(t,e,i){"use strict";i(14),i(6),i(34);var s=i(36),o=i(110),n=i(65);var a={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[s.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],imgWidth:0,imgHeight:0,height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(o.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:i}=this;if(i)return i;const s="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return s?s.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:i}=this;return t||(e?i.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:i}=this.$el,s=((t,e,i,s)=>{let o,n;for(const a in s){const r=s[a];if(void 0!==r&&t[a]){if(void 0!==n)if(null===r){if(n>=e)continue}else if(r<e||r-50<=i||null!==n&&r>n)continue;o=a,n=r}}return o})(this.src,t,i,this.containerBreakpoints),o=this.src[s],{url:n,size:a}=o||this.defaultImgObj;e=n,a&&([this.imgWidth,this.imgHeight]=a.split("x").map((t=>parseInt(t,10))),t&&this.imgHeight&&this.canCalcHeight&&(this.height=(t>=this.imgWidth?this.imgHeight:t*this.imgHeight/this.imgWidth)+"px"))}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(n.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,i="IMG"===t.tagName?t:t.lastChild;i.style.opacity=0,this.imgHeight&&(i.height=this.imgHeight,i.width=this.imgWidth),i.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const i=document.createElement("IMG");i.src=e,t.parentNode.insertBefore(i,t.nextSibling)},i.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=i.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},r=(i(204),i(61)),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var s=t.srcset,o=t.type;return i("source",{key:e,attrs:{srcset:s,type:o}})})):i("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},218:function(t,e,i){var s=i(243);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,i(203).default)("fd5c67d2",s,!0,{})},219:function(t,e,i){"use strict";var s=i(33),o=i(52),n=i(53),a=i(54),r=i(101),c=i(205);const l=(t,e)=>{const{type:i,value:s}=e;let o;if(s)return o="percentage"===i?t*(100-s)/100:t-s,o>0?o:0};var u={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""},canShowPriceOptions:{type:Boolean,default:!0}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0,min_amount:0},discountLabel:this.discountText,pointsProgramName:null,pointsMinPrice:0,earnPointsFactor:0}},computed:{i19asOf:()=>Object(o.a)(s.p),i19from:()=>Object(o.a)(s.Ab),i19interestFree:()=>Object(o.a)(s.Ob),i19of:()=>Object(o.a)(s.xc),i19to:()=>Object(o.a)(s.Od),i19upTo:()=>Object(o.a)(s.Xd),i19youEarn:()=>Object(o.a)(s.fe),price(){const t=Object(n.a)(this.product);return this.extraDiscount.value&&(!this.extraDiscount.min_amount||t>this.extraDiscount.min_amount)?l(t,this.extraDiscount):t},comparePrice(){return Object(a.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(n.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(n.a)(this.product);for(let i=0;i<t.length;i++){if(Object(n.a)({...this.product,...t[i]})>e)return!0}}return!1},priceWithDiscount(){return this.canShowPriceOptions&&l(this.price,this.discount)},installmentValue(){if(this.canShowPriceOptions&&this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:r.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,i=parseInt(this.price/e,10);this.installmentsNumber=Math.min(i,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){this.canShowPriceOptions&&(this.discountOption?this.updateDiscount(this.discountOption):Object(c.a)("apply_discount").then((t=>{t.available_extra_discount&&(this.extraDiscount=t.available_extra_discount)})),this.installmentsOption?this.updateInstallments(this.installmentsOption):Object(c.a)("list_payments").then((t=>{this.updateInstallments(t.installments_option),this.updateDiscount(t.discount_option);const e=t.loyalty_points_programs;this.isLiteral&&e&&this.$nextTick((()=>{for(const t in e){const i=e[t];if(i&&i.earn_percentage>0){this.pointsMinPrice=i.min_subtotal_to_earn,this.pointsProgramName=i.name,this.earnPointsFactor=i.earn_percentage/100;break}}}))})))}},d=(i(204),i(61)),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?i("span",{staticClass:"prices__compare"},[t.isLiteral?[i("small",[t._v(" "+t._s(t.i19from)+" ")]),i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),i("small",[t._v(" "+t._s(t.i19to)+" ")])]:i("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),i("strong",{staticClass:"prices__value"},[t.hasVariedPrices?i("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),i("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.earnPointsFactor>0&&!(t.pointsMinPrice>t.price)?i("div",{key:"points",staticClass:"prices__points"},[i("i",{staticClass:"i-check-circle"}),t._v(" "+t._s(t.i19youEarn)+" "),i("span",[t._v(" +"+t._s((t.earnPointsFactor*t.price).toFixed(1))+" ")]),i("em",[t._v(t._s(t.pointsProgramName))])]):t._e(),t.installmentsNumber>1&&t.installmentValue?i("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?i("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?i("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),i("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?i("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?i("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),i("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[i("small",[t._v(" "+t._s(t.i19asOf)+" ")]),i("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=p.exports},220:function(t,e,i){"use strict";i(43),i(6);var s=i(33),o=i(52),n=i(31),a=i(103),r=i(54),c=i(53),l=i(44),u=i(2),d=i(12),p=i(216),h=i(217),m=i(219),b=i(40),f=i(206);const g=(t,e)=>{if("object"==typeof window){t="productCard".concat(t,"Html");const i="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof i)return i}};var _={name:"ProductCard",components:{ALink:p.a,APicture:h.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},ecomPassport:{type:Object,default:()=>b.a},accountUrl:{type:String,default:"/app/#/account/"},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,isFavorite:!1,error:""}),computed:{i19addToFavorites:()=>Object(o.a)(s.l),i19outOfStock:()=>Object(o.a)(s.Ic),i19unavailable:()=>Object(o.a)(s.Td),ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(n.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(o.a)(s.v)},isInStock(){return Object(a.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},isLogged:()=>b.a.checkAuthorization(),discount(){const{body:t}=this;return Object(r.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records,this.isFavorite=Object(f.a)(this.body._id,this.ecomPassport)},fetchItem(){this.productId&&(this.isLoading=!0,Object(u.g)({url:"/products/".concat(this.productId,".json")}).then((t=>{let{data:e}=t;this.$emit("update:product",e),this.setBody(e),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(o.a)(s.R))})).finally((()=>{this.isLoading=!1})))},toggleFavorite(){this.isLogged&&(this.isFavorite=Object(f.b)(this.body._id,this.ecomPassport))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(u.g)({url:"/products/".concat(t._id,".json")}).then((e=>{let{data:s}=e;const o=["variations","customizations","kit_composition"];for(let t=0;t<o.length;t++){const e=s[o[t]];if(e&&e.length)return Promise.all([i.e(0),i.e(2),i.e(5),i.e(3),i.e(18)]).then(i.bind(null,421)).then((t=>{new l.a({render:e=>e(t.default,{props:{product:s}})}).$mount(this.$refs.quickview)}))}const{quantity:n,price:a}=s;d.a.addProduct({...t,quantity:n,price:a})})).catch((e=>{console.error(e),window.location="/".concat(t.slug)})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},y=(i(204),i(61)),v=Object(y.a)(_,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[i("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():i("section",[t._t("discount-tag",(function(){return[t.isActive&&t.discount>0?i("span",{staticClass:"product-card__offer-stamp"},[i("i",{staticClass:"i-arrow-down"}),t._v(" "),i("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()]}),null,{discount:t.discount}),t._t("body",(function(){return[i("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),i("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,s){return 1===t.body.pictures.length||1===s||t.isHovered?i("a-picture",{key:s,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):i("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",(function(){return[i(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])]}))],2)]})),t._t("rating",(function(){return[t._m(0)]})),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",(function(){return[i("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]})),i("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",(function(){return[t.buyHtml?i("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),i("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?i("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",(function(){return[i("i",{staticClass:"i-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")]}))],2)]}))],2)]:t._t("out-of-stock",(function(){return[i("p",{staticClass:"badge badge-dark mt-auto"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]})):t._t("unavailable",(function(){return[i("p",{staticClass:"badge badge-warning mt-auto"},[t._v(" "+t._s(t.i19unavailable)+" ")])]})),t._t("favorite",(function(){return[i("a",{staticClass:"btn product-card__favorite fade",attrs:{href:t.isLogged?null:t.accountUrl},on:{click:t.toggleFavorite}},[i("i",{staticClass:"i-heart mr-1",class:t.isFavorite?"active":null})])]})),t._t("footer",(function(){return[t.footerHtml?i("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()]}))],2)]),t.isLoading?[t._t("default"),t.error?i("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),i("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=v.exports},243:function(t,e,i){(e=i(202)(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"empty.scss"}]),t.exports=e},245:function(t,e,i){"use strict";i.r(e);i(43),i(6);var s=i(1),o=i(29),n=i(44),a=i(65),r=i(103),c=i(81),l=i(220),u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"product-card";t.buyText&&(window.productCardBuyText=t.buyText),t.buy&&(window.productCardBuyHtml=t.buy),t.footer&&(window.productCardFooterHtml=t.footer);const i=window.storefront&&window.storefront.getScopedSlots,s=(s,o,a,r,c)=>{new n.a({render:n=>n(l.a,{class:"product-card"!==e?e:null,attrs:{"data-product-id":o,"data-sku":a},props:{...t.props,productId:o,product:r,isLoaded:c,transitionClass:null},scopedSlots:"function"==typeof i?i(s,n):void 0})}).$mount(s)},o=document.querySelectorAll(".".concat(e)),u=[];for(let t=0;t<o.length;t++)if(o[t]){const{productId:e,toRender:i}=o[t].dataset;i&&-1===u.indexOf(e)&&u.push(e)}let d;if(u.length>=4&&u.length<=70&&!t.skipSearchApi){const t=new c.a;d=t.setPageSize(u.length).setProductIds(u).fetch(!0,{timeout:5e3}).then((()=>{const e=t.getItems();for(let t=0;t<2;t++)p(o[t]);return e})).catch((t=>{console.error(t)}))}else d=Promise.resolve();const p=t=>{if(t){const{productId:e,sku:i,toRender:o}=t.dataset;if(o){let o;d.then((t=>{Array.isArray(t)&&(o=t.find((t=>{let{_id:i}=t;return i===e})))})).finally((()=>{let n;if(o){if(n=!0,!o.available||!o.visible||!Object(r.a)(o)){const e=t.parentNode&&t.parentNode.parentNode;e&&"LI"===e.tagName&&e.parentNode.appendChild(e)}}else{const e=t.parentNode;if(e&&(o=e.dataset.product,"string"==typeof o))try{o=JSON.parse(o)}catch(t){o=void 0}}s(t,e,i,o,n)}))}}},h=Object(a.a)(o,{rootMargin:"350px 0px",threshold:0,load:p});h.observe()};const d=window.location.pathname.startsWith("/app/"),p=[],h="localhost"===window.location.hostname?50:1,m=(t,e)=>{const i=new Promise((i=>{setTimeout((()=>{const n=window._widgets&&window._widgets[t];if(n&&n.active&&(!n.desktopOnly||!s.isMobile)&&(d?n.enableCheckout:!n.disablePages))return e().then((e=>{"function"==typeof e.default&&e.default({...n.options,$emit(t,e){o.a.emit(t,e)}}),o.a.emit("widget:".concat(t)),console.log("Widget loaded: ".concat(t))})).catch(console.error).finally(i);i()}),h)}));p.push(i)},{resource:b}=document.body.dataset;d||"products"!==b||m("@ecomplus/widget-product",(()=>Promise.all([i.e(0),i.e(2),i.e(5),i.e(3),i.e(24)]).then(i.bind(null,407)))),Promise.all(p).then((()=>{m("@ecomplus/widget-product-card",(()=>Promise.resolve({default:u}))),("/search"===window.location.pathname||"categories"===b||"brands"===b||!b&&document.getElementById("search-engine"))&&m("@ecomplus/widget-search-engine",(()=>i.e(21).then(i.bind(null,408))));const t=t=>{"function"==typeof window.requestIdleCallback?setTimeout((()=>window.requestIdleCallback(t)),200):setTimeout(t,800)};t((()=>{o.a.emit("load:lcp"),d||(m("@ecomplus/widget-search",(()=>Promise.all([i.e(19),i.e(29)]).then(i.bind(null,416)))),m("@ecomplus/widget-minicart",(()=>i.e(20).then(i.bind(null,417)))),m("@ecomplus/widget-user",(()=>i.e(23).then(i.bind(null,418))))),Promise.all(p).then((()=>{t((()=>o.a.emit("load:components"))),m("@ecomplus/widget-tag-manager",(()=>i.e(27).then(i.bind(null,422)))),m("@ecomplus/widget-analytics",(()=>i.e(26).then(i.bind(null,423)))),m("@ecomplus/widget-fb-pixel",(()=>i.e(33).then(i.bind(null,419)))),m("@ecomplus/widget-gmc-ratings",(()=>i.e(25).then(i.bind(null,409)))),m("@ecomplus/widget-ebit",(()=>i.e(32).then(i.bind(null,410)))),m("@ecomplus/widget-compre-confie",(()=>i.e(31).then(i.bind(null,411))))}))}))}))}},0,[0,2,5,3,24,21]]);