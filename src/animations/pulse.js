export const css = `
.animated-pulse {
  animation: pulse-scale 1.2s ease-in-out infinite;
}

@keyframes pulse-scale {
  0%   { transform: scale(1);   }
  50%  { transform: scale(1.12); }
  100% { transform: scale(1);   }
}
`;
