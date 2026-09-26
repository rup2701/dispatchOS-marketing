// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import SplitSections from '@/components/Sections';
import TopNav from '@/components/TopNav';

// ─── Calendar Animation ──────────────────────────────────────────

function CalendarAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
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
          <h3 className="font-semibold text-gray-900" style={{ fontFamily: 'var(--font-plus-jakarta)' }}>
            Content Calendar
          </h3>
          <span className="text-sm text-gray-500">September 7-11, 2026</span>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-5 gap-2 mb-4">
          {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, i) => (
            <div key={day} className={`text-center text-xs font-medium py-1.5 rounded ${i === 0 ? 'bg-[#e6fff5] text-[#00b377]' : 'text-gray-500'}`}>
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
  const [isVisible] = useState(true);

  const handleAnimationComplete = () => {
    setTimeout(() => setShowAnimation(false), 500);
  };

  const contentChannels = [
    'LinkedIn', 'X', 'Bluesky', 'Reddit',
  ];
  const contentTypes = ["Threads", "Posts", "Case Studies", "Replies"];

  function Tag({ children, dim = false }: { children: React.ReactNode; dim?: boolean }) {
    return (
      <span
        className={`inline-block text-[12px] font-medium rounded-full px-2.5 py-0.5 border ${
          dim
            ? "text-[#6B6B80] bg-white border-[#999]"
            : "text-[#00b377] bg-[#00b37710] border-[#ddd]"
        }`}
        style={{ fontFamily: 'var(--font-geist-mono)' }}
      >
        {children}
      </span>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="max-8-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">

            {/* Headline */}
            <h1 className="homepage-hero-heading text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 spacing-[-1em]">
              Never wonder what to post again.
            </h1>

            {/* Sub-headline */}
            <p className="max-w-2xl text-lg md:text-xl font-medium text-gray-700 mt-6 mb-6 mx-auto text-center">
              Dispatch turns your work into <em><b>stories</b></em> your market needs to hear.
            </p>
          
            {/* Platform Pills */}
            <div className="flex flex-wrap items-center justify-center max-w-[420px] gap-2 mb-8 mx-auto" >
               <div className="flex flex-wrap justify-center gap-2  mb-2" style={{ fontFamily: 'var(--font-geist-mono)' }}>
                {contentTypes.map(c => <Tag key={c}>{c}</Tag>)}
              </div>
              {contentChannels.map((platform) => (
                <span
                  key={platform}
                  className="px-3 font-mono py-1 bg-white border border-gray-500 rounded-full text-xs font-medium text-gray-600 shadow-sm"
                  style={{ fontFamily: 'var(--font-geist-mono)' }}
                >
                  {platform}
                </span>
              ))}
             
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://app.dispatchos.com"
                className="px-8 py-3 bg-[#171717] text-gray-50 font-medium rounded-full hover:bg-[#008d61] transition shadow-lg shadow-[#00b377]/25"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Start for free
              </a>
              <a
                href="#demo"
                className="px-8 py-3 bg-[#f8f8f8] border text-gray-700 font-medium rounded-full hover:bg-gray-100/50 transition flex items-center gap-2"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
              >
                Watch demo
              </a>
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

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            WHERE THE POSTS COME FROM
          </span>

          <h2 className="mt-8 text-4xl font-black tracking-[-0.04em] text-gray-950 sm:text-3xl lg:text-[2.8rem] lg:leading-[1.02]">
            Not generic AI. Your product,<br className="hidden sm:block" />
            your voice, your context.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Every post is generated from sources you control. No hallucinations from the open web — just your knowledge, systematised.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: 'YOUR SOURCES',
              items: [
                { icon: '🌐', label: 'Website scrape', detail: 'Landing pages, docs, changelog' },
                { icon: '💬', label: 'Onboarding answers', detail: 'ICP, tone, benefits, proof' },
                { icon: '📄', label: 'Uploaded docs', detail: 'PDF, DOCX, Notion exports' },
              ],
            },
            {
              title: 'YOUR KNOBS',
              items: [
                { icon: '🎯', label: 'Topical modifiers', detail: 'Weekly themes, launches, features' },
                { icon: '📝', label: 'Tone & voice preset', detail: 'Casual, technical, founder-led' },
                { icon: '📡', label: 'Channel selection', detail: 'X, LinkedIn, Reddit, Bluesky, IH' },
              ],
            },
            {
              title: 'YOUR OUTPUTS',
              items: [
                { icon: '📅', label: 'Weekly calendar', detail: 'Full week drafted & ready to review' },
                { icon: '✍️', label: 'Daily posts & threads', detail: 'Channel-native format per platform' },
                { icon: '🔄', label: 'Repurposed variants', detail: 'One idea → 5 platform-specific posts' },
              ],
            },
          ].map((column) => (
            <div key={column.title} className="rounded-[28px] border border-[#dfeae3] bg-[#f7f9f7] p-6 sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
                {column.title}
              </p>

              <div className="mt-6 space-y-6">
                {column.items.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edfdf5] text-lg">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">{item.label}</p>
                      <p className="mt-1 text-sm leading-6 text-gray-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <SplitSections />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}