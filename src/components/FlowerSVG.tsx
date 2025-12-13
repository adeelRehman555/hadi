import React from 'react'

export default function FlowerSVG({ className = 'h-12 w-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffd6e0" />
          <stop offset="100%" stopColor="#ff8fb3" />
        </linearGradient>
      </defs>
      <g fill="url(#g1)" stroke="#ff6f91" strokeWidth="0.5">
        <circle cx="32" cy="24" r="7" />
        <path d="M32 8c3.5 3.5 10.5 1.6 12 6.4 1.5 4.8-5.2 9.2-5.2 9.2s-5-5-6.7-5c-1.7 0-6.6 5-6.6 5s-6.9-4.3-5.3-9.1C21.5 9.6 28.5 4.5 32 8z" />
      </g>
      <path d="M32 34v22" stroke="#6b8e23" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
