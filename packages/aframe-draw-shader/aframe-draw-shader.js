(()=>{var t={224:(t,s)=>{s.canvas={schema:{width:{type:"number",default:256},height:{type:"number",default:256}},_canvas:null,_ctx:null,_texture:null,_setCanvas(t){this._canvas=document.createElement("canvas"),this._updateTexture(t),this._ctx=this._canvas.getContext("2d"),this._texture=new THREE.Texture(this._canvas),this._clearCanvas(),this.material=new THREE.MeshBasicMaterial({map:this._texture}),this.el.sceneEl.addBehavior(this)},_clearCanvas(){this._canvas&&this._ctx&&this.__texture&&(this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._texture.needsUpdate=!0)},_updateTexture(t){this._canvas.width=t.width,this._canvas.height=t.height}}},404:(t,s)=>{s.fps={schema:{fps:{type:"number",default:0}},_fps:null,_nextTick:null,_setFps(t){this._fps=t.fps,this._nextTick=0},_setNextTick(){this._fps>0&&(this._nextTick=Date.now()+1e3/this._fps)},_fpsTick(t){t&&!this._isFpsPaused()&&(this._fps<=0?t():Date.now()>this._nextTick&&(this._setNextTick(),t()))},_pauseFpsTick(){this._nextTick=null},_resumeFpsTick(){this._nextTick=0},_isFpsPaused(){return"number"!=typeof this._nextTick}}}},s={};function e(a){var i=s[a];if(void 0!==i)return i.exports;var h=s[a]={exports:{}};return t[a](h,h.exports,e),h.exports}(()=>{const{canvas:t}=e(224),{fps:s}=e(404);AFRAME.registerShader("draw",{...t,...s,schema:{...t.schema,...s.schema},pause(){this._pauseFpsTick()},play(){this.paused()&&this._resumeFpsTick()},togglePlayback(){this.paused()?this.play():this.pause()},paused(){return this._isFpsPaused()},clear(){this._clearCanvas()},init(t){return this._setFps(t),this._setCanvas(t),this.material},update(t){return this._updateTexture(t),this._setFps(t),this.material},tick(){const t=this._canvas,s=this._ctx,e=this._texture;t&&s&&e&&this._fpsTick((()=>{this.el.emit("draw-render",{canvas:t,ctx:s,texture:e}),e.needsUpdate=!0}))}})})()})();