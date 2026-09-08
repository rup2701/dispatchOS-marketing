// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── Animation Component ──────────────────────────────────────────

function CalendarAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const posts = [
    { time: '09:00', platform: 'LinkedIn', status: 'Published' },
    { time: '12:00', platform: 'X', status: 'Queued' },
    { time: '15:00', platform: 'LinkedIn', status: 'Queued' },
    { time: '17:00', platform: 'Bluesky', status: 'Queued' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          onComplete(); // Tell parent to switch to static image
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  const visiblePosts = Math.floor((progress / 100) * posts.length);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-700">
      {/* Calendar Header */}
      <div className="border-b border-gray-100 px-6 py-4 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Content Calendar</h3>
          <span className="text-sm text-gray-500">September 7-11, 2026</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Days of Week */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {days.map((day, i) => (
            <div
              key={day}
              className={`text-center text-xs font-medium py-1.5 rounded ${
                i === 0
                  ? 'bg-[#e6fff5] text-[#00f0a1]'
                  : 'text-gray-500'
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Posts Container - FIXED HEIGHT */}
        <div className="space-y-2 min-h-[160px]">
          {visiblePosts === 0 ? (
            <div className="flex items-center justify-center h-[160px] text-gray-400">
              <div className="text-center">
                <div className="animate-pulse text-3xl mb-2">⏳</div>
                <span className="text-sm">Generating your posts...</span>
              </div>
            </div>
          ) : (
            posts.slice(0, visiblePosts).map((post, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 animate-slideIn"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-500 w-14">{post.time}</span>
                  <span className="text-sm font-medium text-gray-700">{post.platform}</span>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded ${
                    post.status === 'Published'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}
                >
                  {post.status}
                </span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Hero ──────────────────────────────────────────────────

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    // Wait 500ms for the animation to finish, then switch to static image
    setTimeout(() => {
      setShowAnimation(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#f0fffa]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            <Image
              src="/dispatchOS-logo.png"
              alt="DispatchOS Logo"
              width={32}
              height={32}
              className="inline-block mr-2"
            />
            DispatchOS
          </span>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a
              href="https://app.dispatchos.com"
              className="px-4 py-2 bg-[#00f0a1] text-gray-900 text-sm font-medium rounded-lg hover:bg-[#00d48a] transition"
            >
              Go to App
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Headline */}

          <div className="text-center max-w-3xl mx-auto mb-12">
            {/* Headline */}
            <span className="text-2xl md:text-4xl  text-gray-900 mb-2">
              No More Content <span className="text-[#00f0a]">Brainstorming</span>
            </span>
            
            {/* Sub-headline */}
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Your AI marketing <span className="text-[#00f0a]">cofounder</span>
            </h1>
            
            {/* Benefit line */}
            <p className="text-md text-gray-900 mt-6 mb-6">
              ⚡ Put your content generation and publishing on auto-pilot — <br className="hidden sm:block" />
              in less than <span className="font-semibold txt-[#00f0a1]">5 minutes</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="https://app.dispatchos.com"
                className="px-8 py-3 bg-[#00f0a1] text-gray-900 font-medium rounded-lg hover:bg-[#00d48a] transition shadow-lg shadow-[#00f0a1]/25"
              >
                Start Posting
              </a>
              <a
                href="#pricing"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition"
              >
                See Pricing
              </a>
            </div>

          </div>

          {/* ─── Visual Container (Fixed Dimensions) ────────────── */}
          <div className="max-w-5xl mx-auto">
            {showAnimation ? (
              <CalendarAnimation onComplete={handleAnimationComplete} />
            ) : (
              <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                <Image
                  src="/screenshots/calendar-full.webp"
                  alt="DispatchOS content calendar with scheduled posts"
                  width={800}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0a1] animate-pulse" />
              Posts publishing right now for Appnomics
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}