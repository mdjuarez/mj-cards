export const css = `
.animated-spark {
  animation: spark 1.6s ease-in-out infinite;
}

@keyframes spark {
  0%,100% { box-shadow: 0 0 4px var(--chip-anim-color); }
  50%     { box-shadow: 0 0 10px var(--chip-anim-color); }
}
`;
