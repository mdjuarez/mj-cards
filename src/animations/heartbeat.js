
export const css = `
.animated-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}
@keyframes heartbeat {
  0% { transform: scale(1); }
  20% { transform: scale(1.18); }
  35% { transform: scale(1); }
  45% { transform: scale(1.18); }
  60% { transform: scale(1); }
}
`;
