'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function TopNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-md font-extrabold text-gray-950">
            <Image src="/dispatchOS-logo.svg" alt="DispatchOS Logo" width={132} height={32} className="mr-2 inline-block" />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href="https://app.dispatchos.dev/login" className="inline-flex items-center justify-center rounded-full border border-[#00b377] bg-[#e6fff5] px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-[#d6fbea]">Sign in</a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 md:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`my-1 block h-0.5 w-5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <nav id="mobile-menu" className="mt-4 flex flex-col gap-3 border-t border-gray-200 pb-2 pt-4 md:hidden">
            <Link href="/#features" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <a href="https://app.dispatchos.dev/login" className="inline-flex items-center justify-center rounded-full border border-[#00b377] bg-[#e6fff5] px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-[#d6fbea]" onClick={() => setMenuOpen(false)}>Sign in</a>
          </nav>
        )}
      </div>
    </header>
  );
}