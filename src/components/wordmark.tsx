export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ""}`}>
      <svg
        aria-hidden="true"
        className="wordmark-mark"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      >
        <circle cx="12" cy="12" r="8.6" />
        <path d="M3.4 13.4h17.2" />
        <path d="M12 3.4v6.2" />
        <circle cx="12" cy="13.4" r="2.1" fill="currentColor" stroke="none" />
      </svg>
      <span>Atelier Aveline</span>
    </span>
  );
}
