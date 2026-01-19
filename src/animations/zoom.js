
export const css = `
.animated-zoom {
  animation: zoom-pulse 1.3s ease-in-out infinite;
}
@keyframes zoom-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
`;
