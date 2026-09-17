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
    <section id="faq" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-10 text-left">
        {/* <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#00b377]">FAQ</p> */}
        <h2 className="mt-4 font-extrabold text-3xl font-bold tracking-tight text-gray-950 text-center sm:text-4xl">
          FAQ
        </h2>
      </div>

      <div className="divide-y divide-gray-200 border-y border-gray-200">
        {faqs.map((faq) => (
          <details key={faq.question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium text-gray-900 sm:text-lg">
              <span>{faq.question}</span>
              <span className="text-2xl leading-none text-gray-400 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-base leading-7 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
