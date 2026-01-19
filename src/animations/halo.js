export const css = `
.animated-halo {
  animation: halo-pulse 1.6s ease-out infinite;
}

@keyframes halo-pulse {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color, rgba(0,150,255,0.7)); }
  60%  { box-shadow: 0 0 0 14px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}
`;
