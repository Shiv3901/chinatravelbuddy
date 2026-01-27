"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🇨🇳</span>
            <span className="font-bold text-lg text-primary-900">
              China Travel Assistant
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/plan"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Plan Trip
            </Link>
            <Link
              href="/guides"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary-600 transition-colors"
            >
              About
            </Link>
            <Link href="/plan" className="btn-primary text-sm !py-2 !px-4">
              Start Planning
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <Link
              href="/plan"
              className="text-gray-600 hover:text-primary-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Plan Trip
            </Link>
            <Link
              href="/guides"
              className="text-gray-600 hover:text-primary-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-primary-600 py-2"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
            <Link
              href="/plan"
              className="btn-primary text-sm text-center"
              onClick={() => setMobileOpen(false)}
            >
              Start Planning
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
