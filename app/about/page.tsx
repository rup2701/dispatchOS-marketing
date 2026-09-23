import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'About DispatchOS',
  description: 'DispatchOS is the GTM operating system for builders.',
};

const contents = [
  ['why', 'Why DispatchOS exists'],
  ['what', 'What DispatchOS does'],
  ['systems', 'The systems underneath'],
  ['principles', 'Engineering principles'],
  ['not', 'What DispatchOS is not'],
  ['builders', 'Built for builders'],
  ['thesis', 'The product thesis'],
  ['direction', 'Where we are going'],
  ['founder', 'A note from the founder'],
];

const workflow = [
  ['Understand your context', 'It starts with your business—not with a blank prompt. Your website, onboarding answers, audience, tone, priorities, and publishing preferences establish the foundation.'],
  ['Find the story', 'The system looks for the ideas behind the work: what you are building, what changed, what you learned, what your audience needs to understand, and what deserves attention this week.'],
  ['Build the week', 'DispatchOS turns that context into a structured weekly content calendar with channel-appropriate posts, themes, timing, and categories.'],
  ['Keep you in control', 'Automation does not mean surrendering judgment. You can review, edit, queue, hold, drop, or regenerate content before it goes out.'],
  ['Dispatch and learn', 'Approved content moves into the publishing workflow. Once content is published, performance signals can help reveal which topics, stories, and formats are worth pursuing again.'],
];

const systems = [
  ['ContextBrain', 'Understands who you are, what you build, and what has changed.'],
  ['ContentBrain', 'Remembers what you have said, what has been published, and what should not be repeated.'],
  ['GenerateBrain', 'Turns context, strategy, and intent into structured content.'],
  ['PublishBrain', 'Schedules, distributes, tracks status, and brings performance back into the system.'],
];

const principles = [
  ['Context before prompts', 'Good content starts with accurate context. DispatchOS is designed to work from evidence about your business rather than asking a model to invent something vaguely relevant.'],
  ['Structured systems over text blobs', 'The model generates structured content. The application owns the data model, validation, status, scheduling, and publishing behavior. This keeps the product reliable even as models change.'],
  ['Interpolate, do not invent', 'DispatchOS should expand on your knowledge, connect ideas, and help express your point of view—but it should not invent customers, metrics, features, case studies, or claims.'],
  ['Human control over black-box automation', 'The goal is not to remove you from the process. The goal is to remove repetitive work while preserving the decisions that matter.'],
  ['Learn from reality', 'Your content should get better because it is connected to what you are actually building and what your audience actually responds to—not because the system produces more words.'],
];

const builders = [
  'Indie developers',
  'Solo founders',
  'Technical entrepreneurs',
  'Micro-SaaS builders',
  'Small product teams',
  'Consultants and operators building a personal brand around their work',
];

