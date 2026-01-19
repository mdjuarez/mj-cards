export const css = `
@keyframes digc-neon {
  0%   { box-shadow: 0 0 0 0 color-mix(in srgb, var(--chip-anim-color) 45%, transparent); }
  50%  { box-shadow: 0 0 18px 6px color-mix(in srgb, var(--chip-anim-color) 70%, transparent); }
  100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--chip-anim-color) 45%, transparent); }
}

.chip.animated-neonPulse {
  animation: digc-neon 1.8s ease-in-out infinite;
}
`;