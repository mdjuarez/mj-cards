
export const css = `
.animated-jelly {
  animation: jelly-wobble 1.6s ease-in-out infinite;
}
@keyframes jelly-wobble {
  0%,100% { transform: scale(1,1); }
  30% { transform: scale(1.12,0.88); }
  60% { transform: scale(0.88,1.12); }
}
`;
