export const css = `
.animated-shimmer {
  position: relative;
  overflow: hidden;
}

.animated-shimmer::after {
  content: "";
  position: absolute;
  top: 0;
  left: -120%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent 0%, 
    rgba(255,255,255,0.7) 50%, 
    transparent 100%
  );
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0%   { left: -120%; }
  100% { left: 150%; }
}
`;
