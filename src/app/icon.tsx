export default function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="14" fill="#0f172a" />
      <path fill="url(#gradient)" d="M18 20h10l4 8 4-8h10l-14 24z" />
    </svg>
  );
}
