
export const css = `
.animated-distort {
  animation: distort-heat 2.8s ease-in-out infinite;
}
@keyframes distort-heat {
  0%,100% { filter: blur(0px) brightness(1); }
  50% { filter: blur(1px) brightness(1.1); }
}
`;
