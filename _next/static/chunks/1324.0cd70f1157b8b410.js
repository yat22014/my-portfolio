"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1324],{1324:function(e,t,n){n.r(t),n.d(t,{LifeUpdater:function(){return c}});var i=n(7363);class s extends i.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class a extends i.SW{constructor(){super(),this.sync=!1}load(e){e&&(super.load(e),void 0!==e.sync&&(this.sync=e.sync))}}class o{constructor(){this.count=0,this.delay=new s,this.duration=new a}load(e){e&&(void 0!==e.count&&(this.count=e.count),this.delay.load(e.delay),this.duration.load(e.duration))}}class c{constructor(e){this.container=e}async init(e){let t=this.container,n=e.options,s=n.life;s&&(e.life={delay:t.retina.reduceFactor?(0,i.Gu)(s.delay.value)*(s.delay.sync?1:(0,i.sZ)())/t.retina.reduceFactor*i.X5:0,delayTime:0,duration:t.retina.reduceFactor?(0,i.Gu)(s.duration.value)*(s.duration.sync?1:(0,i.sZ)())/t.retina.reduceFactor*i.X5:0,time:0,count:s.count},e.life.duration<=0&&(e.life.duration=-1),e.life.count<=0&&(e.life.count=-1),e.life&&(e.spawning=e.life.delay>0),await Promise.resolve())}isEnabled(e){return!e.destroyed}loadOptions(e,...t){for(let n of(e.life||(e.life=new o),t))e.life.load(n?.life)}async update(e,t){if(!this.isEnabled(e)||!e.life)return;let{updateLife:i}=await n.e(8272).then(n.bind(n,8272));i(e,t,this.container.canvas.size)}}}}]);