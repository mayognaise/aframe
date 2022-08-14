exports.canvas = {
  schema: {
    width: { type: "number", default: 256 },
    height: { type: "number", default: 256 },
  },

  _canvas: null,
  _ctx: null,
  _texture: null,

  /**
   * Seet canvas
   * @protected
   * @returns THREE.MeshBasicMaterial
   */
  _setCanvas(schema) {
    this._canvas = document.createElement("canvas");
    this._updateTexture(schema);

    this._ctx = this._canvas.getContext("2d");
    this._texture = new THREE.Texture(this._canvas);

    this._clearCanvas();

    this.material = new THREE.MeshBasicMaterial({ map: this._texture });
    this.el.sceneEl.addBehavior(this);
  },

  _clearCanvas() {
    if (!this._canvas || !this._ctx || !this.__texture) {
      return;
    }
    this._ctx.clearRect(0, 0, this._canvas.width, this._canvas.height);
    this._texture.needsUpdate = true;
  },

  /**
   * Update or create texure.
   * @param {Object} schema - Material component schema.
   */
  _updateTexture(schema) {
    this._canvas.width = schema.width;
    this._canvas.height = schema.height;
  },
};
