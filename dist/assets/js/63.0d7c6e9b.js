(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{502:function(t,e,s){},771:function(t,e,s){"use strict";s(502)},924:function(t,e,s){"use strict";s.r(e);var a={props:{},data:()=>({tabName:["one","two","three"],currentIndex:0,cache:[!0,!1,!1]}),methods:{tabClick(t){this.cache[t]=!0,this.currentIndex=t,this.$refs.slide.style.transform=`translateX(-${100*t}%)`}}},i=(s(771),s(20)),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"demo-b"},[e("div",{staticClass:"tab"},[t._l(t.tabName,(function(s,a){return e("div",{key:a,staticClass:"tab-item",class:{active:t.currentIndex==a},on:{click:function(e){return t.tabClick(a)}}},[t._v("\n      "+t._s(s)+"\n    ")])})),t._v(" "),e("div",{staticClass:"foil",style:{left:t.currentIndex/t.tabName.length*100+"%",width:100/t.tabName.length+"%"}})],2),t._v(" "),e("div",{ref:"slide",staticClass:"slide"},[e("Dynamics-PdrPul-demo-index-a",{staticClass:"slide-item"}),t._v(" "),t.cache[1]?e("Dynamics-PdrPul-demo-index-a",{staticClass:"slide-item"}):t._e(),t._v(" "),t.cache[2]?e("Dynamics-PdrPul-demo-index-a",{staticClass:"slide-item"}):t._e()],1)])}),[],!1,null,"185a5d12",null);e.default=n.exports}}]);