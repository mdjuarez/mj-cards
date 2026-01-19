export const css = `
.animated-shake {
  animation: shake-wiggle 0.4s ease-in-out infinite;
}

@keyframes shake-wiggle {
  0% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  75% { transform: translateX(-2px); }
  100% { transform: translateX(0); }
}
`;
