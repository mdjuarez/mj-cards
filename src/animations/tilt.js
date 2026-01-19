export const css = `
.animated-tilt {
  animation: tilt 1.6s ease-in-out infinite;
}

@keyframes tilt {
  0%,100% { transform: rotate(0deg); }
  50%     { transform: rotate(-5deg); }
}
`;
