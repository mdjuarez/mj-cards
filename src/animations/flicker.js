export const css = `
@keyframes digc-flicker {
  0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
  8% { transform: translateY(-1px) scale(1.01); opacity: .92; }
  15% { opacity: 1; }
  22% { opacity: .85; }
  30% { opacity: 1; }
  55% { transform: translateY(0) scale(1.02); opacity: .9; }
  70% { opacity: 1; }
}

.chip.animated-flicker {
  animation: digc-flicker 1.2s linear infinite;
}
`;