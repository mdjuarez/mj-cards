export const css = `
.animated-rotate {
  animation: rotate-spin 1.8s linear infinite;
}

@keyframes rotate-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
