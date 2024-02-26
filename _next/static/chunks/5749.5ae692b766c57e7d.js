"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5749],{5749:function(t,i,e){e.r(i),e.d(i,{Particle:function(){return f}});var s=e(8832),o=e(9651),a=e(3472),h=e(9666),r=e(3772),l=e(2707),n=e(8031),c=e(6998);let p=0;function d(t){if(!(0,a.dB)(t.outMode,t.checkModes))return;let i=2*t.radius;t.coord>t.maxCoord-i?t.setCb(-t.radius):t.coord<i&&t.setCb(t.radius)}class f{constructor(t,i){this.container=i,this._calcPosition=(t,i,e,a=p)=>{for(let[,o]of t.plugins){let t=void 0!==o.particlePosition?o.particlePosition(i,this):void 0;if(t)return s.U.create(t.x,t.y,e)}let h=t.canvas.size,r=(0,o.mC)({size:h,position:i}),l=s.U.create(r.x,r.y,e),n=this.getRadius(),c=this.options.move.outModes,f=i=>{d({outMode:i,checkModes:["bounce"],coord:l.x,maxCoord:t.canvas.size.width,setCb:t=>l.x+=t,radius:n})},u=i=>{d({outMode:i,checkModes:["bounce"],coord:l.y,maxCoord:t.canvas.size.height,setCb:t=>l.y+=t,radius:n})};return(f(c.left??c.default),f(c.right??c.default),u(c.top??c.default),u(c.bottom??c.default),this._checkOverlap(l,a))?this._calcPosition(t,void 0,e,a+1):l},this._calculateVelocity=()=>{let t=(0,o.lQ)(this.direction),i=t.copy(),e=this.options.move;if("inside"===e.direction||"outside"===e.direction)return i;let s=(0,o.Id)((0,o.Gu)(e.angle.value)),a=(0,o.Id)((0,o.Gu)(e.angle.offset)),h={left:a-.5*s,right:a+.5*s};return e.straight||(i.angle+=(0,o.vd)((0,o.Cs)(h.left,h.right))),e.random&&"number"==typeof e.speed&&(i.length*=(0,o.sZ)()),i},this._checkOverlap=(t,i=p)=>{let e=this.options.collisions,s=this.getRadius();if(!e.enable)return!1;let a=e.overlap;if(a.enable)return!1;let r=a.retries;if(r>=0&&i>r)throw Error(`${h.gK} particle is overlapping and can't be placed`);return!!this.container.particles.find(i=>(0,o.Sp)(t,i.position)<s+i.getRadius())},this._getRollColor=t=>{if(!t||!this.roll||!this.backColor&&!this.roll.alter)return t;let i=this.roll.horizontal&&this.roll.vertical?2:1,e=this.roll.horizontal?.5*Math.PI:0,s=Math.floor(((this.roll.angle??0)+e)/(Math.PI/i))%2;return s?this.backColor?this.backColor:this.roll.alter?(0,n.PL)(t,this.roll.alter.type,this.roll.alter.value):t:t},this._initPosition=t=>{let i=this.container,e=(0,o.Gu)(this.options.zIndex.value);this.position=this._calcPosition(i,t,(0,o.uZ)(e,0,i.zLayers)),this.initialPosition=this.position.copy();let h=i.canvas.size;switch(this.moveCenter={...(0,a.bt)(this.options.move.center,h),radius:this.options.move.center.radius??0,mode:this.options.move.center.mode??"percent"},this.direction=(0,o.Gk)(this.options.move.direction,this.position,this.moveCenter),this.options.move.direction){case"inside":this.outType="inside";break;case"outside":this.outType="outside"}this.offset=s.O.origin},this._engine=t}destroy(t){if(this.unbreakable||this.destroyed)return;this.destroyed=!0,this.bubble.inRange=!1,this.slow.inRange=!1;let i=this.container,e=this.pathGenerator,s=i.shapeDrawers.get(this.shape);for(let[,e]of(s?.particleDestroy?.(this),i.plugins))e.particleDestroyed?.(this,t);for(let e of i.particles.updaters)e.particleDestroyed?.(this,t);e?.reset(this),this._engine.dispatchEvent("particleDestroyed",{container:this.container,data:{particle:this}})}async draw(t){let i=this.container,e=i.canvas;for(let[,s]of i.plugins)await e.drawParticlePlugin(s,this,t);await e.drawParticle(this,t)}getFillColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.color))}getMass(){return this.getRadius()**2*Math.PI*.5}getPosition(){return{x:this.position.x+this.offset.x,y:this.position.y+this.offset.y,z:this.position.z}}getRadius(){return this.bubble.radius??this.size.value}getStrokeColor(){return this._getRollColor(this.bubble.color??(0,r.gW)(this.strokeColor))}async init(t,i,e,s){let n=this.container,p=this._engine;this.id=t,this.group=s,this.effectClose=!0,this.effectFill=!0,this.shapeClose=!0,this.shapeFill=!0,this.pathRotation=!1,this.lastPathTime=0,this.destroyed=!1,this.unbreakable=!1,this.rotation=0,this.misplaced=!1,this.retina={maxDistance:{}},this.outType="normal",this.ignoresResizeRatio=!0;let d=n.retina.pixelRatio,f=n.actualOptions,u=(0,c.x)(this._engine,n,f.particles),g=u.effect.type,y=u.shape.type,{reduceDuplicates:v}=u;this.effect=(0,a.wA)(g,this.id,v),this.shape=(0,a.wA)(y,this.id,v);let b=u.effect,w=u.shape;if(e){if(e.effect?.type){let t=e.effect.type,i=(0,a.wA)(t,this.id,v);i&&(this.effect=i,b.load(e.effect))}if(e.shape?.type){let t=e.shape.type,i=(0,a.wA)(t,this.id,v);i&&(this.shape=i,w.load(e.shape))}}this.effectData=function(t,i,e,s){let o=i.options[t];if(o)return(0,a.ZB)({close:i.close,fill:i.fill},(0,a.wA)(o,e,s))}(this.effect,b,this.id,v),this.shapeData=function(t,i,e,s){let o=i.options[t];if(o)return(0,a.ZB)({close:i.close,fill:i.fill},(0,a.wA)(o,e,s))}(this.shape,w,this.id,v),u.load(e);let C=this.effectData;C&&u.load(C.particles);let m=this.shapeData;m&&u.load(m.particles);let _=new l.o(p,n);_.load(n.actualOptions.interactivity),_.load(u.interactivity),this.interactivity=_,this.effectFill=C?.fill??u.effect.fill,this.effectClose=C?.close??u.effect.close,this.shapeFill=m?.fill??u.shape.fill,this.shapeClose=m?.close??u.shape.close,this.options=u;let P=this.options.move.path;this.pathDelay=(0,o.Gu)(P.delay.value)*h.X5,P.generator&&(this.pathGenerator=this._engine.getPathGenerator(P.generator),this.pathGenerator&&n.addPath(P.generator,this.pathGenerator)&&await this.pathGenerator.init(n)),n.retina.initParticle(this),this.size=(0,a.V0)(this.options.size,d),this.bubble={inRange:!1},this.slow={inRange:!1,factor:1},this._initPosition(i),this.initialVelocity=this._calculateVelocity(),this.velocity=this.initialVelocity.copy(),this.moveDecay=1-(0,o.Gu)(this.options.move.decay);let z=n.particles;z.setLastZIndex(this.position.z),this.zIndexFactor=this.position.z/n.zLayers,this.sides=24;let k=n.effectDrawers.get(this.effect);!k&&(k=this._engine.getEffectDrawer(this.effect))&&n.effectDrawers.set(this.effect,k),k?.loadEffect&&await k.loadEffect(this);let x=n.shapeDrawers.get(this.shape);!x&&(x=this._engine.getShapeDrawer(this.shape))&&n.shapeDrawers.set(this.shape,x),x?.loadShape&&await x.loadShape(this);let D=x?.getSidesCount;for(let t of(D&&(this.sides=D(this)),this.spawning=!1,this.shadowColor=(0,r.tX)(this.options.shadow.color),z.updaters))await t.init(this);for(let t of z.movers)await t.init?.(this);for(let[,t]of(await k?.particleInit?.(n,this),await x?.particleInit?.(n,this),n.plugins))t.particleCreated?.(this)}isInsideCanvas(){let t=this.getRadius(),i=this.container.canvas.size,e=this.position;return e.x>=-t&&e.y>=-t&&e.y<=i.height+t&&e.x<=i.width+t}isVisible(){return!this.destroyed&&!this.spawning&&this.isInsideCanvas()}reset(){for(let t of this.container.particles.updaters)t.reset?.(this)}}}}]);