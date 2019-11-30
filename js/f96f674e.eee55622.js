(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f96f674e"],{"22cc":function(e,t,a){"use strict";var n=a("880d"),r=a.n(n);r.a},5118:function(e,t,a){(function(e){var n="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,r=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(r.call(setTimeout,n,arguments),clearTimeout)},t.setInterval=function(){return new i(r.call(setInterval,n,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(n,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},a("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,a("c8ba"))},6017:function(e,t,a){(function(e,t){(function(e,a){"use strict";if(!e.setImmediate){var n,r=1,i={},s=!1,o=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?f():p()?h():e.MessageChannel?v():o&&"onreadystatechange"in o.createElement("script")?g():y(),u.setImmediate=d,u.clearImmediate=c}function d(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var s={callback:e,args:t};return i[r]=s,n(r),r++}function c(e){delete i[e]}function l(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(a,n);break}}function m(e){if(s)setTimeout(m,0,e);else{var t=i[e];if(t){s=!0;try{l(t)}finally{c(e),s=!1}}}}function f(){n=function(e){t.nextTick(function(){m(e)})}}function p(){if(e.postMessage&&!e.importScripts){var t=!0,a=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=a,t}}function h(){var t="setImmediate$"+Math.random()+"$",a=function(a){a.source===e&&"string"===typeof a.data&&0===a.data.indexOf(t)&&m(+a.data.slice(t.length))};e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a),n=function(a){e.postMessage(t+a,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;m(t)},n=function(t){e.port2.postMessage(t)}}function g(){var e=o.documentElement;n=function(t){var a=o.createElement("script");a.onreadystatechange=function(){m(t),a.onreadystatechange=null,e.removeChild(a),a=null},e.appendChild(a)}}function y(){n=function(e){setTimeout(m,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,a("c8ba"),a("4362"))},"880d":function(e,t,a){},bd05:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[a("q-page",{staticClass:"flex flex-center"},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.showReturnData,expression:"showReturnData"}],staticClass:"page-date text-center"},[e._v("\n      Measured from "+e._s(e.year)+"-"+e._s(e.month)+"-"+e._s(e.date)+" "+e._s(e.hours)+":"+e._s(e.minutes)+" to now\n    ")]),a("canvas",{directives:[{name:"show",rawName:"v-show",value:e.showReturnData,expression:"showReturnData"}],attrs:{id:"temperatureChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:e.showReturnData,expression:"showReturnData"}],attrs:{id:"humidityChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:e.showReturnData,expression:"showReturnData"}],attrs:{id:"pressureChart"}}),a("canvas",{directives:[{name:"show",rawName:"v-show",value:e.showReturnData,expression:"showReturnData"}],attrs:{id:"batteryChart"}}),a("q-inner-loading",{attrs:{showing:e.visible}},[a("q-spinner-gears",{attrs:{size:"20vh",color:"primary"}})],1)],1)],1)},r=[],i=(a("f751"),a("30ef")),s=a.n(i),o=a("5118"),u=a("c1df"),d=a.n(u),c={name:"MeteoCharts3d",data:function(){return{temperature:[],humidity:[],pressure:[],altitude:[],battery:[],year:null,month:null,date:null,hours:null,minutes:null,visible:!0,showReturnData:!1}},created:function(){var e=this,t=new Date(new Date-2592e5).toISOString();this.$axios.get("https://meteo.alexanderkif.now.sh/data?start=".concat(t)).then(function(t){var a=new Date(t.data.start);e.year=a.getFullYear(),e.month=e.addZeroIfNeed(a.getMonth()+1),e.date=e.addZeroIfNeed(a.getDate()),e.hours=a.getHours(),e.minutes=e.addZeroIfNeed(a.getMinutes());var n=t.data.datasets;n.forEach(function(t){e.temperature.push({t:new Date(t._id).valueOf(),y:+t.temperature}),e.humidity.push({t:new Date(t._id).valueOf(),y:+t.humidity}),e.pressure.push({t:new Date(t._id).valueOf(),y:+t.pressure}),e.battery.push({t:new Date(t._id).valueOf(),y:+t.battery}),e.altitude.push({x:t._id,y:+t.altitude})});var r=document.getElementById("temperatureChart"),i=new s.a(r,e.getChartCfg("Temperature",e.temperature,"red","Temperature, *C")),u=document.getElementById("humidityChart"),d=new s.a(u,e.getChartCfg("Humidity",e.humidity,"blue","Humidity, %")),c=document.getElementById("pressureChart"),l=new s.a(c,e.getChartCfg("Pressure",e.pressure,"green","Pressure, mmHg")),m=document.getElementById("batteryChart"),f=new s.a(m,e.getChartCfg("Battery",e.battery,"orange","Battery, V"));Object(o["setInterval"])(function(){i.update(),d.update(),l.update(),f.update()},3e5),e.visible=!1,e.showReturnData=!0}).catch(function(t){e.lorem=t,console.log(t),e.$q.notify({color:"negative",position:"top",message:"Loading failed",icon:"report_problem"})})},methods:{addZeroIfNeed:function(e){return+e<10?"0".concat(e):e},getChartCfg:function(e,t,a,n){return{type:"line",data:{datasets:[{label:e,backgroundColor:a,borderColor:a,data:t,type:"line",pointRadius:1,fill:!1,borderWidth:2}]},options:{scales:{xAxes:[{type:"time",distribution:"series",time:{displayFormats:{minute:"D MMM H:mm"}},ticks:{source:"data",autoSkip:!0}}],yAxes:[{scaleLabel:{display:!0,labelString:n},properties:{paddingTop:30,paddingBottom:100}}]},tooltips:{intersect:!1,mode:"index",callbacks:{title:function(e,t){var a=Object.assign({},t.datasets[e[0].datasetIndex].data[e[0].index]);return d()(new Date(a.t).toISOString()).format("YYYY-MM-DD HH:mm")},label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=": "),a+=parseFloat(e.value).toFixed(2),a}}}}}}}},l=c,m=(a("22cc"),a("2877")),f=Object(m["a"])(l,n,r,!1,null,"d28b49e6",null);t["default"]=f.exports}}]);