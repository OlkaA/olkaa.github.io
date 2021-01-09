(function(e){function t(t){for(var n,u,s=t[0],i=t[1],o=t[2],f=0,l=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(a,u)&&a[u]&&l.push(a[u][0]),a[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(l.length)l.shift()();return c.push.apply(c,o||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/exchange-currency/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var p=i;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1aa2":function(e,t,r){"use strict";r("f6c2")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-wrapper flex column justify-space-around align-center",attrs:{id:"app"}},[r("h2",[e._v("Currency Converter")]),r("ExchangeComponent"),r("p",{staticClass:"text"},[e._v(" It is very easy to use the Currency Converter. Just choose currencies in two blocks, then choose needed amount (in any block) and get exchanged value in another block 😉. ")])],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex row justify-space-between align-center"},[n("div",{staticClass:"currency-block flex column justify-space-around"},[n("div",[e._v("Currency I have")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.firstCurrency.name,expression:"firstCurrency.name"}],staticClass:"select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.firstCurrency,"name",t.target.multiple?r:r[0])}}},e._l(e.currencies,(function(t){return n("optgroup",{key:t.currencyType,attrs:{label:t.currencyType}},e._l(t.array,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)})),0),n("div",[e._v("Amount")]),n("input",{attrs:{type:"number",min:"0"},domProps:{value:e.firstCurrency.amount},on:{change:function(t){return e.formCurrenciesAmount(1,t)},keyup:function(t){return e.formCurrenciesAmount(1,t)}}})]),n("img",{staticClass:"exchange-logo",attrs:{alt:"Exchange logo",src:r("8a33")}}),n("div",{staticClass:"currency-block flex column justify-space-around"},[n("div",[e._v("Currency I want")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.secondCurrency.name,expression:"secondCurrency.name"}],staticClass:"select",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.secondCurrency,"name",t.target.multiple?r:r[0])}}},e._l(e.currencies,(function(t){return n("optgroup",{key:t.currencyType,attrs:{label:t.currencyType}},e._l(t.array,(function(t,r){return n("option",{key:r},[e._v(e._s(t))])})),0)})),0),n("div",[e._v("Amount")]),n("input",{attrs:{type:"number",min:"0"},domProps:{value:e.secondCurrency.amount},on:{change:function(t){return e.formCurrenciesAmount(2,t)},keyup:function(t){return e.formCurrenciesAmount(2,t)}}})]),e.errorMessageExist?n("ToastComponent",{attrs:{msg:"This exchange rate does not exist. Try another currencies pair."}}):e._e()],1)},s=[],i=(r("7db0"),r("caad"),r("d81d"),r("b0c0"),r("b64b"),r("d3b7"),r("07ac"),r("6062"),r("2532"),r("3ca3"),r("ddb0"),r("2909")),o=(r("96cf"),r("1da1")),p=(r("99af"),function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.exchangeratesapi.io/latest");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),f=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.binance.com/api/v3/exchangeInfo");case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.exchangeratesapi.io/latest?base=".concat(t,"&symbols=").concat(r));case 3:return n=e.sent,e.next=6,n.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return","type error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,r){return e.apply(this,arguments)}}(),m=function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.binance.com/api/v3/ticker/price?symbol=".concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e["catch"](0),e.abrupt("return","type error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),y=(r("dca8"),{FIAT:"FIAT",BINANCE:"BINANCE"});Object.freeze(y);var h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"toast-wrapper flex column justify-center align-center"},[r("div",{staticClass:"toast-message"},[e._v(e._s(e.msg))])])},v=[],d={name:"CurrencyBlockComponent",props:{msg:String},data:function(){return{}}},g=d,b=(r("9715"),r("2877")),x=Object(b["a"])(g,h,v,!1,null,"436c215d",null),C=x.exports,w={name:"ExchangeComponent",components:{ToastComponent:C},data:function(){return{currencies:[],initialAmount:10,firstCurrency:{name:"USD",amount:null,type:null},secondCurrency:{name:"DKK",amount:null,type:null},errorMessageExist:!1}},watch:{"firstCurrency.name":function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.firstCurrency.type=this.getCurrencyType(t),this.formCurrenciesAmount(1);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),"secondCurrency.name":function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.secondCurrency.type=this.getCurrencyType(t),this.formCurrenciesAmount(2);case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:return r=t.sent,t.next=5,f();case 5:return n=t.sent,e.currencies=[{currencyLabel:"Fiat currencies",currencyType:y.FIAT,array:Object.keys(r.rates)},{currencyLabel:"Binance currencies",currencyType:y.BINANCE,array:Object(i["a"])(new Set(n.symbols.map((function(e){return e.baseAsset}))))}],e.firstCurrency.type=e.getCurrencyType(e.firstCurrency.name),e.secondCurrency.type=e.getCurrencyType(e.secondCurrency.name),e.firstCurrency.amount=e.initialAmount,t.next=12,e.formCurrenciesAmount(1);case 12:case"end":return t.stop()}}),t)})))()},methods:{formCurrenciesAmount:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=null!==r&&void 0!==r&&r.target.value?+r.target.value:10,1!==t){e.next=10;break}return this.firstCurrency.amount=n,e.next=5,this.getRate(this.firstCurrency,this.secondCurrency);case 5:e.t0=e.sent,e.t1=n,this.secondCurrency.amount=e.t0*e.t1,e.next=17;break;case 10:if(2!==t){e.next=17;break}return this.secondCurrency.amount=n,e.next=14,this.getRate(this.secondCurrency,this.firstCurrency);case 14:e.t2=e.sent,e.t3=n,this.firstCurrency.amount=e.t2*e.t3;case 17:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),getFiatRate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l(t,r);case 2:if(n=e.sent,"string"!==typeof n){e.next=6;break}return this.showToast(),e.abrupt("return");case 6:return e.abrupt("return",Object.values(n.rates)[0]);case 7:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),getBinanceRate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,m(t+r);case 2:if(n=e.sent,"string"!==typeof n){e.next=13;break}return e.next=6,m(r+t);case 6:if(a=e.sent,"string"!==typeof a){e.next=12;break}return this.showToast(),e.abrupt("return");case 12:return e.abrupt("return",1/a.price);case 13:return e.abrupt("return",n.price);case 14:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),getRate:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.type!==y.FIAT||r.type!==y.FIAT){e.next=6;break}return e.next=3,this.getFiatRate(t.name,r.name);case 3:return e.abrupt("return",e.sent);case 6:if(t.type!==y.BINANCE||r.type!==y.BINANCE){e.next=12;break}return e.next=9,this.getBinanceRate(t.name,r.name);case 9:return e.abrupt("return",e.sent);case 12:if(t.type!==y.FIAT){e.next=27;break}return e.next=15,this.getBinanceRate(r.name,"USDT");case 15:if(n=e.sent,"USD"!==t.name){e.next=20;break}e.t0=1,e.next=23;break;case 20:return e.next=22,this.getFiatRate(t.name,"USD");case 22:e.t0=e.sent;case 23:return a=e.t0,e.abrupt("return",a/+n);case 27:return e.next=29,this.getBinanceRate(t.name,"USDT");case 29:if(c=e.sent,"USD"!==t.name){e.next=34;break}e.t1=1,e.next=37;break;case 34:return e.next=36,this.getFiatRate(r.name,"USD");case 36:e.t1=e.sent;case 37:return u=e.t1,e.abrupt("return",+c/u);case 39:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),getCurrencyType:function(e){var t=this.currencies.find((function(t){return t.array.includes(e)}));return t&&t.currencyType},showToast:function(){var e=this;this.errorMessageExist=!0,setTimeout((function(){return e.errorMessageExist=!1}),3e3)}}},k=w,j=(r("1aa2"),Object(b["a"])(k,u,s,!1,null,"056e629c",null)),R=j.exports,_={name:"App",components:{ExchangeComponent:R}},T=_,O=(r("5c0b"),Object(b["a"])(T,a,c,!1,null,null,null)),A=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"8a33":function(e,t,r){e.exports=r.p+"img/exchange-currency-icon.4534cfbe.png"},9715:function(e,t,r){"use strict";r("d9f6")},"9c0c":function(e,t,r){},d9f6:function(e,t,r){},f6c2:function(e,t,r){}});
//# sourceMappingURL=app.5b6aeb90.js.map