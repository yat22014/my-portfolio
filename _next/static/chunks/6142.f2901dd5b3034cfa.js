"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6142],{6142:function(t,e,i){i.r(e),i.d(e,{Connector:function(){return a}});var n=i(7363),o=i(2487);class a extends n.L8{constructor(t){super(t)}clear(){}init(){let t=this.container,e=t.actualOptions.interactivity.modes.connect;e&&(t.retina.connectModeDistance=e.distance*t.retina.pixelRatio,t.retina.connectModeRadius=e.radius*t.retina.pixelRatio)}async interact(){let t=this.container,e=t.actualOptions;if(e.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){let e=t.interactivity.mouse.position,{connectModeDistance:i,connectModeRadius:o}=t.retina;if(!i||i<0||!o||o<0||!e)return;let a=t.particles.quadTree.queryCircle(e,Math.abs(o),t=>this.isEnabled(t));a.forEach((e,o)=>{let r=e.getPosition();for(let s of a.slice(o+1)){let o=s.getPosition(),a=Math.abs(i),c=Math.abs(r.x-o.x),l=Math.abs(r.y-o.y);c<a&&l<a&&function(t,e,i){t.canvas.draw(o=>{var a,r;let s=function(t,e,i,o){let a=t.actualOptions,r=a.interactivity.modes.connect;if(r)return function(t,e,i,o){let a=Math.floor(i.getRadius()/e.getRadius()),r=e.getFillColor(),s=i.getFillColor();if(!r||!s)return;let c=e.getPosition(),l=i.getPosition(),u=(0,n.oc)(r,s,e.getRadius(),i.getRadius()),d=t.createLinearGradient(c.x,c.y,l.x,l.y);return d.addColorStop(0,(0,n.vz)(r,o)),d.addColorStop((0,n.uZ)(a,0,1),(0,n.iz)(u,o)),d.addColorStop(1,(0,n.vz)(s,o)),d}(e,i,o,r.links.opacity)}(t,o,e,i);if(!s)return;let c=e.getPosition(),l=i.getPosition();a=o,r=e.retina.linksWidth??0,(0,n.pS)(a,c,l),a.lineWidth=r,a.strokeStyle=s,a.stroke()})}(t,e,s)}})}await Promise.resolve()}isEnabled(t){let e=this.container,i=e.interactivity.mouse,o=(t?.interactivity??e.actualOptions.interactivity).events;return!!o.onHover.enable&&!!i.position&&(0,n.dB)("connect",o.onHover.mode)}loadModeOptions(t,...e){for(let i of(t.connect||(t.connect=new o.l),e))t.connect.load(i?.connect)}reset(){}}}}]);