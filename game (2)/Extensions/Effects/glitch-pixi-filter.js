var gdjs;(function(t){t.PixiFiltersTools.registerFilterCreator("Glitch",new class extends t.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(n,e){const r=new PIXI.filters.GlitchFilter;return r._animationTimer=0,r}updatePreRender(n,e){const i=n;i.animationFrequency!==0&&(i._animationTimer+=e.getElapsedTime()/1e3,i._animationTimer>=1/i.animationFrequency&&(i.seed=Math.random(),i._animationTimer=0))}updateDoubleParameter(n,e,i){const r=n;e==="slices"?r.slices=i:e==="offset"?r.offset=i:e==="direction"?r.direction=i:e==="fillMode"?r.fillMode=i:e==="minSize"?r.minSize=i:e==="sampleSize"?r.sampleSize=i:e==="redX"?r.red.x=i:e==="redY"?r.red.y=i:e==="greenX"?r.green.x=i:e==="greenY"?r.green.y=i:e==="blueX"?r.blue.x=i:e==="blueY"?r.blue.y=i:e==="animationFrequency"&&(r.animationFrequency=i)}getDoubleParameter(n,e){const i=n;return e==="slices"?i.slices:e==="offset"?i.offset:e==="direction"?i.direction:e==="fillMode"?i.fillMode:e==="minSize"?i.minSize:e==="sampleSize"?i.sampleSize:e==="redX"?i.red.x:e==="redY"?i.red.y:e==="greenX"?i.green.x:e==="greenY"?i.green.y:e==="blueX"?i.blue.x:e==="blueY"?i.blue.y:e==="animationFrequency"?i.animationFrequency:0}updateStringParameter(n,e,i){}updateColorParameter(n,e,i){}getColorParameter(n,e){return 0}updateBooleanParameter(n,e,i){const r=n;e==="average"&&(r.average=i)}getNetworkSyncData(n){const e=n;return{s:e.slices,o:e.offset,d:e.direction,fm:e.fillMode,ms:e.minSize,ss:e.sampleSize,rx:e.red.x,ry:e.red.y,gx:e.green.x,gy:e.green.y,bx:e.blue.x,by:e.blue.y,af:e.animationFrequency,a:e.average}}updateFromNetworkSyncData(n,e){const i=n;i.slices=e.s,i.offset=e.o,i.direction=e.d,i.fillMode=e.fm,i.minSize=e.ms,i.sampleSize=e.ss,i.red.x=e.rx,i.red.y=e.ry,i.green.x=e.gx,i.green.y=e.gy,i.blue.x=e.bx,i.blue.y=e.by,i.animationFrequency=e.af,i.average=e.a}})})(gdjs||(gdjs={}));
//# sourceMappingURL=glitch-pixi-filter.js.map
