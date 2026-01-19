export const css = `
.animated-wobble {
  animation: wobble 1.6s ease-in-out infinite;
}

@keyframes wobble {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(-3px); }
}
`;
