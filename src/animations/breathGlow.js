export const css = `
@keyframes digc-breath {
  0% { transform: scale(0.96); filter: brightness(1); }
  50% { transform: scale(1.04); filter: brightness(1.08); }
  100% { transform: scale(0.96); filter: brightness(1); }
}

.chip.animated-breathGlow {
  animation: digc-breath 2.6s ease-in-out infinite;
}

.chip.animated-breathGlow::after {
  content: "";
  position: absolute;
  inset: -10px;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.55;
  filter: blur(8px);
  background: radial-gradient(circle, var(--chip-anim-color) 0%, transparent 70%);
  animation: digc-breath 2.6s ease-in-out infinite;
}
`;