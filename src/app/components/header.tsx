// components/Header.tsx
'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-4 bg-frozen-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      {/* Left - Logo + Name */}
      <div className="flex items-center gap-3 text-frozen-dark-blue">
        <div className="size-6 text-frozen-dark-blue">
          <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              fill="currentColor"
              fillRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
            />
          </svg>
        </div>
        <h2 className="text-frozen-dark-blue text-xl font-bold tracking-[-0.015em]">
          Fareena Iqbal Shah
        </h2>
      </div>

      {/* Center - Nav links */}
      <nav className="hidden md:flex items-center gap-8">
        <Link
          className="text-frozen-dark-text hover:text-frozen-dark-blue font-medium transition-colors"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-frozen-dark-text hover:text-frozen-dark-blue font-medium transition-colors"
          href="#"
        >
          Projects
        </Link>
        <Link
          className="text-frozen-dark-text hover:text-frozen-dark-blue font-medium transition-colors"
          href="#"
        >
          Contact
        </Link>
        {/* Resume download */}
        <a
          href="/fs/assets/FareenaShah_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-full bg-frozen-dark-blue text-white font-medium hover:bg-frozen-light-blue transition-colors"
        >
          Resume
        </a>
      </nav>

      {/* Right - Socials + Mobile menu */}
      <div className="flex items-center gap-2">
        <a
          aria-label="GitHub Profile"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-frozen-silver hover:bg-frozen-light-blue text-frozen-dark-text hover:text-white transition-colors"
          href="#"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28...Z"></path>
          </svg>
        </a>
        <a
          aria-label="LinkedIn Profile"
          className="flex items-center justify-center rounded-full h-10 w-10 bg-frozen-silver hover:bg-frozen-light-blue text-frozen-dark-text hover:text-white transition-colors"
          href="#"
        >
          <svg
            fill="currentColor"
            height="24"
            viewBox="0 0 256 256"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0...Z"></path>
          </svg>
        </a>
        <button className="md:hidden flex items-center justify-center rounded-full h-10 w-10 bg-frozen-silver hover:bg-frozen-light-blue text-frozen-dark-text hover:text-white transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}
