
export const css = `
.animated-wave {
  animation: wave-motion 1.6s ease-in-out infinite;
}
@keyframes wave-motion {
  0%,100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}
`;
