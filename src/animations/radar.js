export const css = `
@keyframes digc-radar {
  0% { transform: scale(0.6); opacity: 0; }
  15% { opacity: 0.55; }
  100% { transform: scale(1.9); opacity: 0; }
}

.chip.animated-radar::after {
  content: "";
  position: absolute;
  inset: -6px;
  border-radius: inherit;
  pointer-events: none;
  border: 2px solid color-mix(in srgb, var(--chip-anim-color) 70%, transparent);
  opacity: 0;
  animation: digc-radar 1.6s ease-out infinite;
}
`;