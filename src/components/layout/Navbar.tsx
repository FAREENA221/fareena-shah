"use client";

import logo from "@/assets/fs_logo.png";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[var(--background-color)]/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo + Name */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${logo.src})` }}
            />
            <h1 className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Fareena Iqbal Shah
            </h1>
          </div>
        </Link>

        {/* Center: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <NavLinks onClickLink={() => {}} />
        </nav>

        {/* Right: Resume Button (Desktop) & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Resume Button */}
          <a
            href="/new-resume-fareena-shah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume"
            className="w-full sm:w-auto flex items-center justify-center px-4 py-1 border-2 border-[var(--primary-color)] rounded-full text-white font-semibold bg-transparent"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            className="md:hidden rounded-full p-2 bg-[var(--secondary-color)]"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="text-[var(--text-secondary)]"
              fill="none"
              height="24"
              width="24"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-7 6h7"
                }
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 pb-4">
          <NavLinks onClickLink={() => setMobileMenuOpen(false)} />
          {/* Resume Button (Mobile) */}
          <a
            href="/new-resume-fareena-shah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center text-white font-semibold text-sm h-10 w-10 rounded-full bg-transparent "
            title="Download Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

function NavLinks({ onClickLink }: { onClickLink: () => void }) {
  const links = [
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/education", label: "Education" },
    { href: "/achievements", label: "Achievements" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors"
          onClick={onClickLink}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
