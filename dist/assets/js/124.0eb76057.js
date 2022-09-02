(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{796:function(t,i,e){"use strict";e.r(i);function s(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}var o={name:"ViewImg",data:()=>({}),components:{},methods:{},directives:{viewImg:{inserted(t){t.addEventListener("click",t=>{new e(t.target)});const i={CLOSE:'<svg t="1662135922951" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2662"><path d="M1022.583467 127.803733 894.779733 0 511.291733 383.4624 127.8464 0 0 127.803733 383.496533 511.274667 0 894.737067 127.8464 1022.5408 511.291733 639.0784 894.779733 1022.5408 1022.583467 894.737067 639.138133 511.274667Z" p-id="2663" fill="#ffffff"></path></svg>',CLOCKWISE:'<svg t="1662135824052" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1399"><path d="M482.773333 66.517333l148.181334 151.168a21.333333 21.333333 0 0 1 0 29.866667l-147.84 150.826667a21.333333 21.333333 0 0 1-28.16 2.090666l-2.346667-2.090666-27.050667-27.605334a21.333333 21.333333 0 0 1 0-29.866666l69.888-71.338667a304.64 304.64 0 1 0 318.421334 352.682667l1.024-6.826667c0.170667-1.408 0.426667-3.285333 0.64-5.632a21.333333 21.333333 0 0 1 22.314666-19.114667l42.666667 2.261334a21.333333 21.333333 0 0 1 20.224 22.4l-0.085333 1.024-1.194667 10.496A389.973333 389.973333 0 1 1 484.821333 184.746667l-59.306666-60.458667a21.333333 21.333333 0 0 1 0-29.866667l27.093333-27.605333a21.333333 21.333333 0 0 1 30.165333-0.298667z" p-id="1400" fill="#ffffff"></path></svg>',COUNTER:'<svg t="1662135840330" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1590"><path d="M541.226667 66.517333L393.045333 217.685333a21.333333 21.333333 0 0 0 0 29.866667l147.84 150.826667a21.333333 21.333333 0 0 0 28.16 2.090666l2.346667-2.090666 27.050667-27.605334a21.333333 21.333333 0 0 0 0-29.866666l-69.888-71.338667a304.64 304.64 0 1 1-318.421334 352.682667l-1.024-6.826667a176.554667 176.554667 0 0 1-0.64-5.632 21.333333 21.333333 0 0 0-22.314666-19.114667l-42.666667 2.261334a21.333333 21.333333 0 0 0-20.224 22.4l0.085333 1.024 1.194667 10.496A389.973333 389.973333 0 1 0 539.178667 184.746667l59.306666-60.458667a21.333333 21.333333 0 0 0 0-29.866667l-27.093333-27.605333a21.333333 21.333333 0 0 0-30.165333-0.298667z" p-id="1591" fill="#ffffff"></path></svg>'};class e{constructor(t){s(this,"size",1),s(this,"position",[0,0]),s(this,"mask",void 0),s(this,"pic",void 0),s(this,"boxDom",void 0),s(this,"clonedBox",void 0),s(this,"closeBtn",void 0),s(this,"clockwise",void 0),s(this,"counter",void 0),s(this,"x",0),s(this,"y",0),s(this,"size",1),s(this,"transform",""),s(this,"origin",[0,0]),s(this,"rotate",0),s(this,"status",0),this.boxDom=t,this.createdMask(),this.createPic(),this.createBtn(),this.createCloseBtn(),"IMG"===this.boxDom.tagName&&(this.initImg(),this.addEventListener())}createdMask(){this.mask=document.createElement("div"),this.mask.style.cssText=" display: none; position: fixed; inset: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.75); transition: all 0.25s; opacity: 0; z-index: 999; ",document.body.appendChild(this.mask)}createPic(){this.pic=document.createElement("div"),this.pic.style.cssText=" position: fixed; inset: 0; width: 100%; height: 100%; transition: all 0.25s; z-index: 1000; display: none; transform: scale(0.75); opacity: 0; ",document.body.appendChild(this.pic)}createBtn(){this.tool=document.createElement("div"),this.clockwise=document.createElement("div"),this.counter=document.createElement("div"),this.tool.style.cssText=" position: fixed; display: none; justify-content: space-between; width: 110px; left: 50%; bottom: 30px; transform: translateX(-50%); background-color: #606266; border-radius: 50px; z-index: 1001; padding: 10px 23px; opacity: 0; transition: all 0.25s; ";const t="width: 23px; height: 23px; ";this.clockwise.style.cssText=t,this.counter.style.cssText=t,this.clockwise.innerHTML=i.CLOCKWISE,this.counter.innerHTML=i.COUNTER,this.tool.appendChild(this.counter),this.tool.appendChild(this.clockwise),document.body.appendChild(this.tool),this.clockwise.addEventListener("click",t=>{t.stopPropagation(),this.setPosition("clockwise")}),this.counter.addEventListener("click",t=>{t.stopPropagation(),this.setPosition("counter")})}createCloseBtn(){this.closeBtn=document.createElement("div"),this.closeBtn.innerHTML=i.CLOSE,this.closeBtn.style.cssText=" position: fixed; display: none; top: 60px; right: 60px; width: 40px; height: 40px; z-index: 1001; padding: 12px; background-color: #606266; transition: all 0.25s; opacity: 0; border-radius: 50%; ",document.body.appendChild(this.closeBtn)}initImg(){this.clonedBox=this.boxDom.cloneNode(!0),this.clonedBox.style.cssText=" position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); max-width: 100%; max-height: 100%; object-fit: contain; transition: all 0.25s; ",this.pic.appendChild(this.clonedBox),this.pic.style.display="block",this.mask.style.display="block",this.tool.style.display="flex",this.closeBtn.style.display="block",setTimeout(()=>{this.mask.style.opacity=1,this.pic.style.opacity=1,this.pic.style.transform="scale(1)",this.tool.style.opacity=1,this.closeBtn.style.opacity=1,this.origin=[this.clonedBox.offsetWidth/2,this.clonedBox.offsetHeight/2]})}setPosition(t){({clockwise(){this.rotate+=90,this.status++},counter(){this.rotate-=90,this.status--}})[t].call(this),this.setStyle()}setStyle(){this.clonedBox.style.transform=`translate(calc(-50% + ${this.x}px), calc(-50% + ${this.y}px)) rotate(${this.rotate}deg) scale(${this.size})`,this.clonedBox.style.transformOrigin=`${this.origin[0]}px ${this.origin[1]}px`}addEventListener(){this.pic.addEventListener("mousewheel",this.wheel.bind(this)),this.clonedBox.addEventListener("click",t=>{t.stopPropagation()}),this.closeBtn.addEventListener("click",this.close.bind(this)),this.pic.addEventListener("click",this.close.bind(this));const t=this;let i=0,e=0,s=0,o=0,n=0,a=0;function l(l){const c=t.status;c%4==0&&(t.x=s+(l.pageX-i)/t.size,t.y=o+(l.pageY-e)/t.size,t.origin[0]=n-(l.pageX-i)/t.size,t.origin[1]=a-(l.pageY-e)/t.size),c%4!=1&&c%4!=-3||(t.x=s+(l.pageY-e)/t.size,t.y=o-(l.pageX-i)/t.size,t.origin[0]=n-(l.pageY-e)/t.size,t.origin[1]=a+(l.pageX-i)/t.size),c%4!=2&&c%4!=-2||(t.x=s-(l.pageX-i)/t.size,t.y=o-(l.pageY-e)/t.size,t.origin[0]=n+(l.pageX-i)/t.size,t.origin[1]=a+(l.pageY-e)/t.size),c%4!=3&&c%4!=-1||(t.x=s-(l.pageY-e)/t.size,t.y=o+(l.pageX-i)/t.size,t.origin[0]=n+(l.pageY-e)/t.size,t.origin[1]=a-(l.pageX-i)/t.size),t.setStyle()}this.clonedBox.addEventListener("mousedown",t=>{t.preventDefault(),i=t.pageX,e=t.pageY,s=this.x,o=this.y,n=this.origin[0],a=this.origin[1],this.clonedBox.style.transition="all 0s",this.clonedBox.addEventListener("mousemove",l)}),this.clonedBox.addEventListener("mouseup",()=>{this.clonedBox.style.transition="all 0.25s",this.clonedBox.removeEventListener("mousemove",l)})}wheel(t){t.deltaY>0?(this.size/=1.25,this.size<.1&&(this.size=.1)):this.size*=1.25,this.setStyle()}close(){this.pic.removeEventListener("mousewheel",this.wheel.bind(this)),this.mask.style.opacity=0,this.tool.style.opacity=0,this.pic.style.opacity=0,this.pic.style.transform="scale(0.75)",this.closeBtn.style.opacity=0,setTimeout(()=>{this.mask.style.display="none",this.tool.style.display="none",this.pic.style.display="none",this.pic.innerHTML="",this.closeBtn.style.display="none"},250)}}}}}},n=e(20),a=Object(n.a)(o,(function(){var t=this._self._c;return t("div",{directives:[{name:"viewImg",rawName:"v-viewImg"}],staticClass:"ViewImg"},[t("img",{attrs:{src:"/lib-components/lyb.png",alt:""}}),this._v(" "),t("img",{attrs:{src:"/lib-components/cat.png",alt:""}})])}),[],!1,null,null,null);i.default=a.exports}}]);