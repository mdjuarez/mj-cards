export const css = `
.animated-glow {
  animation: glow-breath 2.4s ease-in-out infinite;
}

@keyframes glow-breath {
  0%   { filter: brightness(1); }
  50%  { filter: brightness(1.35); }
  100% { filter: brightness(1); }
}
`;
