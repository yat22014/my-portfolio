"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[972],{972:function(e,i,t){t.r(i),t.d(i,{NoneOutMode:function(){return s}});var o=t(7363);class s{constructor(e){this.container=e,this.modes=["none"]}async update(e,i,t,s){if(!this.modes.includes(s)||((e.options.move.distance.horizontal&&("left"===i||"right"===i))??(e.options.move.distance.vertical&&("top"===i||"bottom"===i))))return;let n=e.options.move.gravity,r=this.container,c=r.canvas.size,a=e.getRadius();if(n.enable){let t=e.position;(!n.inverse&&t.y>c.height+a&&"bottom"===i||n.inverse&&t.y<-a&&"top"===i)&&r.particles.remove(e)}else{if(e.velocity.y>0&&e.position.y<=c.height+a||e.velocity.y<0&&e.position.y>=-a||e.velocity.x>0&&e.position.x<=c.width+a||e.velocity.x<0&&e.position.x>=-a)return;(0,o.Ac)(e.position,r.canvas.size,o.OW.origin,a,i)||r.particles.remove(e)}await Promise.resolve()}}}}]);