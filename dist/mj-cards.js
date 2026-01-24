var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __glob = (map) => (path) => {
  var fn = map[path];
  if (fn) return fn();
  throw new Error("Module not found in bundle: " + path);
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/animations/blink.js
var blink_exports = {};
__export(blink_exports, {
  css: () => css
});
var css;
var init_blink = __esm({
  "src/animations/blink.js"() {
    css = `
.animated-blink {
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  0%   { opacity: 1; }
  50%  { opacity: 0.3; }
  100% { opacity: 1; }
}
`;
  }
});

// src/animations/bounce.js
var bounce_exports = {};
__export(bounce_exports, {
  css: () => css2
});
var css2;
var init_bounce = __esm({
  "src/animations/bounce.js"() {
    css2 = `
.animated-bounce {
  animation: bounce 1.4s ease-out infinite;
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  40%     { transform: translateY(-6px); }
}
`;
  }
});

// src/animations/breathGlow.js
var breathGlow_exports = {};
__export(breathGlow_exports, {
  css: () => css3
});
var css3;
var init_breathGlow = __esm({
  "src/animations/breathGlow.js"() {
    css3 = `
@keyframes digc-breath {
  0% { transform: scale(0.96); filter: brightness(1); }
  50% { transform: scale(1.04); filter: brightness(1.08); }
  100% { transform: scale(0.96); filter: brightness(1); }
}

.chip.animated-breathGlow {
  animation: digc-breath 2.6s ease-in-out infinite;
}

.chip.animated-breathGlow::after {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.55;
  filter: blur(8px);
  background: radial-gradient(circle, var(--chip-anim-color) 0%, transparent 70%);
  animation: digc-breath 2.6s ease-in-out infinite;
}
`;
  }
});

// src/animations/breathe.js
var breathe_exports = {};
__export(breathe_exports, {
  css: () => css4
});
var css4;
var init_breathe = __esm({
  "src/animations/breathe.js"() {
    css4 = `
.animated-breathe {
  animation: breathe 2.2s ease-in-out infinite;
}

@keyframes breathe {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}
`;
  }
});

// src/animations/distort.js
var distort_exports = {};
__export(distort_exports, {
  css: () => css5
});
var css5;
var init_distort = __esm({
  "src/animations/distort.js"() {
    css5 = `
.animated-distort {
  animation: distort-heat 2.8s ease-in-out infinite;
}
@keyframes distort-heat {
  0%,100% { filter: blur(0px) brightness(1); }
  50% { filter: blur(1px) brightness(1.1); }
}
`;
  }
});

// src/animations/flicker.js
var flicker_exports = {};
__export(flicker_exports, {
  css: () => css6
});
var css6;
var init_flicker = __esm({
  "src/animations/flicker.js"() {
    css6 = `
@keyframes digc-flicker {
  0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
  8% { transform: translateY(-1px) scale(1.01); opacity: .92; }
  15% { opacity: 1; }
  22% { opacity: .85; }
  30% { opacity: 1; }
  55% { transform: translateY(0) scale(1.02); opacity: .9; }
  70% { opacity: 1; }
}

.chip.animated-flicker {
  animation: digc-flicker 1.2s linear infinite;
}
`;
  }
});

// src/animations/flip.js
var flip_exports = {};
__export(flip_exports, {
  css: () => css7
});
var css7;
var init_flip = __esm({
  "src/animations/flip.js"() {
    css7 = `
.animated-flip {
  animation: flip 2s ease-in-out infinite;
  transform-style: preserve-3d;
}

@keyframes flip {
  0%   { transform: rotateX(0deg); }
  50%  { transform: rotateX(180deg); }
  100% { transform: rotateX(360deg); }
}
`;
  }
});

// src/animations/float.js
var float_exports = {};
__export(float_exports, {
  css: () => css8
});
var css8;
var init_float = __esm({
  "src/animations/float.js"() {
    css8 = `
.animated-float {
  animation: float-up 3s ease-in-out infinite;
}
@keyframes float-up {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`;
  }
});

// src/animations/glow.js
var glow_exports = {};
__export(glow_exports, {
  css: () => css9
});
var css9;
var init_glow = __esm({
  "src/animations/glow.js"() {
    css9 = `
.animated-glow {
  animation: glow-breath 2.4s ease-in-out infinite;
}

@keyframes glow-breath {
  0%   { filter: brightness(1); }
  50%  { filter: brightness(1.35); }
  100% { filter: brightness(1); }
}
`;
  }
});

// src/animations/halo.js
var halo_exports = {};
__export(halo_exports, {
  css: () => css10
});
var css10;
var init_halo = __esm({
  "src/animations/halo.js"() {
    css10 = `
.animated-halo {
  animation: halo-pulse 1.6s ease-out infinite;
}

@keyframes halo-pulse {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color, rgba(0,150,255,0.7)); }
  60%  { box-shadow: 0 0 0 14px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}
`;
  }
});

// src/animations/heartbeat.js
var heartbeat_exports = {};
__export(heartbeat_exports, {
  css: () => css11
});
var css11;
var init_heartbeat = __esm({
  "src/animations/heartbeat.js"() {
    css11 = `
.animated-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}
@keyframes heartbeat {
  0% { transform: scale(1); }
  20% { transform: scale(1.18); }
  35% { transform: scale(1); }
  45% { transform: scale(1.18); }
  60% { transform: scale(1); }
}
`;
  }
});

// src/animations/hover.js
var hover_exports = {};
__export(hover_exports, {
  css: () => css12
});
var css12;
var init_hover = __esm({
  "src/animations/hover.js"() {
    css12 = `
.animated-hover {
  animation: hover-lift 1.8s ease-in-out infinite;
}
@keyframes hover-lift {
  0%,100% { transform: translateY(0); box-shadow:0 1px 3px rgba(0,0,0,0.15); }
  50% { transform: translateY(-3px); box-shadow:0 4px 8px rgba(0,0,0,0.25); }
}
`;
  }
});

// src/animations/jelly.js
var jelly_exports = {};
__export(jelly_exports, {
  css: () => css13
});
var css13;
var init_jelly = __esm({
  "src/animations/jelly.js"() {
    css13 = `
.animated-jelly {
  animation: jelly-wobble 1.6s ease-in-out infinite;
}
@keyframes jelly-wobble {
  0%,100% { transform: scale(1,1); }
  30% { transform: scale(1.12,0.88); }
  60% { transform: scale(0.88,1.12); }
}
`;
  }
});

// src/animations/jiggleX.js
var jiggleX_exports = {};
__export(jiggleX_exports, {
  css: () => css14
});
var css14;
var init_jiggleX = __esm({
  "src/animations/jiggleX.js"() {
    css14 = `
@keyframes digc-jiggleX {
  0% { transform: translateX(0); }
  15% { transform: translateX(-1px); }
  30% { transform: translateX(1px); }
  45% { transform: translateX(-1px); }
  60% { transform: translateX(1px); }
  100% { transform: translateX(0); }
}

.chip.animated-jiggleX {
  animation: digc-jiggleX 0.9s ease-in-out infinite;
}
`;
  }
});

// src/animations/neonPulse.js
var neonPulse_exports = {};
__export(neonPulse_exports, {
  css: () => css15
});
var css15;
var init_neonPulse = __esm({
  "src/animations/neonPulse.js"() {
    css15 = `
@keyframes digc-neon {
  0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--chip-anim-color) 45%, transparent); }
  50%  { box-shadow: 0 0 18px 6px color-mix(in srgb, var(--chip-anim-color) 70%, transparent); }
  100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--chip-anim-color) 45%, transparent); }
}

.chip.animated-neonPulse {
  animation: digc-neon 1.8s ease-in-out infinite;
}
`;
  }
});

// src/animations/orbit2.js
var orbit2_exports = {};
__export(orbit2_exports, {
  css: () => css16
});
var css16;
var init_orbit2 = __esm({
  "src/animations/orbit2.js"() {
    css16 = `
.animated-orbit2 {
  animation: orbit2-move 2.8s ease-in-out infinite;
}
@keyframes orbit2-move {
  0% { transform: translate(0,0) rotate(0deg); }
  25% { transform: translate(3px,-3px) rotate(5deg); }
  50% { transform: translate(0,-4px) rotate(0deg); }
  75% { transform: translate(-3px,-3px) rotate(-5deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
`;
  }
});

// src/animations/pop.js
var pop_exports = {};
__export(pop_exports, {
  css: () => css17
});
var css17;
var init_pop = __esm({
  "src/animations/pop.js"() {
    css17 = `
.animated-pop {
  animation: pop 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}

@keyframes pop {
  0%   { transform: scale(1); }
  8%   { transform: scale(1.15); }
  16%  { transform: scale(1); }
  100% { transform: scale(1); }
}
`;
  }
});

// src/animations/pulse.js
var pulse_exports = {};
__export(pulse_exports, {
  css: () => css18
});
var css18;
var init_pulse = __esm({
  "src/animations/pulse.js"() {
    css18 = `
.animated-pulse {
  animation: pulse-scale 1.2s ease-in-out infinite;
}

@keyframes pulse-scale {
  0%   { transform: scale(1);   }
  50%  { transform: scale(1.12); }
  100% { transform: scale(1);   }
}
`;
  }
});

// src/animations/radar.js
var radar_exports = {};
__export(radar_exports, {
  css: () => css19
});
var css19;
var init_radar = __esm({
  "src/animations/radar.js"() {
    css19 = `
@keyframes digc-radar {
  0% { transform: scale(0.6); opacity: 0; }
  15% { opacity: 0.55; }
  100% { transform: scale(1.9); opacity: 0; }
}

.chip.animated-radar::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  pointer-events: none;
  border: 2px solid color-mix(in srgb, var(--chip-anim-color) 70%, transparent);
  opacity: 0;
  animation: digc-radar 1.6s ease-out infinite;
}
`;
  }
});

// src/animations/ring.js
var ring_exports = {};
__export(ring_exports, {
  css: () => css20
});
var css20;
var init_ring = __esm({
  "src/animations/ring.js"() {
    css20 = `
.animated-ring {
  animation: ring-wave 1.1s ease-out infinite;
}

@keyframes ring-wave {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color, rgba(0,150,255,0.8)); }
  80%  { box-shadow: 0 0 0 18px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}
`;
  }
});

// src/animations/ripple.js
var ripple_exports = {};
__export(ripple_exports, {
  css: () => css21
});
var css21;
var init_ripple = __esm({
  "src/animations/ripple.js"() {
    css21 = `
.animated-ripple {
  animation: ripple 1.3s ease-out infinite;
}

@keyframes ripple {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color); }
  80%  { box-shadow: 0 0 0 14px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
`;
  }
});

// src/animations/rotate.js
var rotate_exports = {};
__export(rotate_exports, {
  css: () => css22
});
var css22;
var init_rotate = __esm({
  "src/animations/rotate.js"() {
    css22 = `
.animated-rotate {
  animation: rotate-spin 1.8s linear infinite;
}

@keyframes rotate-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
  }
});

// src/animations/scan.js
var scan_exports = {};
__export(scan_exports, {
  css: () => css23
});
var css23;
var init_scan = __esm({
  "src/animations/scan.js"() {
    css23 = `
.animated-scan {
  position: relative;
  overflow: hidden;
}

.animated-scan::after {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255,255,255,0.25) 50%,
    transparent 100%
  );
  animation: scan 2.1s linear infinite;
}

@keyframes scan {
  0%   { top: -120%; }
  100% { top: 120%; }
}
`;
  }
});

// src/animations/shake.js
var shake_exports = {};
__export(shake_exports, {
  css: () => css24
});
var css24;
var init_shake = __esm({
  "src/animations/shake.js"() {
    css24 = `
.animated-shake {
  animation: shake-wiggle 0.4s ease-in-out infinite;
}

@keyframes shake-wiggle {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
`;
  }
});

// src/animations/shimmer.js
var shimmer_exports = {};
__export(shimmer_exports, {
  css: () => css25
});
var css25;
var init_shimmer = __esm({
  "src/animations/shimmer.js"() {
    css25 = `
.animated-shimmer {
  position: relative;
  overflow: hidden;
}

.animated-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%, 
    rgba(255,255,255,0.7) 50%, 
    transparent 100%
  );
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { left: -120%; }
  100% { left: 150%; }
}
`;
  }
});

// src/animations/spark.js
var spark_exports = {};
__export(spark_exports, {
  css: () => css26
});
var css26;
var init_spark = __esm({
  "src/animations/spark.js"() {
    css26 = `
.animated-spark {
  animation: spark 1.6s ease-in-out infinite;
}

@keyframes spark {
  0%,100% { box-shadow: 0 0 4px var(--chip-anim-color); }
  50%     { box-shadow: 0 0 10px var(--chip-anim-color); }
}
`;
  }
});

// src/animations/sparkle.js
var sparkle_exports = {};
__export(sparkle_exports, {
  css: () => css27
});
var css27;
var init_sparkle = __esm({
  "src/animations/sparkle.js"() {
    css27 = `
.animated-sparkle {
  animation: sparkle-glow 2.2s ease-in-out infinite;
}
@keyframes sparkle-glow {
  0%,100% { filter: brightness(1); }
  40% { filter: brightness(1.7); }
}
`;
  }
});

// src/animations/sweep.js
var sweep_exports = {};
__export(sweep_exports, {
  css: () => css28
});
var css28;
var init_sweep = __esm({
  "src/animations/sweep.js"() {
    css28 = `
@keyframes digc-sweep {
  0% { transform: translateX(-140%) rotate(25deg); opacity: 0; }
  15% { opacity: 0.35; }
  50% { opacity: 0.25; }
  100% { transform: translateX(140%) rotate(25deg); opacity: 0; }
}

.chip.animated-sweep::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -60%;
  width: 60%;
  height: 180%;
  border-radius: 999px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    color-mix(in srgb, var(--chip-anim-color) 50%, transparent),
    transparent
  );
  animation: digc-sweep 1.9s ease-in-out infinite;
}
`;
  }
});

// src/animations/swing.js
var swing_exports = {};
__export(swing_exports, {
  css: () => css29
});
var css29;
var init_swing = __esm({
  "src/animations/swing.js"() {
    css29 = `
