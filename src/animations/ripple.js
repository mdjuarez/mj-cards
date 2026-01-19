export const css = `
.animated-ripple {
  animation: ripple 1.3s ease-out infinite;
}

@keyframes ripple {
  0%   { box-shadow: 0 0 0 0 var(--chip-anim-color); }
  80%  { box-shadow: 0 0 0 14px transparent; }
  100% { box-shadow: 0 0 0 0 transparent; }
}
`;
