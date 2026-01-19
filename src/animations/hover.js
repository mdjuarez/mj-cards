
export const css = `
.animated-hover {
  animation: hover-lift 1.8s ease-in-out infinite;
}
@keyframes hover-lift {
  0%,100% { transform: translateY(0); box-shadow:0 1px 3px rgba(0,0,0,0.15); }
  50% { transform: translateY(-3px); box-shadow:0 4px 8px rgba(0,0,0,0.25); }
}
`;
