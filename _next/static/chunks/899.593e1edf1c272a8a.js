"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{899:function(e,t,a){a.r(t),a.d(t,{BaseMover:function(){return n}});var i=a(7363);class n{async init(e){let t=e.options,n=t.move.gravity;e.gravity={enable:n.enable,acceleration:(0,i.Gu)(n.acceleration),inverse:n.inverse};let{initSpin:r}=await a.e(6691).then(a.bind(a,6691));r(e),await Promise.resolve()}isEnabled(e){return!e.destroyed&&e.options.move.enable}async move(e,t){let n=e.options,r=n.move;if(!r.enable)return;let o=e.container,s=o.retina.pixelRatio;e.retina.moveSpeed??=(0,i.Gu)(r.speed)*s,e.retina.moveDrift??=(0,i.Gu)(e.options.move.drift)*s;let{getProximitySpeedFactor:l}=await a.e(6691).then(a.bind(a,6691)),d=l(e),v=e.retina.moveSpeed*o.retina.reduceFactor,c=e.retina.moveDrift,u=(0,i.KI)(n.size.value)*s,p=r.size?e.getRadius()/u:1,b=t.factor||1,m=v*p*d*b/2,f=e.retina.maxSpeed??o.retina.maxSpeed;if(r.spin.enable){let{spin:t}=await a.e(6691).then(a.bind(a,6691));t(e,m)}else{let{move:i}=await a.e(6691).then(a.bind(a,6691));await i(e,r,m,f,c,t)}let{applyDistance:w}=await a.e(6691).then(a.bind(a,6691));w(e)}}}}]);