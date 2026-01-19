export const css = `
.animated-scan {
  position: relative;
  overflow: hidden;
}

.animated-scan::after {
  content: "";
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(255,255,255,0.25) 50%,
    transparent 100%
  );
  animation: scan 2.1s linear infinite;
}

@keyframes scan {
  0%   { top: -120%; }
  100% { top: 120%; }
}
`;
