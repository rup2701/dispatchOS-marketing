// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── Calendar Animation ──────────────────────────────────────────

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
          onComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  const visiblePosts = Math.floor((progress / 100) * posts.length);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="border-b border-gray-100 px-6 py-4 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-geist-sans)' }}>
            Content Calendar
          </h3>
          <span className="text-sm text-gray-500">September 7-11, 2026</span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-5 gap-2 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
            <div key={day} className={`text-center text-xs font-medium py-1.5 rounded ${i === 0 ? 'bg-[#e6fff5] text-[#00f0a1]' : 'text-gray-500'}`}>
              {day}
            </div>
          ))}
        </div>
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
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 animate-slideIn" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-gray-500 w-14">{post.time}</span>
                  <span className="text-sm font-medium text-gray-700">{post.platform}</span>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded ${post.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
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

// ─── Hero ─────────────────────────────────────────────────────────

export default function Hero() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleAnimationComplete = () => {
    setTimeout(() => setShowAnimation(false), 500);
  };

  const platforms = [
    'LinkedIn', 'X', 'Bluesky', 'Reddit',
    'Indie Hackers', 'Threads', 'Posts', 'Case Studies', 'Replies'
  ];

  return (
    <div className="min-h-screen bg-[#f0fffa]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-md font-extrabold text-gray-950" style={{ fontFamily: 'var("Plus Jakarta Sans")' }}>
            <Image src="/dispatchOS-logo.svg" alt="DispatchOS Logo" width={132} height={32} className="inline-block mr-2" />
          </span>
          <nav className="flex items-center gap-6">
            <a href="#features" className="text-sm text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="https://app.dispatchos.com" className="px-4 py-2 bg-[#00f0a1] text-gray-900 text-sm font-medium rounded-lg hover:bg-[#00d48a] transition">
              Go to App
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 spacing-[-1em]">
              Never wonder what to post again.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl text-lg md:text-xl font-semibold text-gray-400 mt-8 mb-8 mx-auto text-center">
              You create, dispatch tells the story. One engine. Every channel. Your content on autopilot.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://app.dispatchos.com"
                className="px-8 py-3 bg-[#171717] text-gray-50 font-medium rounded-lg hover:bg-[#00d48a] transition shadow-lg shadow-[#00f0a1]/25"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Start for free
              </a>
              <a
                href="#demo"
                className="px-8 py-3 bg-[#f8f8f8] border text-gray-700 font-medium rounded-lg hover:bg-gray-100/50 transition flex items-center gap-2"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Watch demo
              </a>
            </div>

            {/* Platform Pills */}
            <div className="flex flex-wrap items-center justify-center max-w-2xl gap-2 " style={{ maxWidth: '420px', margin: '0 auto' }}>
              {platforms.map((platform) => (
                <span
                  key={platform}
                  className="px-3 font-mono py-1 bg-white border border-gray-500 rounded-full text-xs font-medium text-gray-600 shadow-sm"
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Calendar Visual */}
          <div className="max-w-6xl mx-auto">
            <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {showAnimation && <CalendarAnimation onComplete={handleAnimationComplete} />}
              <div className={`transition-opacity duration-700 ${showAnimation ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                <div className="rounded-xl border border-gray-200 shadow-lg overflow-hidden">
                  <Image
                    src="/screenshots/calendar.webp"
                    alt="DispatchOS content calendar"
                    width={800}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}