.animated-swing {
  animation: swing 1.8s ease-in-out infinite;
  transform-origin: top center;
}

@keyframes swing {
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(6deg); }
}
`;
  }
});

// src/animations/throb.js
var throb_exports = {};
__export(throb_exports, {
  css: () => css30
});
var css30;
var init_throb = __esm({
  "src/animations/throb.js"() {
    css30 = `
.animated-throb {
  animation: throb 1.3s ease-in-out infinite;
}

@keyframes throb {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.13); }
}
`;
  }
});

// src/animations/tilt.js
var tilt_exports = {};
__export(tilt_exports, {
  css: () => css31
});
var css31;
var init_tilt = __esm({
  "src/animations/tilt.js"() {
    css31 = `
.animated-tilt {
  animation: tilt 1.6s ease-in-out infinite;
}

@keyframes tilt {
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(-5deg); }
}
`;
  }
});

// src/animations/vibrate.js
var vibrate_exports = {};
__export(vibrate_exports, {
  css: () => css32
});
var css32;
var init_vibrate = __esm({
  "src/animations/vibrate.js"() {
    css32 = `
.animated-vibrate {
  animation: vibrate-fast .25s linear infinite;
}
@keyframes vibrate-fast {
  0% { transform: translate(0); }
  25% { transform: translate(-1px,1px); }
  50% { transform: translate(1px,-1px); }
  75% { transform: translate(-1px,-1px); }
  100% { transform: translate(0); }
}
`;
  }
});

// src/animations/wave.js
var wave_exports = {};
__export(wave_exports, {
  css: () => css33
});
var css33;
var init_wave = __esm({
  "src/animations/wave.js"() {
    css33 = `
