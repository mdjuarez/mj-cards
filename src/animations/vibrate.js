
export const css = `
.animated-vibrate {
  animation: vibrate-fast .25s linear infinite;
}
@keyframes vibrate-fast {
  0% { transform: translate(0); }
  25% { transform: translate(-1px,1px); }
  50% { transform: translate(1px,-1px); }
  75% { transform: translate(-1px,-1px); }
  100% { transform: translate(0); }
}
`;
