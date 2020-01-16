(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["0f8bf050"],{"1f5f":function(t,e,s){},3052:function(t,e,s){},"338e":function(t,e,s){"use strict";var a=s("1f5f"),l=s.n(a);l.a},"442d":function(t,e,s){},"491e":function(t,e,s){},"81bf":function(t,e,s){"use strict";var a=s("442d"),l=s.n(a);l.a},8715:function(t,e,s){},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"col flex flex-center"},[s("temperature",{staticClass:"q-ma-md bg-grey-3",attrs:{value:t.temperature}}),s("humidity",{staticClass:"q-ma-md bg-grey-3",attrs:{value:t.humidity}}),s("pressure",{staticClass:"q-ma-md bg-grey-3",attrs:{value:t.pressure}}),s("battery",{staticClass:"q-ma-md bg-grey-3",attrs:{value:t.battery}}),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"page-date text-center"},[t._v("\n    Measured "+t._s(t.year)+"-"+t._s(t.month)+"-"+t._s(t.date)+" at "+t._s(t.hours)+":"+t._s(t.minutes)+"\n  ")]),s("q-inner-loading",{attrs:{showing:t.visible}},[s("q-spinner-gears",{attrs:{size:"20vh",color:"primary"}})],1)],1)},l=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"temperature q-pa-md shadow-5"},[s("div",{staticClass:"row justify-center"},[t._m(0),s("div",{staticClass:"temperature__digits col-6 self-center text-center text-h4"},[t._v("\n      "+t._s(t.value?t.value.toFixed(1):t.value)+"\n      "),s("br"),t._v("\n      °C\n    ")])]),t._m(1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4 flex flex-center relative-position"},[s("div",{staticClass:"temperature__scale-text self-start absolute text-right"},[t._v("50")]),s("div",{staticClass:"temperature__scale-text self-middle absolute text-right"},[t._v("0")]),s("div",{staticClass:"temperature__scale-text self-end absolute text-right"},[t._v("-50")]),s("div",{staticClass:"temperature__point self-end shadow-10 absolute"}),s("div",{staticClass:"temperature__scale flex shadow-10"},[s("div",{staticClass:"temperature__scale-range full-height flex"},[s("div",{staticClass:"temperature__scale-value self-end"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"temperature__label q-px-sm q-pt-md text-h6"},[t._v("Temperature")])])}],n=(s("c5f6"),{props:{value:Number},data:function(){return{scaleRange:100}},updated:function(){var t=this.$el.querySelector(".temperature__scale-range"),e=Math.floor(t.clientHeight/this.scaleRange*this.value+t.clientHeight/2);t.querySelector(".temperature__scale-value").style.height="".concat(e,"px")}}),c=n,u=(s("bdca"),s("2877")),o=Object(u["a"])(c,i,r,!1,null,null,null),d=o.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"humidity q-pa-md shadow-5"},[s("div",{staticClass:"row justify-center"},[t._m(0),s("div",{staticClass:"humidity__digits col-6 self-center text-center text-h4"},[t._v("\n      "+t._s(t.value?t.value.toFixed(0):t.value)+"\n      "),s("br"),t._v("\n      %\n    ")])]),t._m(1)])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4 flex flex-center relative-position"},[s("div",{staticClass:"humidity__scale-text self-start absolute text-right"},[t._v("100")]),s("div",{staticClass:"humidity__scale-text self-middle absolute text-right"},[t._v("50")]),s("div",{staticClass:"humidity__scale-text self-end absolute text-right"},[t._v("0")]),s("div",{staticClass:"humidity__point self-end shadow-10 absolute"}),s("div",{staticClass:"humidity__scale flex shadow-10"},[s("div",{staticClass:"humidity__scale-range full-height flex"},[s("div",{staticClass:"humidity__scale-value self-end"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"humidity__label q-px-sm q-pt-md text-h6"},[t._v("Humidity")])])}],f={props:{value:Number},data:function(){return{scaleRange:100}},updated:function(){var t=this.$el.querySelector(".humidity__scale-range"),e=Math.floor(t.clientHeight/this.scaleRange*this.value);t.querySelector(".humidity__scale-value").style.height="".concat(e,"px")}},h=f,m=(s("338e"),Object(u["a"])(h,_,v,!1,null,null,null)),p=m.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pressure q-pa-md shadow-5"},[s("div",{staticClass:"row justify-center"},[t._m(0),s("div",{staticClass:"pressure__digits col-6 self-center text-center text-h4"},[t._v("\n      "+t._s(t.value?t.value.toFixed(0):t.value)+"\n      "),s("br"),t._v("\n      mm\n      "),s("br"),t._v("\n      Hg\n    ")])]),t._m(1)])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4 flex flex-center relative-position"},[s("div",{staticClass:"pressure__scale-text self-start absolute text-right"},[t._v("790")]),s("div",{staticClass:"pressure__scale-text self-middle absolute text-right"},[t._v("750")]),s("div",{staticClass:"pressure__scale-text self-end absolute text-right"},[t._v("710")]),s("div",{staticClass:"pressure__point self-end shadow-10 absolute"}),s("div",{staticClass:"pressure__scale flex shadow-10"},[s("div",{staticClass:"pressure__scale-range full-height flex"},[s("div",{staticClass:"pressure__scale-value self-end"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"pressure__label q-px-sm q-pt-md text-h6"},[t._v("Pressure")])])}],g={props:{value:Number},data:function(){return{scaleRange:80}},updated:function(){var t=this.$el.querySelector(".pressure__scale-range"),e=Math.floor(t.clientHeight/this.scaleRange*(this.value-710));t.querySelector(".pressure__scale-value").style.height="".concat(e,"px")}},y=g,C=(s("ac20"),Object(u["a"])(y,x,b,!1,null,null,null)),w=C.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"battery q-pa-md shadow-5"},[s("div",{staticClass:"row justify-center"},[t._m(0),s("div",{staticClass:"battery__digits col-5 self-center text-center text-h4"},[t._v("\n      "+t._s(t.value?t.value.toFixed(2):t.value)+"\n      "),s("br"),t._v("\n      V\n    ")])]),t._m(1)])},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-5 flex flex-center q-pt-md relative-position"},[s("div",{staticClass:"battery__scale-text self-start absolute text-right"},[t._v("4.5")]),s("div",{staticClass:"battery__scale-text self-middle absolute text-right"},[t._v("3.5")]),s("div",{staticClass:"battery__scale-text self-end absolute text-right"},[t._v("2.5")]),s("div",{staticClass:"battery__scale flex flex-center shadow-10 relative-position"},[s("div",{staticClass:"battery__point self-start absolute"}),s("div",{staticClass:"battery__scale-range full-height flex"},[s("div",{staticClass:"battery__scale-value self-end"})])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-center"},[s("div",{staticClass:"battery__label q-px-sm q-pt-sm text-h6"},[t._v("Battery")])])}],j={props:{value:Number},data:function(){return{scaleRange:2}},updated:function(){var t=this.$el.querySelector(".battery__scale-range"),e=Math.floor(t.clientHeight/this.scaleRange*(this.value-2.5));t.querySelector(".battery__scale-value").style.height="".concat(e,"px")}},E=j,R=(s("81bf"),Object(u["a"])(E,q,$,!1,null,null,null)),D=R.exports,N={name:"MeteoNow",components:{Temperature:d,Humidity:p,Pressure:w,Battery:D},data:function(){return{temperature:null,humidity:null,pressure:null,battery:null,year:null,month:null,date:null,hours:null,minutes:null,visible:!1,showReturnData:!1}},created:function(){var t=this;this.visible=!0,this.showReturnData=!1,this.$axios.get("https://meteo.alexanderkif.now.sh").then((function(e){t.temperature=e.data.lastDataset.temperature,t.humidity=e.data.lastDataset.humidity,t.pressure=e.data.lastDataset.pressure,t.battery=e.data.lastDataset.battery;var s=new Date(e.data.lastDataset.created);t.year=s.getFullYear(),t.month=t.addZeroIfNeed(s.getMonth()+1),t.date=t.addZeroIfNeed(s.getDate()),t.hours=s.getHours(),t.minutes=t.addZeroIfNeed(s.getMinutes()),t.visible=!1,t.showReturnData=!0})).catch((function(e){t.lorem=e,t.$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))},methods:{addZeroIfNeed:function(t){return+t<10?"0".concat(t):t}}},H=N,M=(s("d1ff"),Object(u["a"])(H,a,l,!1,null,"000f230e",null));e["default"]=M.exports},ac20:function(t,e,s){"use strict";var a=s("8715"),l=s.n(a);l.a},bdca:function(t,e,s){"use strict";var a=s("491e"),l=s.n(a);l.a},d1ff:function(t,e,s){"use strict";var a=s("3052"),l=s.n(a);l.a}}]);