.animated-wave {
  animation: wave-motion 1.6s ease-in-out infinite;
}
@keyframes wave-motion {
  0%,100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}
`;
  }
});

// src/animations/wobble.js
var wobble_exports = {};
__export(wobble_exports, {
  css: () => css34
});
var css34;
var init_wobble = __esm({
  "src/animations/wobble.js"() {
    css34 = `
.animated-wobble {
  animation: wobble 1.6s ease-in-out infinite;
}

@keyframes wobble {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(-3px); }
}
`;
  }
});

// src/animations/zoom.js
var zoom_exports = {};
__export(zoom_exports, {
  css: () => css35
});
var css35;
var init_zoom = __esm({
  "src/animations/zoom.js"() {
    css35 = `
.animated-zoom {
  animation: zoom-pulse 1.3s ease-in-out infinite;
}
@keyframes zoom-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
`;
  }
});

// import("./animations/**/*.js") in src/icon-room-card.js
var globImport_animations_js = __glob({
  "./animations/blink.js": () => Promise.resolve().then(() => (init_blink(), blink_exports)),
  "./animations/bounce.js": () => Promise.resolve().then(() => (init_bounce(), bounce_exports)),
  "./animations/breathGlow.js": () => Promise.resolve().then(() => (init_breathGlow(), breathGlow_exports)),
  "./animations/breathe.js": () => Promise.resolve().then(() => (init_breathe(), breathe_exports)),
  "./animations/distort.js": () => Promise.resolve().then(() => (init_distort(), distort_exports)),
  "./animations/flicker.js": () => Promise.resolve().then(() => (init_flicker(), flicker_exports)),
  "./animations/flip.js": () => Promise.resolve().then(() => (init_flip(), flip_exports)),
  "./animations/float.js": () => Promise.resolve().then(() => (init_float(), float_exports)),
  "./animations/glow.js": () => Promise.resolve().then(() => (init_glow(), glow_exports)),
  "./animations/halo.js": () => Promise.resolve().then(() => (init_halo(), halo_exports)),
  "./animations/heartbeat.js": () => Promise.resolve().then(() => (init_heartbeat(), heartbeat_exports)),
  "./animations/hover.js": () => Promise.resolve().then(() => (init_hover(), hover_exports)),
  "./animations/jelly.js": () => Promise.resolve().then(() => (init_jelly(), jelly_exports)),
  "./animations/jiggleX.js": () => Promise.resolve().then(() => (init_jiggleX(), jiggleX_exports)),
  "./animations/neonPulse.js": () => Promise.resolve().then(() => (init_neonPulse(), neonPulse_exports)),
  "./animations/orbit2.js": () => Promise.resolve().then(() => (init_orbit2(), orbit2_exports)),
  "./animations/pop.js": () => Promise.resolve().then(() => (init_pop(), pop_exports)),
  "./animations/pulse.js": () => Promise.resolve().then(() => (init_pulse(), pulse_exports)),
  "./animations/radar.js": () => Promise.resolve().then(() => (init_radar(), radar_exports)),
  "./animations/ring.js": () => Promise.resolve().then(() => (init_ring(), ring_exports)),
  "./animations/ripple.js": () => Promise.resolve().then(() => (init_ripple(), ripple_exports)),
  "./animations/rotate.js": () => Promise.resolve().then(() => (init_rotate(), rotate_exports)),
  "./animations/scan.js": () => Promise.resolve().then(() => (init_scan(), scan_exports)),
  "./animations/shake.js": () => Promise.resolve().then(() => (init_shake(), shake_exports)),
  "./animations/shimmer.js": () => Promise.resolve().then(() => (init_shimmer(), shimmer_exports)),
  "./animations/spark.js": () => Promise.resolve().then(() => (init_spark(), spark_exports)),
  "./animations/sparkle.js": () => Promise.resolve().then(() => (init_sparkle(), sparkle_exports)),
  "./animations/sweep.js": () => Promise.resolve().then(() => (init_sweep(), sweep_exports)),
  "./animations/swing.js": () => Promise.resolve().then(() => (init_swing(), swing_exports)),
  "./animations/throb.js": () => Promise.resolve().then(() => (init_throb(), throb_exports)),
  "./animations/tilt.js": () => Promise.resolve().then(() => (init_tilt(), tilt_exports)),
  "./animations/vibrate.js": () => Promise.resolve().then(() => (init_vibrate(), vibrate_exports)),
  "./animations/wave.js": () => Promise.resolve().then(() => (init_wave(), wave_exports)),
  "./animations/wobble.js": () => Promise.resolve().then(() => (init_wobble(), wobble_exports)),
  "./animations/zoom.js": () => Promise.resolve().then(() => (init_zoom(), zoom_exports))
});

// src/icon-room-card.js
var LitEl = window.LitElement || Object.getPrototypeOf(customElements.get("ha-panel-lovelace"));
var html = LitEl.prototype.html;
var css36 = LitEl.prototype.css;
var IconRoomCard = class extends LitEl {
  static get properties() {
    return {
      hass: {},
      _config: {},
      _loadedAnimations: {}
    };
  }
  /* -------------------------------------------------------------
     SET CONFIG
  ------------------------------------------------------------- */
  setConfig(config) {
    if (!config || !Array.isArray(config.devices)) {
      throw new Error("Config inv\xE1lida. Usa devices: []");
    }
    const defaultEntity = "light.luces_max";
    const defaultIcon = "mdi:lightbulb";
    const titleDefaults = {
      hidden: false,
      size: 18,
      color: "var(--primary-text-color)",
      weight: 700,
      uppercase: false,
      max_width: null,
      nowrap: true,
      icon: null,
      icon_size: 18,
      icon_color: "var(--secondary-text-color)",
      gap: 8,
      offset_x: 0,
      offset_y: 0
    };
    const titleOverrides = config.title_overrides || {};
    const title_style = { ...titleDefaults, ...titleOverrides };
    if (typeof title_style.max_width === "number") {
      title_style.max_width = `${title_style.max_width}px`;
    }
    const headerDefaults = {
      offset_x: 0,
      offset_y: 0,
      temp: {
        icon: "mdi:thermometer",
        icon_size: 15,
        icon_color: "var(--secondary-text-color)",
        value_size: 13,
        value_color: "var(--secondary-text-color)",
        unit_size: 13,
        unit_color: "var(--secondary-text-color)",
        bg: "transparent",
        radius: 0,
        padding: "0",
        gap: 2
      },
      hum: {
        icon: "mdi:water-percent",
        icon_size: 15,
        icon_color: "var(--secondary-text-color)",
        value_size: 13,
        value_color: "var(--secondary-text-color)",
        unit_size: 13,
        unit_color: "var(--secondary-text-color)",
        bg: "transparent",
        radius: 0,
        padding: "0",
        gap: 2
      }
    };
    const headerOverrides = config.header_overrides || {};
    const header = {
      offset_x: headerOverrides.offset_x ?? headerDefaults.offset_x,
      offset_y: headerOverrides.offset_y ?? headerDefaults.offset_y,
      temp: { ...headerDefaults.temp, ...headerOverrides.temp || {} },
      hum: { ...headerDefaults.hum, ...headerOverrides.hum || {} }
    };
    const gridDefaults = {
      columns: config.columns || 4,
      col_gap: 10,
      row_gap: 10,
      justify_content: "start",
      align_items: "center"
    };
    const gridOverrides = config.grid_overrides || {};
    const grid = { ...gridDefaults, ...gridOverrides };
    const bubbleDefaults = {
      enabled: true,
      icon: config.icon || "mdi:bed",
      size: 100,
      offset: -20,
      bg: "#7799b8",
      icon_size: 52,
      icon_color: "#334155",
      icon_opacity: 0.95,
      right_gutter: 14,
      // acción al tocar la burbuja
      action: ["more-info", "navigate", "none"].includes(config.bubble_action) ? config.bubble_action : "more-info",
      more_info_entity: config.bubble_more_info_entity ?? config.temp_entity ?? config.hum_entity ?? null,
      navigate_path: config.bubble_navigate_path ?? null
    };
    const bubbleOverrides = config.bubble_overrides || {};
    const bubble = { ...bubbleDefaults, ...bubbleOverrides };
    const presenceDefaults = {
      enabled: void 0,
      // auto
      entity: null,
      icon: "mdi:account",
      size: 16,
      badge_size: 26,
      bg_off: "transparent",
      bg_on: "transparent",
      icon_off: "#64748b",
      icon_on: "#475569",
      position: "center-left",
      offset_x: 38,
      offset_y: -35,
      show_only_when_on: true
    };
    const presenceOverrides = config.presence || {};
    let presence = { ...presenceDefaults, ...presenceOverrides };
    if (presence.entity && presence.enabled === void 0) {
      presence.enabled = true;
    }
    presence.enabled = Boolean(presence.enabled);
    const deviceDefaults = {
      chip_size: 48,
      chip_padding: 10,
      icon_size: 24
    };
    const deviceOverrides = config.device_overrides || {};
    const device_style = { ...deviceDefaults, ...deviceOverrides };
    const layoutDefaults = {
      right_top_padding: 30,
      chips_gutter: 0
      // 👈 NUEVO (equivale a apollo-chips-gutter)
    };
    const layoutOverrides = config.layout_overrides || {};
    const layout = { ...layoutDefaults, ...layoutOverrides };
    const topRightDefaults = {
      enabled: void 0,
      bg: "rgba(0,0,0,0.05)",
      radius: 12,
      padding: "2px 8px",
      gap: 2,
      icon_size: 14,
      icon_color: "var(--secondary-text-color)",
      value_size: 12,
      value_color: "var(--secondary-text-color)",
      unit_size: 12,
      unit_color: "var(--secondary-text-color)",
      items: null,
      // legacy:
      value: null,
      icon: null
    };
    const topRightOverrides = config.top_right || {};
    const top_right = { ...topRightDefaults, ...topRightOverrides };
    if (config.top_right && top_right.enabled === void 0) {
      top_right.enabled = true;
    }
    top_right.enabled = Boolean(top_right.enabled);
    if (!Array.isArray(top_right.items) || top_right.items.length === 0) {
      if (top_right.value) {
        top_right.items = [
          {
            entity: top_right.value,
            icon: top_right.icon || null,
            bg: top_right.bg,
            radius: top_right.radius,
            padding: top_right.padding,
            icon_size: top_right.icon_size,
            icon_color: top_right.icon_color,
            value_size: top_right.value_size,
            value_color: top_right.value_color,
            unit_size: top_right.unit_size,
            unit_color: top_right.unit_color
          }
        ];
      } else {
        top_right.items = [];
      }
    }
    const cardDefaults = {
      bg: "var(--ha-card-background, var(--card-background-color, white))",
      radius: "var(--ha-card-border-radius, 12px)",
      border: "var(--ha-card-border-width, 0px)",
      border_color: "var(--divider-color)",
      shadow: "var(--ha-card-box-shadow, none)",
      min_height: null,
      // ej "220px"
      height: null
      // ej "220px"
    };
    const cardOverrides = config.card_overrides || {};
    const card = { ...cardDefaults, ...cardOverrides };
    const devices = config.devices.map((d) => ({
      type: d.type || "device",
      // "device" | "spacer"
      transparent: d.transparent ?? false,
      entity: d.entity || defaultEntity,
      icon: d.icon || defaultIcon,
      name: d.name || null,
      action: d.action || "toggle",
      state_entity: d.state_entity || null,
      animated: d.animated || null,
      service: d.service || null,
      service_data: d.service_data || null,
      state_map: d.state_map || null,
      chip_color: d.chip_color ?? null,
      device_color_on: d.device_color_on || null,
      device_color_off: d.device_color_off || null,
      device_icon_color_on: d.device_icon_color_on || null,
      device_icon_color_off: d.device_icon_color_off || null,
      invert_animation: d.invert_animation || false,
      chip_size: d.chip_size ?? null,
      chip_padding: d.chip_padding ?? null,
      icon_size: d.icon_size ?? null,
      show_name: d.show_name ?? null
    }));
    this._config = {
      title: config.title,
      use_fahrenheit: config.use_fahrenheit ?? false,
      full_width: config.full_width ?? false,
      temp_entity: config.temp_entity,
      hum_entity: config.hum_entity,
      chip_color_on: config.chip_color_on || "rgba(138,205,215,1)",
      chip_color_off: config.chip_color_off || "rgba(11,83,148,0.3)",
      icon_color_on: config.icon_color_on || "#000000",
      icon_color_off: config.icon_color_off || "#000000",
      show_names: config.show_names ?? false,
      title_style,
      header,
      grid,
      bubble,
      presence,
      device_style,
      layout,
      top_right,
      // ✅ new
      card,
      devices
    };
  }
  getCardSize() {
    return 3;
  }
  /* -------------------------------------------------------------
     ANIMATIONS
  ------------------------------------------------------------- */
  async _loadAnimation(name) {
    try {
      const module = await globImport_animations_js(`./animations/${name}.js`);
      return module.css || "";
    } catch (e) {
      console.warn(`\u274C Animaci\xF3n '${name}' no encontrada`);
      return "";
    }
  }
  async willUpdate(changedProps) {
    if (!changedProps.has("hass") || !this._config) return;
    const animations = /* @__PURE__ */ new Set();
    for (const d of this._config.devices) {
      if (d.animated) animations.add(d.animated);
      if (Array.isArray(d.state_map)) {
        for (const rule of d.state_map) {
          if (rule.animated) animations.add(rule.animated);
        }
      }
    }
    const result = {};
    for (const anim of animations) {
      result[anim] = await this._loadAnimation(anim);
    }
    this._loadedAnimations = result;
    this.requestUpdate();
  }
  /* -------------------------------------------------------------
     HELPERS
  ------------------------------------------------------------- */
  _state(entityId) {
    return this.hass?.states?.[entityId] || null;
  }
  _num(entityId) {
    const st = this._state(entityId)?.state;
    const v = Number(st);
    return Number.isNaN(v) ? null : v;
  }
  _formatState(entityId, fmt) {
    const st = this._state(entityId);
    if (!st) return "--";
    const raw = st.state;
    if (fmt === "int") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v));
    }
    if (fmt === "float1") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v * 10) / 10);
    }
    if (fmt === "float2") {
      const v = Number(raw);
      return Number.isNaN(v) ? raw : String(Math.round(v * 100) / 100);
    }
    return String(raw);
  }
  _fmtTemp(v) {
    if (v === null || v === void 0) return "--";
    return Math.round(v);
  }
  _fmtHum(v) {
    if (v === null || v === void 0) return "--";
    return Math.round(v);
  }
  _isTruthyState(state) {
    if (state === null || state === void 0) return false;
    const s = String(state).toLowerCase();
    return s === "on" || s === "home" || s === "present" || s === "detected" || s === "true" || s === "occupied";
  }
  _showMoreInfo(entityId) {
    this.dispatchEvent(
      new CustomEvent("hass-more-info", {
        detail: { entityId },
        bubbles: true,
        composed: true
      })
    );
  }
  /* -------------------------------------------------------------
     STATE MAP
  ------------------------------------------------------------- */
  _applyStateMap(device, st, isOn) {
    if (!device.state_map || !Array.isArray(device.state_map)) return null;
    const raw = st?.state ?? null;
    const numVal = Number(raw);
    const isNum = !isNaN(numVal);
    const ctx = { value: isNum ? numVal : null, state: raw, on: isOn };
    for (const rule of device.state_map) {
      const cond = rule.when;
      if (!cond || cond === "else") return rule;
      try {
        const fn = new Function("value", "state", "on", `return (${cond});`);
        if (fn(ctx.value, ctx.state, ctx.on)) return rule;
      } catch (e) {
        console.warn("\u274C Error evaluando condici\xF3n:", cond, e);
      }
    }
    return null;
  }
  /* -------------------------------------------------------------
     ACTIONS
  ------------------------------------------------------------- */
  _performAction(e, device) {
    e.stopPropagation();
    e.preventDefault();
    const action = device.action || "toggle";
    switch (action) {
      case "none":
        return;
      case "toggle":
        return this.hass.callService("homeassistant", "toggle", {
          entity_id: device.entity
        });
      case "more-info":
        return this._showMoreInfo(device.entity);
      case "call-service": {
        const svc = device.service;
        if (!svc || !svc.includes(".")) {
          console.warn("\u274C call-service necesita 'service: domain.service'");
          return;
        }
        const [domain, service] = svc.split(".");
        const data = device.service_data || {};
        return this.hass.callService(domain, service, data);
      }
      default:
        if (action.startsWith("navigate:")) {
          const path = action.replace("navigate:", "");
          history.pushState(null, "", path);
          window.dispatchEvent(
            new CustomEvent("location-changed", { bubbles: true, composed: true })
          );
          return;
        }
    }
  }
  _performBubbleAction(e) {
    e.stopPropagation();
    e.preventDefault();
    const b = this._config?.bubble;
    if (!b) return;
    switch (b.action) {
      case "none":
        return;
      case "navigate": {
        const path = b.navigate_path;
        if (!path) return;
        history.pushState(null, "", path);
        window.dispatchEvent(
          new CustomEvent("location-changed", { bubbles: true, composed: true })
        );
        return;
      }
      case "more-info":
      default: {
        const entityId = b.more_info_entity;
        if (!entityId) return;
        return this._showMoreInfo(entityId);
      }
    }
  }
  _presenceStyle(presence) {
    const st = presence.entity ? this._state(presence.entity) : null;
    const isOn = this._isTruthyState(st?.state);
    if (presence.show_only_when_on && !isOn) return { hidden: true };
    const bg = isOn ? presence.bg_on : presence.bg_off;
    const ic = isOn ? presence.icon_on : presence.icon_off;
    let left = "50%";
    let top = "50%";
    let tx = "-50%";
    let ty = "-50%";
    switch (presence.position) {
      case "top-left":
        left = `${presence.offset_x}px`;
        top = `${presence.offset_y}px`;
        tx = "0";
        ty = "0";
        break;
      case "top-right":
        left = `calc(100% - ${presence.offset_x}px)`;
        top = `${presence.offset_y}px`;
        tx = "-100%";
        ty = "0";
        break;
      case "bottom-left":
        left = `${presence.offset_x}px`;
        top = `calc(100% - ${presence.offset_y}px)`;
        tx = "0";
        ty = "-100%";
        break;
      case "bottom-right":
        left = `calc(100% - ${presence.offset_x}px)`;
        top = `calc(100% - ${presence.offset_y}px)`;
        tx = "-100%";
        ty = "-100%";
        break;
      case "center-left":
      default:
        left = `${presence.offset_x}px`;
        top = `calc(50% + ${presence.offset_y}px)`;
        tx = "0";
        ty = "-50%";
        break;
    }
    return { hidden: false, isOn, bg, ic, left, top, tx, ty };
  }
  /* -------------------------------------------------------------
     RENDER
  ------------------------------------------------------------- */
  render() {
    if (!this.hass || !this._config) return html``;
    const cfg = this._config;
    const devices = cfg.devices || [];
    const titleStyle = cfg.title_style || {};
    const grid = cfg.grid || {};
    const bubble = cfg.bubble || {};
    const presence = cfg.presence || {};
    const deviceStyle = cfg.device_style || {};
    const header = cfg.header || {};
    const layout = cfg.layout || {};
    const topRight = cfg.top_right || {};
    const card = cfg.card || {};
    const animationCss = Object.values(this._loadedAnimations).join("\n");
    const tRaw = cfg.temp_entity ? this._num(cfg.temp_entity) : null;
    const hRaw = cfg.hum_entity ? this._num(cfg.hum_entity) : null;
    const tVal = cfg.temp_entity ? this._fmtTemp(tRaw) : null;
    const hVal = cfg.hum_entity ? this._fmtHum(hRaw) : null;
    const tUnit = cfg.use_fahrenheit ? "\xB0F" : "\xB0C";
    const titleText = cfg.title || "";
    const titleInline = `
      font-size:${titleStyle.size}px;
      color:${titleStyle.color};
      font-weight:${titleStyle.weight};
      text-transform:${titleStyle.uppercase ? "uppercase" : "none"};
      ${titleStyle.max_width ? `max-width:${titleStyle.max_width};` : ""}
      margin-left:${titleStyle.offset_x || 0}px;
      margin-top:${titleStyle.offset_y || 0}px;
    `;
    const titleTextInline = `
      ${titleStyle.nowrap ? "white-space:nowrap;" : ""}
      overflow:hidden;
      text-overflow:ellipsis;
    `;
    const rightStart = bubble.enabled ? `calc(max(0px, (${bubble.size}px + ${bubble.offset}px)) + ${bubble.right_gutter}px)` : "0px";
    const showTopRight = topRight.enabled && Array.isArray(topRight.items) && topRight.items.length > 0;
    const pres = presence?.enabled && presence.entity ? this._presenceStyle(presence) : { hidden: true };
    return html`
      <style>${animationCss}</style>

      <ha-card
        class="wrap"
        style="
          background:${card.bg};
          border-radius:${card.radius};
          border-style: solid;
          border-width:${card.border};
          border-color:${card.border_color};
          box-shadow:${card.shadow};
          ${card.min_height ? `min-height:${card.min_height};` : ""}
          ${card.height ? `height:${card.height};` : ""}
        "
      >

        ${bubble.enabled ? html`
              <div
                class="img_cell"
                style="
                  width:${bubble.size}px;
                  height:${bubble.size}px;
                  margin: 0 0 ${bubble.offset}px ${bubble.offset}px;
                  background:${bubble.bg};
                "
                @click=${(e) => this._performBubbleAction(e)}
                title="${bubble.action === "navigate" ? bubble.navigate_path || "" : bubble.more_info_entity || ""}"
              >
                <ha-icon
                  icon="${bubble.icon}"
                  style="
                    --mdc-icon-size:${bubble.icon_size}px;
                    color:${bubble.icon_color};
                    opacity:${bubble.icon_opacity};
                  "
                  class="main_icon"
                ></ha-icon>

                ${pres.hidden ? "" : html`
                      <div
                        class="presence-badge"
                        style="
                          width:${presence.badge_size}px;
                          height:${presence.badge_size}px;
                          left:${pres.left};
                          top:${pres.top};
                          transform: translate(${pres.tx}, ${pres.ty});
                          background:${pres.bg};
                        "
                        @click=${(e) => {
      e.stopPropagation();
      e.preventDefault();
      this._showMoreInfo(presence.entity);
    }}
                        title="${presence.entity}"
                      >
                        <ha-icon
                          icon="${presence.icon}"
                          style="
                            --mdc-icon-size:${presence.size}px;
                            color:${pres.ic};
                          "
                        ></ha-icon>
                      </div>
                    `}
              </div>
            ` : ""}

        ${showTopRight ? html`
              <div class="top-right">
                ${topRight.items.map((it) => {
      const item = {
        bg: topRight.bg,
        radius: topRight.radius,
        padding: topRight.padding,
        icon_size: topRight.icon_size,
        icon_color: topRight.icon_color,
        value_size: topRight.value_size,
        value_color: topRight.value_color,
        unit_size: topRight.unit_size,
        unit_color: topRight.unit_color,
        ...it
      };
      const entityId = item.entity || null;
      const moreInfoEntity = item.more_info_entity || entityId;
      let text;
      if (item.state_map && entityId) {
        const st = this._state(entityId);
        const rule = this._applyStateMap(item, st, this._isTruthyState(st?.state));
        text = rule?.text ?? this._formatState(entityId, item.format);
      } else {
        text = entityId ? this._formatState(entityId, item.format) : item.text ?? "--";
      }
      const unit = item.unit ?? "";
      return html`
                    <div
                      class="tr-pill"
                      style="
                        background:${item.bg};
                        border-radius:${item.radius}px;
                        padding:${item.padding};
                        gap:${topRight.gap}px;
                      "
                      @click=${moreInfoEntity ? () => this._showMoreInfo(moreInfoEntity) : null}
                      title="${moreInfoEntity || entityId || ""}"
                    >
                      ${item.icon ? html`
                            <ha-icon
                              icon="${item.icon}"
                              style="
                                --mdc-icon-size:${item.icon_size}px;
                                color:${item.icon_color};
                              "
                            ></ha-icon>
                          ` : ""}

                      <span
                        class="tr-value"
                        style="font-size:${item.value_size}px; color:${item.value_color};"
                        >${text}</span
                      >
                      ${unit ? html`
                            <span
                              class="tr-unit"
                              style="font-size:${item.unit_size}px; color:${item.unit_color};"
                              >${unit}</span
                            >
                          ` : ""}
                    </div>
                  `;
    })}
              </div>
            ` : ""}

        <div class="layout">
          <div class="left">
            ${titleStyle.hidden ? "" : html`
                  <div class="name" style="${titleInline}">
                    ${titleStyle.icon ? html`
                          <ha-icon
                            icon="${titleStyle.icon}"
                            style="
                              --mdc-icon-size:${titleStyle.icon_size}px;
                              color:${titleStyle.icon_color};
                              margin-right:${titleStyle.gap}px;
                              flex-shrink:0;
                            "
                            class="title-icon"
                          ></ha-icon>
                        ` : ""}

                    <span class="title-text" style="${titleTextInline}">${titleText}</span>
                  </div>
                `}

            <div
              class="mini"
              style="
                transform: translate(${header.offset_x || 0}px, ${header.offset_y || 0}px);
              "
            >

              ${cfg.temp_entity ? html`
                    <div
                      class="mini-row"
                      style="
                        background:${header.temp.bg};
                        border-radius:${header.temp.radius}px;
                        padding:${header.temp.padding};
                        gap:${header.temp.gap}px;
                      "
                      @click=${() => this._showMoreInfo(cfg.temp_entity)}
                    >
                      <ha-icon
                        icon="${header.temp.icon}"
                        style="
                          --mdc-icon-size:${header.temp.icon_size}px;
                          color:${header.temp.icon_color};
                        "
                      ></ha-icon>
                      <span
                        class="mini-value"
                        style="font-size:${header.temp.value_size}px; color:${header.temp.value_color};"
                        >${tVal}</span
                      >
                      <span
                        class="mini-unit"
                        style="font-size:${header.temp.unit_size}px; color:${header.temp.unit_color};"
                        >${tUnit}</span
                      >
                    </div>
                  ` : ""}

              ${cfg.hum_entity ? html`
                    <div
                      class="mini-row"
                      style="
                        background:${header.hum.bg};
                        border-radius:${header.hum.radius}px;
                        padding:${header.hum.padding};
                        gap:${header.hum.gap}px;
                      "
                      @click=${() => this._showMoreInfo(cfg.hum_entity)}
                    >
                      <ha-icon
                        icon="${header.hum.icon}"
                        style="
                          --mdc-icon-size:${header.hum.icon_size}px;
                          color:${header.hum.icon_color};
                        "
                      ></ha-icon>
                      <span
                        class="mini-value"
                        style="font-size:${header.hum.value_size}px; color:${header.hum.value_color};"
                        >${hVal}</span
                      >
                      <span
                        class="mini-unit"
                        style="font-size:${header.hum.unit_size}px; color:${header.hum.unit_color};"
                        >%</span
                      >
                    </div>
                  ` : ""}
            </div>
          </div>

          <div
            class="grid"
            style="
              margin-left: calc(${rightStart} + ${layout.chips_gutter}px);
              padding-top:${layout.right_top_padding}px;
              grid-template-columns: repeat(${grid.columns}, max-content);
              column-gap:${grid.col_gap}px;
              row-gap:${grid.row_gap}px;
              justify-content:${grid.justify_content};
              align-items:${grid.align_items};
            "
          >
            ${devices.map((device) => {
      const isSpacer = device.type === "spacer";
      const st = this.hass.states[device.state_entity || device.entity];
      const isOn = st && !["off", "unavailable", "unknown", "idle"].includes(st.state);
      const rule = this._applyStateMap(device, st, isOn);
      const shouldAnimate = device.invert_animation ? !isOn : isOn;
      let animClass = "";
      let chipBgColor;
      let chipAnimColor;
      let iconColor;
      let actionOverride = null;
      if (device.chip_color) chipBgColor = device.chip_color;
      if (rule) {
        if (rule.animated) animClass = `animated-${rule.animated}`;
        if (rule.chip_color) chipBgColor = rule.chip_color;
        if (rule.icon_color) iconColor = rule.icon_color;
        if (rule.action) actionOverride = rule.action;
      } else {
        animClass = device.animated && shouldAnimate ? `animated-${device.animated}` : "";
      }
      if (!chipBgColor) chipBgColor = isOn ? cfg.chip_color_on : cfg.chip_color_off;
      chipAnimColor = isOn ? device.device_color_on || cfg.icon_color_on || chipBgColor : device.device_color_off || cfg.icon_color_off || chipBgColor;
      if (!iconColor) {
        iconColor = isOn ? device.device_icon_color_on || chipAnimColor : device.device_icon_color_off || chipAnimColor;
      }
      const finalDevice = actionOverride ? { ...device, action: actionOverride } : device;
      const chipSize = device.chip_size ?? deviceStyle.chip_size;
      const chipPad = device.chip_padding ?? deviceStyle.chip_padding;
      const iconSz = device.icon_size ?? deviceStyle.icon_size;
      if (isSpacer) {
        return html`
                  <div class="grid-item">
                    <div
                      class="chip spacer"
                      style="
                        width:${chipSize}px;
                        height:${chipSize}px;
                        padding:${chipPad}px;
                        --room-icon-size:${iconSz}px;
                      "
                    ></div>
                    ${""}
                  </div>
                `;
      }
      const showName = device.show_name ?? cfg.show_names;
      return html`
                <div class="grid-item">
                  <div
                    class="chip ${animClass}"
                    style="
                      background:${chipBgColor};
                      --chip-anim-color:${chipAnimColor};
                      width:${chipSize}px;
                      height:${chipSize}px;
                      padding:${chipPad}px;
                      --room-icon-size:${iconSz}px;
                    "
                    @click=${(e) => this._performAction(e, finalDevice)}
                    title="${device.name ?? ""}"
                  >
                    <ha-icon
                      icon="${device.icon}"
                      style="
                        --mdc-icon-size:${iconSz}px;
                        color:${iconColor};
                      "
                      class="chip-svg"
                    ></ha-icon>
                  </div>

                  ${showName ? html`<div class="chip-name">${device.name ?? ""}</div>` : ""}
                </div>
              `;
    })}
          </div>
        </div>
      </ha-card>
    `;
  }
  /* -------------------------------------------------------------
     STYLES
  ------------------------------------------------------------- */
  static get styles() {
    return css36`
      :host {
        display: block;
      }

      .wrap {
        position: relative;
        padding: 18px 16px 8px 18px;
        overflow: hidden;
      }

      .img_cell {
        position: absolute;
        left: 0;
        bottom: 0;
        border-radius: 50% !important; /* Aseguramos círculo perfecto */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1; /* Un poco más arriba para que nada lo tape */
        cursor: pointer;
        transition: transform 0.1s ease-in-out, background-color 0.2s;
        pointer-events: auto; /* Forzamos que capture el click */
      }

      /* Efecto visual de feedback al hacer click */
      .img_cell:active {
        transform: scale(0.95);
        filter: brightness(0.9);
      }

      .main_icon {
        pointer-events: none; /* El icono no captura el click, lo hace el contenedor grande */
      }

      .presence-badge {
        position: absolute;
        border-radius: 9999px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .top-right {
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 1px;
        justify-content: flex-end;
        align-items: center;
        max-width: 60%;
      }

      .tr-pill {
        display: inline-flex;
        align-items: center;
        line-height: 1;
        cursor: pointer;
        white-space: nowrap;
      }

      .tr-unit {
        opacity: 0.85;
        margin-left: 2px;
      }

      .layout {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 18px;
      }

      .left {
        min-width: 92px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }

      .grid {
        display: grid;
        grid-auto-rows: min-content;
        align-self: flex-start;
        max-width: calc(100% - 8px);
      }

      .name {
        display: flex;
        align-items: center;
        min-width: 0;
      }

      .title-text {
        min-width: 0;
      }

      .mini {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .mini-row {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        line-height: 1;
        cursor: pointer;
      }

      .mini-row ha-icon {
        opacity: 0.95;
        position: relative;
        top: -1px;
      }

      .mini-unit {
        opacity: 0.85;
      }

      .grid-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
      }

      .chip.spacer {
        background: transparent !important;
        border: 0 !important;
        box-shadow: none !important;
        cursor: default !important;
        pointer-events: none !important;
      }

      .chip {
        border-radius: 9999px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: 0.2s;
        overflow: visible;
        box-sizing: border-box;
      }

      .chip-name {
        font-size: 11px;
        opacity: 0.7;
        max-width: 80px;
        text-align: center;
        line-height: 1.1;
        min-height: 14px;
      }
    `;
  }
};
customElements.define("icon-room-card", IconRoomCard);

// src/index.js
init_blink();
init_bounce();
init_breathe();
init_breathGlow();
init_distort();
init_flicker();
init_flip();
init_float();
init_glow();
init_halo();
init_heartbeat();
init_hover();
init_jelly();
init_jiggleX();
init_neonPulse();
init_orbit2();
init_pop();
init_pulse();
init_radar();
init_ring();
init_ripple();
init_rotate();
init_scan();
init_shake();
init_shimmer();
init_spark();
init_sparkle();
init_sweep();
init_swing();
init_throb();
init_tilt();
init_vibrate();
init_wave();
init_wobble();
init_zoom();
