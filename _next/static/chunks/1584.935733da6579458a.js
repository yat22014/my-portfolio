"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1584],{1584:function(e,t,i){i.r(t),i.d(t,{BounceOutMode:function(){return s}});var n=i(7363);class s{constructor(e){this.container=e,this.modes=["bounce","split"]}async update(e,t,s,c){if(!this.modes.includes(c))return;let o=this.container,u=!1;for(let[,i]of o.plugins)if(void 0!==i.particleBounce&&(u=await i.particleBounce(e,s,t)),u)break;if(u)return;let a=e.getPosition(),r=e.offset,f=e.getRadius(),l=(0,n.M_)(a,f),d=o.canvas.size,{bounceHorizontal:h,bounceVertical:p}=await i.e(9451).then(i.bind(i,9451));h({particle:e,outMode:c,direction:t,bounds:l,canvasSize:d,offset:r,size:f}),p({particle:e,outMode:c,direction:t,bounds:l,canvasSize:d,offset:r,size:f})}}}}]);