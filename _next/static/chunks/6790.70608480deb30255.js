"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6790],{6790:function(e,t,i){i.r(t),i.d(t,{Collider:function(){return s}});var n=i(7363);async function o(e,t,n,o){switch(e.options.collisions.mode){case"absorb":{let{absorb:s}=await i.e(7259).then(i.bind(i,7259));s(e,t,n,o);break}case"bounce":{let{bounce:n}=await i.e(3567).then(i.bind(i,3567));n(e,t);break}case"destroy":{let{destroy:n}=await i.e(8562).then(i.bind(i,8562));n(e,t)}}}class s extends n.$S{constructor(e){super(e)}clear(){}init(){}async interact(e,t){if(e.destroyed||e.spawning)return;let i=this.container,s=e.getPosition(),a=e.getRadius(),r=i.particles.quadTree.queryCircle(s,2*a);for(let l of r){if(e===l||!l.options.collisions.enable||e.options.collisions.mode!==l.options.collisions.mode||l.destroyed||l.spawning)continue;let r=l.getPosition(),c=l.getRadius();if(Math.abs(Math.round(s.z)-Math.round(r.z))>a+c)continue;let u=(0,n.Sp)(s,r),d=a+c;u>d||await o(e,l,t,i.retina.pixelRatio)}}isEnabled(e){return e.options.collisions.enable}reset(){}}}}]);