
export const css = `
.animated-float {
  animation: float-up 3s ease-in-out infinite;
}
@keyframes float-up {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
`;
