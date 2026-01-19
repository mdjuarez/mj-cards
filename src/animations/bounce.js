export const css = `
.animated-bounce {
  animation: bounce 1.4s ease-out infinite;
}

@keyframes bounce {
  0%,100% { transform: translateY(0); }
  40%     { transform: translateY(-6px); }
}
`;
