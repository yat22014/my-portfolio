"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7259],{7259:function(e,o,i){i.r(o),i.d(o,{absorb:function(){return u}});var s=i(7363);function t(e,o,i,t,u,d){let n=(0,s.uZ)(e.options.collisions.absorb.speed*u.factor/10,0,t);e.size.value+=.5*n,i.size.value-=n,t<=d&&(i.size.value=0,i.destroy())}function u(e,o,i,s){let u=e.getRadius(),d=o.getRadius();void 0===u&&void 0!==d?e.destroy():void 0!==u&&void 0===d?o.destroy():void 0!==u&&void 0!==d&&(u>=d?t(e,u,o,d,i,s):t(o,d,e,u,i,s))}}}]);