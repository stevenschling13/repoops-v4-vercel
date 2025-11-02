export default function Icon() {
  return (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect fill="#0f172a" height="64" rx="14" width="64" />
      <path d="M18 20h10l4 8 4-8h10l-14 24z" fill="url(#gradient)" />
    </svg>
  );
}
