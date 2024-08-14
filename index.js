class BackgroundPaint {
  static get inputProperties() { return ['--paint-color']; }

  paint(ctx, geom, properties) {
    const color = properties.get('--paint-color').toString();
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, geom.width, geom.height);
  }
}

if (typeof registerPaint !== "undefined") {
  registerPaint('backgroundPaint', BackgroundPaint);
}