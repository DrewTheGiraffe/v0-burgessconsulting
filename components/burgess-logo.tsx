export default function BurgessLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer geometric frame - angular chevron design */}
      <path
        d="M8 12 L20 24 L32 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner accent line - quantum/tech theme */}
      <path
        d="M14 16 L20 22 L26 16"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Top accent dot - representing security/precision */}
      <circle cx="20" cy="8" r="1.5" fill="currentColor" opacity="0.8" />
    </svg>
  )
}
