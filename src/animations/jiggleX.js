export const css = `
@keyframes digc-jiggleX {
  0% { transform: translateX(0); }
  15% { transform: translateX(-1px); }
  30% { transform: translateX(1px); }
  45% { transform: translateX(-1px); }
  60% { transform: translateX(1px); }
  100% { transform: translateX(0); }
}

.chip.animated-jiggleX {
  animation: digc-jiggleX 0.9s ease-in-out infinite;
}
`;