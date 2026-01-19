export const css = `
.animated-breathe {
  animation: breathe 2.2s ease-in-out infinite;
}

@keyframes breathe {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.08); }
  100% { transform: scale(1); }
}
`;
