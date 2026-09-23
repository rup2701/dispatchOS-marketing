const faqs = [
  {
    question: 'What is DispatchOS?',
    answer:
      'DispatchOS turns your product context (your website + onboarding inputs) into a weekly content calendar, then drafts posts you can review, edit, and schedule.',
  },
  {
    question: 'Is DispatchOS just another social scheduler?',
    answer:
      'No. Schedulers help you publish what you already wrote. DispatchOS helps you decide what to say, drafts it for you, and produces a week-ready calendar.',
  },
  {
    question: 'How does it generate content that’s actually relevant to my product?',
    answer:
      'It’s grounded in your website plus what you provide (ICP + tone + positioning). The goal is product reality → usable drafts, not generic “AI marketing copy.”',
  },
  {
    question: 'Do I have to let it auto-post?',
    answer:
      'No. You can keep autopublish off and use DispatchOS strictly for planning + drafting. When autopublish is on, you still control what gets queued.',
  },
  {
    question: 'Can I review/edit everything before it goes live?',
    answer:
      'Yes—human-in-the-loop is the default workflow. You can edit copy, queue posts, hold them, or drop them entirely.',
  },
  {
    question: 'What happens if I regenerate a week?',
    answer:
      'Regeneration creates a fresh batch. It’s a clean reset—expect any edits for that week to be wiped (no messy merging).',
  },
  {
    question: 'What if my website changes?',
    answer:
      'You can re-scrape your site when you want (for example, after a launch or messaging update) so future drafts reflect the latest context.',
  },
  {
    question: 'Will it hallucinate facts about my product?',
    answer:
      'AI can be wrong. DispatchOS reduces the risk by grounding drafts in your real context and keeping you in approval before anything ships.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-28 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
      <div className="mb-10 text-left">
        <h2 className="mt-4 text-center text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
          FAQ
        </h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-900 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-gray-900 last:border-b-0">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-bold text-gray-900 sm:text-lg">
              <span>{faq.question}</span>
              <span className="text-2xl leading-none text-gray-700 transition group-open:rotate-45">+</span>
            </summary>
            <p className="px-5 pb-5 text-base leading-7 text-gray-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
