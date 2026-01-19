
export const css = `
.animated-sparkle {
  animation: sparkle-glow 2.2s ease-in-out infinite;
}
@keyframes sparkle-glow {
  0%,100% { filter: brightness(1); }
  40% { filter: brightness(1.7); }
}
`;
