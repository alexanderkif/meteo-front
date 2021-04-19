(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0b93":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"row justify-center"},[a("div",[a("div",{staticClass:"row justify-center"},[a("q-input",{staticClass:"q-pa-sm",staticStyle:{"max-width":"250px"},attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateFromProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateFromProxy.hide()}},model:{value:t.dateFrom,callback:function(e){t.dateFrom=e},expression:"dateFrom"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{ref:"qTimeFromProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeFromProxy.hide()}},model:{value:t.dateFrom,callback:function(e){t.dateFrom=e},expression:"dateFrom"}})],1)],1)]},proxy:!0}]),model:{value:t.dateFrom,callback:function(e){t.dateFrom=e},expression:"dateFrom"}}),a("q-input",{staticClass:"q-pa-sm",staticStyle:{"max-width":"250px"},attrs:{filled:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[a("q-popup-proxy",{ref:"qDateToProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-date",{attrs:{mask:"YYYY-MM-DD HH:mm"},on:{input:function(){return t.$refs.qDateToProxy.hide()}},model:{value:t.dateTo,callback:function(e){t.dateTo=e},expression:"dateTo"}})],1)],1)]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"access_time"}},[a("q-popup-proxy",{ref:"qTimeToProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("q-time",{attrs:{mask:"YYYY-MM-DD HH:mm",format24h:""},on:{input:function(){return t.$refs.qTimeToProxy.hide()}},model:{value:t.dateTo,callback:function(e){t.dateTo=e},expression:"dateTo"}})],1)],1)]},proxy:!0}]),model:{value:t.dateTo,callback:function(e){t.dateTo=e},expression:"dateTo"}})],1)]),a("div",[a("div",{staticClass:"row justify-center"},[a("q-select",{staticClass:"q-pa-sm",staticStyle:{width:"250px"},attrs:{filled:"",options:t.tframe_units,label:"Time units","transition-show":"flip-up","transition-hide":"flip-down"},on:{input:t.changeTframe},model:{value:t.TFRAME,callback:function(e){t.TFRAME=e},expression:"TFRAME"}}),a("q-select",{staticClass:"q-pa-sm",staticStyle:{width:"250px"},attrs:{filled:"",options:t.tstep_units,label:"Time steps","transition-show":"flip-up","transition-hide":"flip-down"},model:{value:t.TSTEP,callback:function(e){t.TSTEP=e},expression:"TSTEP"}})],1)])])]),a("div",{staticClass:"q-pb-md fit"},[a("div",{staticClass:"row justify-center"},[a("q-btn",{attrs:{color:"primary",label:"Get data"},on:{click:t.getData}})],1)]),a("div",{staticClass:"text-h4 text-negative",attrs:{id:"error"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],attrs:{id:"temperatureChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],attrs:{id:"humidityChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],attrs:{id:"pressureChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:t.showReturnData,expression:"showReturnData"}],attrs:{id:"batteryChart"}}),a("q-inner-loading",{attrs:{showing:t.visible}},[a("q-spinner-gears",{attrs:{size:"10vh",color:"primary"}})],1)],1)],1)},r=[],n=(a("f751"),a("f3e3")),i=a.n(n),o=a("30ef"),d=a.n(o),c=a("c1df"),u=a.n(c),l=a("10a9"),f={name:"MeteoCharts3d",data:function(){return{temperature:[],humidity:[],pressure:[],altitude:[],battery:[],year:null,month:null,date:null,hours:null,minutes:null,visible:!1,showReturnData:!0,dateFrom:u()(new Date(new Date-2592e6).toISOString()).format("YYYY-MM-DD HH:mm"),dateTo:u()((new Date).toISOString()).format("YYYY-MM-DD HH:mm"),temperatureChart:null,humidityChart:null,pressureChart:null,batteryChart:null,TFRAME:"hour",tframe_units:["minute","hour","day","month"],TSTEP:12,tstep_units:[5,10,15,20,30]}},methods:{changeTframe:function(){switch(this.TFRAME){case"minute":this.tstep_units=[5,10,15,20,30];break;case"hour":this.tstep_units=[1,2,3,4,6,12];break;case"day":this.tstep_units=[1,2,3,8,11,16];break;case"month":this.tstep_units=[1,2,3,4,6];break;default:break}var t=i()(this.tstep_units,1);this.TSTEP=t[0]},getData:function(){var t=this;this.visible=!0,this.showReturnData=!1,this.temperature=[],this.humidity=[],this.pressure=[],this.altitude=[],this.battery=[];var e=new Date(this.dateFrom).toISOString(),a=new Date(this.dateTo).toISOString();this.$axios.get("".concat(l.urlAPI,"/data?start=").concat(e,"&finish=").concat(a,"&tframe=").concat(this.TFRAME,"&step=").concat(this.TSTEP)).then((function(e){var a=document.getElementById("error");if(e.data.result)return t.showReturnData=!1,t.visible=!1,void(a.innerText=e.data.result);if(0===e.data.count)return t.showReturnData=!1,t.visible=!1,void(a.innerText="No data to show in the range.");t.showReturnData=!0,a.innerText="";var s=e.data.datasets;s.forEach((function(e){var a=new Date(Date.parse(e._id));t.temperature.push({t:new Date(a).valueOf(),y:+e.temperature}),t.humidity.push({t:new Date(a).valueOf(),y:+e.humidity}),t.pressure.push({t:new Date(a).valueOf(),y:+e.pressure}),t.battery.push({t:new Date(e._id).valueOf(),y:+e.battery}),t.altitude.push({x:a,y:+e.altitude})}));var r={minute:"D MMM H:mm"};t.temperature[1].t-t.temperature[0].t>=108e5&&(r={hour:"D MMM HH"}),t.temperature[1].t-t.temperature[0].t>=864e5&&(r={day:"D MMM"}),t.temperatureChart&&t.temperatureChart.destroy(),t.humidityChart&&t.humidityChart.destroy(),t.pressureChart&&t.pressureChart.destroy(),t.batteryChart&&t.batteryChart.destroy(),t.temperatureChart=new d.a(document.getElementById("temperatureChart"),t.getChartCfg("Temperature",t.temperature,"red","Temperature, *C",r)),t.humidityChart=new d.a(document.getElementById("humidityChart"),t.getChartCfg("Humidity",t.humidity,"blue","Humidity, %",r)),t.pressureChart=new d.a(document.getElementById("pressureChart"),t.getChartCfg("Pressure",t.pressure,"green","Pressure, mmHg",r)),t.batteryChart=new d.a(document.getElementById("batteryChart"),t.getChartCfg("Battery",t.battery,"orange","Battery, V",r)),t.visible=!1})).catch((function(e){t.lorem=e,t.$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})}))},addZeroIfNeed:function(t){return+t<10?"0".concat(t):t},getChartCfg:function(t,e,a,s,r){return{type:"line",data:{datasets:[{label:t,backgroundColor:a,borderColor:a,data:e,type:"line",pointRadius:1,fill:!1,borderWidth:2}]},options:{scales:{xAxes:[{type:"time",distribution:"series",time:{displayFormats:r},ticks:{source:"data",autoSkip:!0}}],yAxes:[{scaleLabel:{display:!0,labelString:s},properties:{paddingTop:30,paddingBottom:100}}]},tooltips:{intersect:!1,mode:"index",callbacks:{title:function(t,e){var a=Object.assign({},e.datasets[t[0].datasetIndex].data[t[0].index]);return u()(new Date(a.t).toISOString()).format("YYYY-MM-DD HH:mm")},label:function(t,e){var a=e.datasets[t.datasetIndex].label||"";return a&&(a+=": "),a+=parseFloat(t.value).toFixed(2),a}}}}}}}},m=f,p=(a("1896"),a("2877")),h=a("eebe"),b=a.n(h),j=a("9989"),y=a("27f9"),v=a("0016"),w=a("7cbe"),g=a("52ee"),x=a("ca78"),k=a("ddd8"),C=a("9c40"),D=a("74f7"),T=a("cf57"),q=Object(p["a"])(m,s,r,!1,null,"d6b45afa",null);e["default"]=q.exports;b()(q,"components",{QPage:j["a"],QInput:y["a"],QIcon:v["a"],QPopupProxy:w["a"],QDate:g["a"],QTime:x["a"],QSelect:k["a"],QBtn:C["a"],QInnerLoading:D["a"],QSpinnerGears:T["a"]})},"10a9":function(t){t.exports=JSON.parse('{"urlAPI":"http://152.67.227.202:3000"}')},1896:function(t,e,a){"use strict";var s=a("359c"),r=a.n(s);r.a},"359c":function(t,e,a){},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"}}]);