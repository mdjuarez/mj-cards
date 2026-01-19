
export const css = `
.animated-orbit2 {
  animation: orbit2-move 2.8s ease-in-out infinite;
}
@keyframes orbit2-move {
  0% { transform: translate(0,0) rotate(0deg); }
  25% { transform: translate(3px,-3px) rotate(5deg); }
  50% { transform: translate(0,-4px) rotate(0deg); }
  75% { transform: translate(-3px,-3px) rotate(-5deg); }
  100% { transform: translate(0,0) rotate(0deg); }
}
`;
