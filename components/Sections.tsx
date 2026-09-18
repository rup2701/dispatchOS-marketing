import Image from 'next/image';

const sections = [
  { title: "Tell Interesting Stories", description: "Zero blank-page syndrome. Get a full batch of channel-tailored posts built for technical builders and founders.", image: "/screenshots/ai-gen.png" },
  { title: "The Context Engine", description: "Drop in your website link, and our AI instantly maps your product description and ICP.", image: "/screenshots/context.png" },
  {
    title: "AEO Audit",
    description: "See exactly how AI interprets your brand with a live AEO audit that highlights the gaps before a single demo request.",
    image: "/screenshots/context.png",
    preview: "audit",
  },
  { title: "The Calendar", description: "Total control. Tweak copy inline, swap media assets, or build custom posts from scratch with a frictionless UI.", image: "/screenshots/calendar.png" },
  { title: "Hands-Free Auto-Sender", description: "Set it and forget it. Reliable, automated publishing across platforms so your distribution runs while you code.", image: "/screenshots/scheduler.png" },
  { title: "The Analytics Loop", description: "Real feedback loops to see what resonates and continuously sharpen your GTM motion.", image: "/screenshots/analytics.png" },
];

export default function SplitSections() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="space-y-24 sm:space-y-40 lg:space-y-64">
        {sections.map((section, idx) => {
          const isReversed = idx % 2 === 1;
          const isAeoRow = section.preview === 'audit';

          return (
            <div
              key={idx}
              className={`grid items-center gap-8 lg:gap-16 ${isAeoRow ? 'lg:grid-cols-[1fr_1fr]' : isReversed ? 'lg:grid-cols-[2fr_1fr]' : 'lg:grid-cols-[1fr_2fr]'}`}
            >
              {/* Text Column */}
              <div className={`space-y-4 ${isReversed ? 'lg:order-2' : 'lg:order-1'} ${isAeoRow ? 'lg:max-w-[75%]' : ''}`}>
                <h3 className="text-[30px] font-extrabold leading-[1.05] tracking-tight sm:text-[36px] lg:text-5xl">{section.title}</h3>
                <p className="text-gray-900 text-lg leading-relaxed">{section.description}</p>
              </div>

              {/* Screenshot / Visual Card Column */}
              <div className={`w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl overflow-hidden ${isReversed ? 'lg:order-1' : 'lg:order-2'} ${isAeoRow ? '' : ''}`}>
                {section.preview === 'audit' ? (
                  <div className="rounded-[18px] border-[1.5px] border-[#f0f0f0] bg-[#1c1f23] p-0 font-mono text-[#f4f4f4] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] text-[11px] sm:text-[12px]">
                    <div className="border-b border-[#f0f0f0] px-5 py-3 font-medium tracking-tight text-[#f4f4f4]">
                      AEO Audit Report: <span className="text-[#f6f6f6]">InstaRoom</span>
                    </div>

                    <div className="border-b border-[#f0f0f0] px-5 py-4 font-medium tracking-tight text-[#f4f4f4]">
                      <span>Overall Score: 34/100</span>
                      <span className="ml-3 inline-flex h-4 w-4 items-center justify-center rounded-[4px] bg-[#ff5a57] text-[9px] text-white">!</span>
                    </div>

                    <div className="border-b border-[#f0f0f0] px-5 py-4">
                      <div className="rounded-[10px] border border-[#f0f0f0] bg-[#1c1f23] p-3">
                        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 leading-relaxed text-[#f3f3f3]">
                          <div className="text-left">Clarity</div>
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-full max-w-[140px] overflow-hidden rounded-[2px] border border-[#d7d7d7] bg-[#f2f2f2]">
                              <div className="h-full w-[30%] bg-[#d7d7d7]" />
                            </div>
                          </div>
                          <div className="text-right">30/100</div>

                          <div className="text-left">Differentiation</div>
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-full max-w-[140px] overflow-hidden rounded-[2px] border border-[#d7d7d7] bg-[#f2f2f2]">
                              <div className="h-full w-[40%] bg-[#d7d7d7]" />
                            </div>
                          </div>
                          <div className="text-right">40/100</div>

                          <div className="text-left">Discoverability</div>
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-full max-w-[140px] overflow-hidden rounded-[2px] border border-[#d7d7d7] bg-[#f2f2f2]">
                              <div className="h-full w-[20%] bg-[#d7d7d7]" />
                            </div>
                          </div>
                          <div className="text-right">20/100</div>
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4 leading-relaxed text-[#f2f2f2]">
                      <p>
                        When we asked our AI &ldquo;What does <span className="inline-block">InstaRoom</span> do?&rdquo;, here&apos;s what it said:
                      </p>

                      <div className="mt-5 max-w-[92%] rounded-[2px] border-l border-[#f0f0f0] pl-3 text-[12px] sm:text-[13px] leading-snug text-[#f3f3f3] italic">
                        &ldquo;An unclear telehealth product. Possibly video conferencing. Possibly scheduling. Cannot determine specific use case or target market.&rdquo;
                      </div>

                      <div className="mt-6 flex items-start gap-2 leading-relaxed text-[#f1f1f1]">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#ff5a57] text-[8px] leading-none text-white">!</span>
                        <p>
                          This means when users ask ChatGPT &ldquo;best Doxy.me alternative,&rdquo; InstaRoom is NOT being recommended.
                        </p>
                      </div>

                      <div className="mt-6 leading-relaxed text-[#f1f1f1]">
                        <p className="font-medium">Top 3 Fixes:</p>
                        <ol className="mt-2 list-decimal pl-4 space-y-1">
                          <li>Add a one-line &ldquo;InstaRoom is X for Y&rdquo; headline to your homepage</li>
                          <li>Define your ICP explicitly</li>
                          <li>Add comparison page vs. Doxy/Zoom</li>
                        </ol>
                      </div>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-[2px] border border-[#f0f0f0] px-3 py-2 text-[11px] sm:text-[12px] text-[#f3f3f3]">
                        <span>[</span>
                        <span>Book AEO Optimization Session</span>
                        <span>→</span>
                        <span>]</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={section.image}
                    alt={section.title}
                    width={1200}
                    height={800}
                    className="rounded-xl w-full h-auto object-cover border border-zinc-800/50"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}