const notList = [
  'A generic AI writer that starts from an empty text box',
  'A black-box autopilot that publishes without review',
  'A traditional scheduler that expects you to create every post yourself',
  'A replacement for your judgment, experience, or relationship with your audience',
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-black tracking-[-0.04em] text-gray-950 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            About DispatchOS
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            The GTM operating system for builders.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-8 text-gray-700 sm:text-2xl sm:leading-9">
            You build. Dispatch tells the story.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-36">
        <aside className="hidden">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">On this page</p>
          <nav className="mt-4 grid gap-2 border-l border-[#b7e8d0] pl-4 text-sm text-gray-600">
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-gray-950">{label}</a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 space-y-20 sm:space-y-28">
          <section id="why" className="scroll-mt-28">
            <div className="rounded-[28px] border border-[#b7e8d0] bg-[#e6fff5] p-7 sm:p-10">
              <p className="text-2xl font-bold leading-tight tracking-[-0.03em] text-gray-950 sm:text-3xl">Most founders do not have a shortage of ideas, expertise, or things worth saying. They have a shortage of time and cognitive bandwidth.</p>
            </div>
            <div className="mt-16 sm:mt-20">
              <SectionHeading id="why-heading">Why DispatchOS exists</SectionHeading>
            </div>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">
              <p>You spend the day building the product, fixing the hard problem, talking to customers, and making decisions. Then, usually at the worst possible moment, marketing asks a new question:</p>
              <blockquote className="border-l-2 border-[#00b377] pl-5 text-xl font-semibold text-gray-950">What should I post today?</blockquote>
              <p>DispatchOS exists to remove that daily context switch.</p>
              <p>DispatchOS began as a personal operating problem. While building products, it became clear that development could be systematized, but go-to-market still depended on mood, memory, and whatever energy was left at the end of the day.</p>
              <p>The result was predictable: inconsistent posting, repeated ideas, unfinished content calendars, and long stretches where important work remained invisible.</p>
              <p>DispatchOS was built to close that gap.</p>
              <p>It turns the work you are already doing into a coherent story your market can understand.</p>
            </div>
          </section>

          <section id="what" className="scroll-mt-28">
            <SectionHeading id="what-heading">What DispatchOS does</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">DispatchOS connects five parts of the GTM workflow:</p>
            <div className="mt-8 space-y-4">
              {workflow.map(([title, description], index) => (
                <div key={title} className="grid gap-4 rounded-2xl border border-[#dfeae3] bg-white/75 p-5 sm:grid-cols-[44px_190px_1fr] sm:items-start sm:p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6fff5] text-sm font-bold text-[#008d61]">{index + 1}</span>
                  <h3 className="text-lg font-bold text-gray-950">{title}</h3>
                  <p className="text-base leading-7 text-gray-700">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 rounded-2xl border-l-2 border-[#00b377] bg-white/50 px-5 py-4 text-base leading-7 text-gray-700">The calendar is the control surface between your real work and public distribution.</p>
          </section>

          <section id="systems" className="scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <SectionHeading id="systems-heading">Simple on the surface. Serious underneath.</SectionHeading>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">The interface is intentionally simple because the product absorbs the complexity.</p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {systems.map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-[#dfeae3] bg-white/75 p-6">
                  <h3 className="text-xl font-bold text-gray-950">{title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-700">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg leading-8 text-gray-700">The visible experience may be a weekly calendar. The underlying product is a system for turning business reality into narrative and distribution.</p>
          </section>

          <section id="principles" className="scroll-mt-28">
            <SectionHeading id="principles-heading">Our engineering principles</SectionHeading>
            <div className="mt-8 space-y-8">
              {principles.map(([title, description]) => (
                <div key={title} className="border-l border-[#b7e8d0] pl-5 sm:pl-6">
                  <h3 className="text-xl font-bold text-gray-950">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-gray-700">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="not" className="scroll-mt-28">
            <SectionHeading id="not-heading">What DispatchOS is not</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">DispatchOS is not:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {notList.map((item) => <li key={item} className="rounded-xl bg-white/75 px-5 py-4 text-base leading-7 text-gray-700">{item}</li>)}
            </ul>
            <p className="mt-8 text-lg leading-8 text-gray-700">It is the system around the model: context, strategy, generation, review, distribution, and learning.</p>
          </section>

          <section id="builders" className="scroll-mt-28">
            <SectionHeading id="builders-heading">Built for builders</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">DispatchOS is for people who are creating something while also trying to make the market notice:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {builders.map((builder) => <li key={builder} className="rounded-xl border border-[#dfeae3] bg-[#eafef4] px-5 py-4 font-medium text-gray-800">{builder}</li>)}
            </ul>
            <p className="mt-8 text-lg leading-8 text-gray-700">You do not need to become a full-time content creator. You need a reliable way to remain visible while continuing to build.</p>
          </section>

          <section id="thesis" className="scroll-mt-28">
            <SectionHeading id="thesis-heading">The product thesis</SectionHeading>
            <p className="mt-6 text-2xl font-bold leading-tight tracking-[-0.03em] text-gray-950 sm:text-3xl">Your work is already your content.</p>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">
              <p>The product updates, decisions, tradeoffs, experiments, customer conversations, launches, failures, and lessons are all signals. The hard part is noticing what matters, turning it into a useful narrative, and distributing it consistently.</p>
              <p>DispatchOS is the narrative layer between the work you do and the market that needs to know about it.</p>
            </div>
          </section>

          <section id="direction" className="scroll-mt-28">
            <SectionHeading id="direction-heading">Where we are going</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">
              <p>The long-term direction is broader than generating posts. DispatchOS is being built toward a living understanding of a business: its context, current work, knowledge, audience, narrative, distribution, and feedback.</p>
              <p>Over time, more signals can contribute to that system—documents, product updates, customer research, shipping activity, and performance data. The principle remains the same:</p>
            </div>
            <blockquote className="mt-8 rounded-2xl bg-[#e6fff5] p-6 text-xl font-semibold leading-8 text-gray-950 sm:p-8 sm:text-2xl">Observe the work. Find the story. Let the builder stay focused.</blockquote>
          </section>

          <section id="founder" className="scroll-mt-28">
            <SectionHeading id="founder-heading">A note from the founder</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-700">
              <p>I built DispatchOS because I was living the problem.</p>
              <p>I could spend an entire day building a product, solving a technical issue, or working through a difficult product decision—and still end the day knowing I should have shared more of it. The problem was not a lack of experience or ideas. It was the cost of repeatedly switching from building to marketing.</p>
              <p>DispatchOS is my attempt to make that switch smaller, calmer, and more consistent for builders like me.</p>
            </div>
            <p className="mt-8 text-2xl font-black tracking-[-0.04em] text-gray-950 sm:text-3xl">You build. Dispatch tells the story.</p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}