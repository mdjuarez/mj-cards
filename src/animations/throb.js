export const css = `
.animated-throb {
  animation: throb 1.3s ease-in-out infinite;
}

@keyframes throb {
  0%,100% { transform: scale(1); }
  50%     { transform: scale(1.13); }
}
`;
