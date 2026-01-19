export const css = `
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
