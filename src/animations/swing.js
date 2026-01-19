export const css = `
.animated-swing {
  animation: swing 1.8s ease-in-out infinite;
  transform-origin: top center;
}

@keyframes swing {
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(6deg); }
}
`;
