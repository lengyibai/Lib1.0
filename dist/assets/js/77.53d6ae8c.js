(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{468:function(t,e,i){},706:function(t,e,i){"use strict";i(468)},873:function(t,e,i){"use strict";i.r(e);var l={name:"Waterfall",props:{count:{type:Number,default:2},gap:{type:Number,default:10},loadHeight:{type:Number,default:100},loading:{type:Boolean,default:!1}},data:()=>({childs:[],parent:null,isLoadMore:!0}),mounted(){this.parent=this.$refs.Waterfall,this.updateChilds(),this.parent.parentElement.addEventListener("scroll",t=>{let e=Math.abs(t.target.scrollTop-t.target.scrollHeight+t.target.clientHeight);e<=0&&this.$emit("update:loading",!0),e<=this.loadHeight&&this.isLoadMore?(this.$emit("load-more"),this.isLoadMore=!1):e>this.loadHeight&&(this.isLoadMore=!0),this.$emit("scroll",t.target.scrollTop)})},watch:{count(){this.updateChilds()}},methods:{updateChilds(){this.$nextTick(()=>{this.$slots.default&&(this.childs=this.$slots.default.map(t=>t.elm),function({count:t=2,gap:e=10,parent:i=null,childs:l=[]}={}){if(!l[0])return;let s=l[0].offsetWidth,a=[];for(let n=0;n<l.length;n++)if(n<t)i.style.width=(s+e)*t-e+"px",l[n].style.top=e+"px",a.push(l[n].offsetHeight+e),l[n].style.left=(s+e)*n+"px",l[n].style.opacity=1;else{let t={minHeight:a[0],minIndex:0};for(let e=0;e<a.length;e++)a[e]<t.minHeight&&(t.minHeight=a[e],t.minIndex=e);l[n].style.top=t.minHeight+e+"px",l[n].style.left=(s+e)*t.minIndex+"px",l[n].style.opacity=1,a[t.minIndex]=parseFloat(l[n].style.top)+parseFloat(l[n].offsetHeight)}}({count:this.count,gap:this.gap,parent:this.parent,childs:this.childs}))})}}},s=(i(706),i(20)),a=Object(s.a)(l,(function(){return(0,this._self._c)("div",{ref:"Waterfall",staticClass:"Waterfall"},[this._t("default")],2)}),[],!1,null,"1e55a1a8",null);e.default=a.exports}}]);