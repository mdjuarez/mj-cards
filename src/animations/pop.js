export const css = `
.animated-pop {
  animation: pop 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}

@keyframes pop {
  0%   { transform: scale(1); }
  8%   { transform: scale(1.15); }
  16%  { transform: scale(1); }
  100% { transform: scale(1); }
}
`;
