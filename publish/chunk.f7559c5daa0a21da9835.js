(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{223:function(e,t,i){"use strict";var a=i(36),s=(i(6),i(14),i(34),i(2));var n=(e,t)=>{let[i]=t;i||(i=e.location.pathname);const a="string"==typeof i?i.slice(1):null,n="/"+e.storeId+"@"+a.replace(/\//g,"$")+".json";return Object(s.h)({url:n}).then((e=>{const t=e.data.GET;if(t){const[e,a]=t.split("@");if(a)return{path:i,resource:e,_id:a}}const a=new Error("Resource not found, invalid slug or store ID");throw a.response=e,a}))};var r=(e,t)=>{let[i]=t;return new Promise(((t,a)=>{const{storeId:n}=e,{resource:r,_id:o}=i;if(r&&o)Object(s.g)({url:"/".concat(r,"/").concat(o,".json"),storeId:n}).then((e=>{let{data:i}=e;t({resource:r,body:i})})).catch(a);else{const e=new Error("Invalid route resource or object ID");e.response={},a(e)}}))},o=e=>new Promise(((t,i)=>{const{storeId:a}=e,n=[],r=[];["products","categories","collections","brands"].forEach((e=>{n.push(Object(s.g)({url:"/".concat(e,".json"),storeId:a}).then((t=>{const{result:i}=t.data;Array.isArray(i)&&i.forEach((t=>{let{_id:i,slug:a,name:s,sku:n}=t;if(a){const t="/"+a;r.find((e=>e.path===t))||r.push({resource:e,_id:i,path:t,name:s,sku:n})}}))})))})),Promise.all(n).then((()=>t(r))).catch(i)})),c=i(4);var l=(e,t)=>{let[i,a=!0]=t;i||(i=e.location.hostname);const n="/domains/"+i+".json";return Object(s.e)({url:n}).then((t=>{let{data:i}=t;if(a){["store_id","store_object_id","channel_id"].forEach((e=>c.a.set(e,i[e])));const e=i.default_lang;e&&(c.a.set("lang",e),c.a.set("country_code",e.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===e&&(c.a.set("currency","BRL"),c.a.set("currency_symbol","R$")))}return e.storeId=i.store_id,i}))};t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object"==typeof window&&window.location;const i=this;this.storeId=e||a.$ecomConfig.get("store_id"),this.location=t,this.map=function(){return n(i,arguments)},this.resolve=function(){return r(i,arguments)},this.list=function(){return o(i)},this.setupStore=function(){return l(i,arguments)}}},260:function(e,t,i){var a=i(264);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(203).default)("6cc07505",a,!0,{})},261:function(e,t,i){var a=i(269);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(203).default)("089613ef",a,!0,{})},262:function(e,t,i){"use strict";var a={name:"ABackdrop",props:{isVisible:{type:Boolean,default:!0},zIndexOnShow:{type:Number,default:1080},transitionMs:{type:Number,default:150}},data:()=>({opacity:0,zIndex:null,top:null}),computed:{style(){const{top:e,zIndex:t,transitionMs:i,opacity:a}=this;return{top:e,transition:"opacity ".concat(i,"ms linear"),opacity:a,zIndex:t}}},methods:{hide(){this.$emit("update:is-visible",!1),this.$emit("hide")},lockBodyScroll(){document.body.style.maxWidth="".concat(document.body.offsetWidth,"px"),document.body.style.overflow="hidden"}},watch:{isVisible(e){e?(this.opacity=null,this.lockBodyScroll()):(this.opacity=0,document.body.style.overflow=document.body.style.maxWidth=null)},opacity(e){0===e?setTimeout((()=>{this.top=this.zIndex=null}),this.transitionMs):(this.zIndex=this.zIndexOnShow,this.top=0)}},mounted(){this.isVisible&&(setTimeout((()=>{this.opacity=null}),this.transitionMs),this.lockBodyScroll())}},s=(i(263),i(61)),n=Object(s.a)(a,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"backdrop",style:e.style,on:{click:e.hide}})}),[],!1,null,null,null);t.a=n.exports},263:function(e,t,i){"use strict";i(260)},264:function(e,t,i){(t=i(202)(!0)).push([e.i,".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}","",{version:3,sources:["ABackdrop.scss"],names:[],mappings:"AAAA,UAAU,4BAA4B,CAAC,cAAc,CAAC,YAAY,CAAC,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,UAAU,CAAC,WAAW,CAAC,YAAY",file:"ABackdrop.scss",sourcesContent:[".backdrop{background-color:var(--dark);cursor:pointer;height:100vh;left:0;opacity:.65;position:fixed;top:-100vh;width:100vw;z-index:-100}"]}]),e.exports=t},266:function(e,t,i){"use strict";t.a=(e,t)=>e.sort(((e,i)=>{if(e.app_id===i.app_id)return 0;const a=t.indexOf(e.app_id),s=t.indexOf(i.app_id);return a>-1?s>-1?a<s?-1:1:a>-1?-1:1:s>-1?1:0}))},268:function(e,t,i){"use strict";i(261)},269:function(e,t,i){(t=i(202)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=t},272:function(e,t,i){var a=i(283);a.__esModule&&(a=a.default),"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);(0,i(203).default)("6640bcbb",a,!0,{})},275:function(e,t,i){"use strict";i(43),i(14);var a=i(33),s=i(36),n=i(52),r=i(101),o=i(53),c=i(2),l=i(266),p=i(267),A=i.n(p),h=i(270);const u="object"==typeof window&&window.localStorage,d="shipping-to-zip",g=e=>{const t={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==e[i]&&(t[i]=e[i])})),t};var _={name:"ShippingCalculator",components:{CleaveInput:A.a,ShippingLine:h.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:s.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(n.a)(a.i),i19calculateShipping:()=>Object(n.a)(a.A),i19zipCode:()=>Object(n.a)(a.ge),i19freeShipping:()=>Object(n.a)(a.wb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((t=>{if(t.quantity&&t.production_time){const{days:i,cumulative:a}=t.production_time,s=a?i*t.quantity:i;s>e&&(e=s)}})),e}},methods:{formatMoney:r.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((e=>{const{validated:t,error:i,response:a}=e;if(t&&!i){a.shipping_services.forEach((t=>{this.shippingServices.push({app_id:e.app_id,...t})}));const t=a.free_shipping_from_value;t&&(!this.freeFromValue||this.freeFromValue>t)&&(this.freeFromValue=t)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,t)=>{const i=e.shipping_line.total_price-t.shipping_line.total_price;return i<0?-1:i>0?1:e.shipping_line.delivery_time&&t.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<t.shipping_line.delivery_time.days?-1:1})),this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):t?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:t}=this,i={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(i.items=this.localShippedItems,i.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:"/calculate_shipping.json",method:"POST",storeId:t,data:i}).then((t=>{let{data:i}=t;return this.parseShippingOptions(i.result,e)})).catch((t=>{e||this.scheduleRetry(4e3),console.error(t)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),u&&u.setItem(d,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(g);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,t)=>e+Object(o.a)(t)*t.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&u){const e=u.getItem(d);e&&(this.localZipCode=e)}}},C=_,m=(i(268),i(61)),f=Object(m.a)(C,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-calculator"},[e.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(t){return t.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(t){e.localZipCode=t},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},e._l(e.shippingServices,(function(t,a){return i(e.canSelectServices?"a":"div",{key:a,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===a},attrs:{href:e.canSelectServices&&"#"},on:{click:function(t){return t.preventDefault(),e.setSelectedService(a)}}},[i("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":t.shipping_line,"production-deadline":e.productionDeadline}}),i("small",[e._v(e._s(t.label))])]}),null,{service:t})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[i("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),i("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[e._v(" "+e._s(e.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);t.a=f.exports},278:function(e,t,i){"use strict";t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;for(;e.offsetParent;)t+=e.offsetTop,e=e.offsetParent;return window.scroll({top:t,behavior:"smooth"})}},281:function(e,t,i){"use strict";var a=i(293),s=i(265),n=(i(282),i(61)),r=Object(n.a)(s.a,a.a,a.b,!1,null,null,null);t.a=r.exports},282:function(e,t,i){"use strict";i(272)},283:function(e,t,i){(t=i(202)(!0)).push([e.i,'.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .fa-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .fa-chevron-up,.search-engine__filter button[aria-expanded=true] .fa-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .fa-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}',"",{version:3,sources:["SearchEngine.scss"],names:[],mappings:"AAAA,eAAe,iBAAiB,CAAC,oBAAoB,uBAAuB,CAAC,iBAAiB,CAAC,6BAA6B,CAAC,uBAAuB,CAAC,wBAAwB,kBAAkB,CAAC,YAAY,CAAC,6BAA6B,CAAC,wBAAwB,YAAY,CAAC,+BAA+B,sBAAsB,CAAC,2BAA2B,CAAC,sBAAsB,iBAAiB,CAAC,wBAAwB,sBAAsB,CAAC,cAAc,CAAC,mBAAmB,CAAC,iBAAiB,CAAC,WAAW,CAAC,OAAO,CAAC,aAAa,CAAC,sBAAsB,eAAe,CAAC,WAAW,CAAC,cAAc,CAAC,cAAc,CAAC,OAAO,CAAC,KAAK,CAAC,WAAW,CAAC,YAAY,CAAC,iCAAiC,eAAe,CAAC,2BAA2B,4BAA4B,CAAC,yBAAyB,CAAC,WAAW,CAAC,cAAc,CAAC,OAAO,CAAC,gBAAgB,CAAC,WAAW,CAAC,2CAA2C,iBAAiB,CAAC,sCAAsC,UAAU,CAAC,yCAAyC,0BAA0B,CAAC,kCAAkC,6BAA6B,CAAC,8BAA8B,sBAAsB,CAAC,6BAA6B,CAAC,6BAA6B,CAAC,cAAc,CAAC,cAAc,CAAC,kEAAkE,iBAAiB,CAAC,0BAA0B,CAAC,4BAA4B,CAAC,UAAU,CAAC,uBAAuB,CAAC,gHAAgH,YAAY,CAAC,iEAAiE,eAAe,CAAC,8EAA8E,SAAS,CAAC,oCAAoC,eAAe,CAAC,uBAAuB,0BAA0B,CAAC,6BAA6B,iBAAiB,CAAC,yBAAyB,2BAA2B,CAAC,+BAA+B,iBAAiB,CAAC,sCAAsC,aAAa,CAAC,qBAAqB,8BAA8B,CAAC,4BAA4B,6BAA6B,CAAC,2BAA2B,6BAA6B,CAAC,8CAA8C,uBAAuB,CAAC,uBAAuB,yBAAyB,CAAC,qBAAqB,6BAA6B",file:"SearchEngine.scss",sourcesContent:['.search-engine{position:relative}.search-engine__nav{background:var(--light);color:var(--gray);margin-bottom:var(--spacer-3);padding:var(--spacer-2)}.search-engine__nav>div{align-items:center;display:flex;justify-content:space-between}.search-engine__toggles{display:flex}.search-engine__toggles button{color:var(--secondary);margin-left:var(--spacer-1)}.search-engine__count{position:relative}.search-engine__spinner{color:var(--secondary);height:1.75rem;margin-top:-.875rem;position:absolute;right:-3rem;top:50%;width:1.75rem}.search-engine__aside{border-radius:0;height:100%;max-width:100%;position:fixed;right:0;top:0;width:280px;z-index:1100}.search-engine__aside .card-body{overflow-y:auto}.search-engine__aside-open{border-bottom-right-radius:0;border-top-right-radius:0;bottom:50vh;position:fixed;right:0;text-align:right;z-index:890}.search-engine__aside-open .spinner-border{margin-bottom:3px}.search-engine__aside-open .fa-search{opacity:.6}.search-engine__filter:not(:first-child){margin-top:var(--spacer-2)}.search-engine__filter:last-child{margin-bottom:var(--spacer-4)}.search-engine__filter button{color:var(--secondary);font-size:var(--font-size-lg);font-weight:var(--font-light);max-width:100%;padding-left:0}.search-engine__filter button i,.search-engine__filter button svg{color:var(--gray);font-size:var(--font-size);margin-right:var(--spacer-1);opacity:.5;transition:opacity .25s}.search-engine__filter button .fa-chevron-up,.search-engine__filter button[aria-expanded=true] .fa-chevron-down{display:none}.search-engine__filter button[aria-expanded=true] .fa-chevron-up{display:inherit}.search-engine__filter button:hover i,.search-engine__filter button:hover svg{opacity:1}.search-engine__filter button:focus{box-shadow:none}.search-engine__option{color:var(--primary-light)}.search-engine__option small{color:var(--gray)}.search-engine__selected{margin-left:var(--spacer-2)}.search-engine__selected>small{color:var(--gray)}.search-engine__selected>small:before{content:" / "}.search-engine__info{padding-bottom:var(--spacer-3)}.search-engine__info button{margin-bottom:var(--spacer-2)}.search-engine__terms>span{font-weight:var(--font-light)}.search-engine__terms>span:not(:last-of-type){color:var(--text-muted)}.search-engine__retail{padding:var(--spacer-2) 0}.search-engine__item{margin-bottom:var(--spacer-3)}']}]),e.exports=t},406:function(e,t,i){"use strict";i.r(t);i(6),i(124);var a=i(52),s=i(223),n=i(1),r=i(44),o=i(306),c=i(281);const l=Object(n.$)("#fallback-404");if(l.length){let e=new URLSearchParams(window.location.search).get("url");if(!e&&document.cookie){const t=document.cookie.split("; ").find((e=>e.startsWith("referrerUrl=")));t&&(e=t.split("=")[1])}if(e){const t=new s.a;l.html('<div class="spinner-border" role="status"></div>');const i=()=>{l.html(Object(n.$)("<h3>",{class:"my-4",html:['<i class="text-muted i-exclamation-triangle mr-3"></i>',Object(a.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),t.list().then((e=>{l.append([Object(n.$)("<p>",{class:"lead",html:Object(a.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(n.$)("<ul>",{html:e.map((e=>{let{path:t}=e;return'<li><a href="'.concat(t,'">').concat(t,"</a></li>")}))})])})).catch(console.error)};t.map(e).then((e=>{const{resource:i,_id:a}=e;switch(i){case"products":return new r.a({render:e=>e(o.default,{props:{productId:a}})});case"brands":case"categories":return t.resolve(e).then((e=>{let{body:t}=e;return new r.a({render:e=>e(c.a,{props:{[i]:[t.name]}})})}))}})).then((e=>{e?e.$mount(l[0]):i()})).catch((e=>{console.error(e),i()}))}}}}]);