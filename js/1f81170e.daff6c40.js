(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1f81170e"],{7320:function(t,e,a){"use strict";var s=a("b4b2"),r=a.n(s);r.a},"8b24":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"page-date text-center"},[t._v("\n    Measured "+t._s(t.year)+"-"+t._s(t.month)+"-"+t._s(t.date)+" at "+t._s(t.hours)+":"+t._s(t.minutes)+"\n  ")]),a("q-page",{staticClass:"flex flex-center"},[a("q-card",{staticClass:"bg-grey-3 relative-position card-datasets"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Temperature,")]),a("div",{staticClass:"text-h6 text-center"},[t._v("°C")])]),a("q-card-section",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"card-data text-center"},[t._v("\n            "+t._s(t.temperature)+"\n          ")])])],1)],1),a("q-card",{staticClass:"bg-grey-3 relative-position card-datasets"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Humidity,")]),a("div",{staticClass:"text-h6 text-center"},[t._v("%")])]),a("q-card-section",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"card-data text-center"},[t._v("\n            "+t._s(t.humidity)+"\n          ")])])],1)],1),a("q-card",{staticClass:"bg-grey-3 relative-position card-datasets"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Pressure,")]),a("div",{staticClass:"text-h6 text-center"},[t._v("mmHg")])]),a("q-card-section",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"card-data text-center"},[t._v("\n            "+t._s(t.pressure)+"\n          ")])])],1)],1),a("q-card",{staticClass:"bg-grey-3 relative-position card-datasets"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center"},[t._v("Altitude,")]),a("div",{staticClass:"text-h6 text-center"},[t._v("meters")])]),a("q-card-section",[a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],staticClass:"card-data text-center"},[t._v("\n            "+t._s(t.altitude)+"\n          ")])])],1)],1),a("q-inner-loading",{attrs:{showing:t.visible}},[a("q-spinner-gears",{attrs:{size:"20vh",color:"primary"}})],1)],1)],1)},r=[],i={name:"MeteoNow",data:function(){return{temperature:null,humidity:null,pressure:null,altitude:null,year:null,month:null,date:null,hours:null,minutes:null,visible:!1,showReturnData:!1}},created:function(){var t=this;this.visible=!0,this.showReturnData=!1,this.$axios.get("https://meteo.alexanderkif.now.sh").then(function(e){t.temperature=e.data.lastDataset.temperature,t.humidity=e.data.lastDataset.humidity,t.pressure=e.data.lastDataset.pressure,t.altitude=e.data.lastDataset.altitude;var a=new Date(e.data.lastDataset.created);t.year=a.getFullYear(),t.month=t.addZeroIfNeed(a.getMonth()+1),t.date=t.addZeroIfNeed(a.getDate()),t.hours=a.getHours(),t.minutes=t.addZeroIfNeed(a.getMinutes()),t.visible=!1,t.showReturnData=!0}).catch(function(e){t.lorem=e,console.log(e),t.$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})},methods:{addZeroIfNeed:function(t){return+t<10?"0".concat(t):t}}},n=i,c=(a("7320"),a("2877")),d=Object(c["a"])(n,s,r,!1,null,"15af6192",null);e["default"]=d.exports},b4b2:function(t,e,a){}}]);