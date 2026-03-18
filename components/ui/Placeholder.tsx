interface PlaceholderProps {
  label: string;
  className?: string;
  aspect?: string;
}

export function Placeholder({ label, className = "", aspect }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 ${aspect ?? ""} ${className}`}
    >
      <svg
        className="w-6 h-6 opacity-50"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
        <path d="M21 15l-5-5L5 21" strokeWidth="1.5" />
      </svg>
      <span className="text-xs font-mono text-center px-4">{label}</span>
    </div>
  );
}
