export const css = `
@keyframes digc-sweep {
  0% { transform: translateX(-140%) rotate(25deg); opacity: 0; }
  15% { opacity: 0.35; }
  50% { opacity: 0.25; }
  100% { transform: translateX(140%) rotate(25deg); opacity: 0; }
}

.chip.animated-sweep::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -60%;
  width: 60%;
  height: 180%;
  border-radius: 999px;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    transparent,
    color-mix(in srgb, var(--chip-anim-color) 50%, transparent),
    transparent
  );
  animation: digc-sweep 1.9s ease-in-out infinite;
}
`;