export const css = `
.animated-ring {
  animation: ring-wave 1.1s ease-out infinite;
}

@keyframes ring-wave {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color, rgba(0,150,255,0.8)); }
  80%  { box-shadow: 0 0 0 18px rgba(0,0,0,0); }
  100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
}
`;
