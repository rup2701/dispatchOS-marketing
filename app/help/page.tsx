import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Help & Support | DispatchOS',
  description: 'Learn how to set up DispatchOS, review your content calendar, publish posts, and get support.',
};

const contents = [
  ['start-here', 'Start here'],
  ['how-it-works', 'How DispatchOS works'],
  ['onboarding', 'Onboarding'],
  ['reviewing', 'Reviewing your calendar'],
  ['publishing', 'Publishing and channel status'],
  ['scheduling', 'Scheduling and timezones'],
  ['generation', 'Generation and usage'],
  ['analytics', 'Analytics'],
  ['common-problems', 'Common problems'],
  ['billing', 'Account, billing, and cancellation'],
  ['privacy', 'Privacy and security'],
  ['contact', 'Contact support'],
  ['limitations', 'Product limitations'],
];

const workflow = [
  'Complete onboarding with your website URL, audience, tone, and publishing preferences.',
  'Connect at least one social channel in Settings.',
  'Generate your first weekly calendar.',
  'Review the posts in the staging area.',
  'Edit, queue, hold, or drop posts as needed.',
  'Let DispatchOS publish automatically, or use manual publishing where a channel requires it.',
];

const reviewChecklist = [
  'The post is factually accurate.',
  'The post sounds like your voice.',
  'The call to action is appropriate.',
  'The content is not repeating another post in the batch.',
  'The scheduled time is correct for your timezone.',
  'The selected channel is appropriate for the format and length.',
];

const channelStatuses = [
  ['Connected', 'Ready to publish.'],
  ['Reconnect required', 'The authorization or token has expired.'],
  ['Manual', 'DispatchOS can stage the post, but you must copy or publish it yourself.'],
  ['Beta', 'The integration is available for testing and may have limitations.'],
  ['Unavailable', 'The channel cannot currently be used.'],
];

const commonProblems = [
  {
    title: 'My website could not be read',
    body: (
      <>
        <p>Check that:</p>
        <ul>
          <li>The URL is correct and publicly accessible.</li>
          <li>The site does not block automated requests.</li>
          <li>The important product information is visible on the site.</li>
          <li>The site does not require a login to view its content.</li>
        </ul>
        <p>If the scrape still fails, add the key facts manually and try again later.</p>
      </>
    ),
  },
  {
    title: 'The generated posts are too generic',
    body: <p>Add more specific context about your audience, product, point of view, and current work. You can also edit the website content or onboarding settings and generate a fresh batch.</p>,
  },
  {
    title: 'A social connection stopped working',
    body: <p>Open Settings and reconnect the affected channel. If the problem continues, include the channel name and the time of the failure when contacting support.</p>,
  },
  {
    title: 'A post failed to publish',
    body: <p>Open the post to review its status and error message. Check that the channel is connected, the content meets the platform&apos;s limits, and the scheduled time has passed. Do not repeatedly click publish if the platform may have accepted the first request.</p>,
  },
  {
    title: 'I edited a post, but my edit disappeared',
    body: <p>A regeneration may replace the current batch. If you need to preserve edits, do not regenerate that week until you have confirmed how the regeneration flow will affect the batch.</p>,
  },
  {
    title: 'Analytics are missing',
    body: <p>Analytics may take time to arrive, and some platforms expose fewer metrics than others. Confirm that the post was published successfully and that the channel is still connected.</p>,
  },
];

const supportDetails = [
  'The email associated with your account',
  'The page or workflow where the issue occurred',
  'The channel involved, if applicable',
  'The approximate time of the issue',
  'The post, batch, or generation involved',
  'A screenshot of the error, if safe to share',
  'The steps you took immediately before the issue',
];

const limitations = [
  'AI-generated content can be incorrect or incomplete.',
  'You are responsible for reviewing content before publication.',
  'Platform permissions and API behavior can change without notice.',
  'Automated publishing may not be available for every channel.',
  'Analytics are dependent on the data provided by each platform.',
  'A website scrape does not replace your own product and customer knowledge.',
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-black tracking-[-0.04em] text-gray-950 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            Help &amp; support
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            Keep your content moving.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            DispatchOS turns your product context into a weekly content calendar so you can review, schedule, and publish consistently while you keep building.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-24 sm:px-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-20 lg:px-8 lg:pb-36">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">On this page</p>
          <nav className="mt-4 grid gap-2 border-l border-[#b7e8d0] pl-4 text-sm text-gray-600">
            {contents.map(([id, label]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-gray-950">{label}</a>
            ))}
          </nav>
        </aside>

        <article className="min-w-0 space-y-20 sm:space-y-28">
          <section id="start-here" className="scroll-mt-28">
            <SectionHeading id="start-here-heading">Start here</SectionHeading>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {workflow.map((step, index) => (
                <li key={step} className="rounded-2xl border border-[#dfeae3] bg-white/75 p-5 text-base leading-7 text-gray-700">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#e6fff5] text-sm font-bold text-[#008d61]">{index + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          <section id="how-it-works" className="scroll-mt-28">
            <SectionHeading id="how-it-works-heading">How DispatchOS works</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              DispatchOS uses your website and onboarding information to create a working context for content generation. It then creates a weekly calendar with posts mapped to specific days, times, channels, and content categories.
            </p>
            <div className="mt-8 rounded-2xl border border-[#b7e8d0] bg-[#e6fff5] p-6 sm:p-8">
              <p className="font-semibold text-gray-950">Your workflow stays in your hands:</p>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>Edit a post before it is published.</li>
                <li>Queue a post for publishing.</li>
                <li>Hold a post for later.</li>
                <li>Drop a post you do not want to use.</li>
                <li>Regenerate a week when you want a fresh batch.</li>
              </ul>
            </div>
            <p className="mt-6 border-l-2 border-[#00b377] pl-5 text-base leading-7 text-gray-700">
              Regenerating a week may replace the current batch and remove edits made to those posts. Review the confirmation message before continuing.
            </p>
          </section>

          <section id="onboarding" className="scroll-mt-28">
            <SectionHeading id="onboarding-heading">Onboarding</SectionHeading>
            <div className="mt-8 space-y-10 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-950">Website URL</h3>
                <p className="mt-3 text-base leading-7">Use the website that best explains your product, company, or personal brand. A clear website with current positioning produces better results.</p>
                <p className="mt-4 text-base leading-7">If your website is incomplete or mostly empty, add useful context during onboarding, such as:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7">
                  <li>Who the product is for</li>
                  <li>The problem it solves</li>
                  <li>Important features</li>
                  <li>Your preferred point of view</li>
                  <li>Current launches or updates</li>
                  <li>Topics you do not want to discuss</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-950">Audience and tone</h3>
                <p className="mt-3 text-base leading-7">Be specific about your audience. “Startup founders” is less useful than “technical founders building early-stage SaaS products.”</p>
                <p className="mt-3 text-base leading-7">Choose a tone that sounds like you. Generated content should be treated as a strong first draft, not as a substitute for your judgment.</p>
              </div>
            </div>
          </section>

          <section id="reviewing" className="scroll-mt-28">
            <SectionHeading id="reviewing-heading">Reviewing your calendar</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Before queuing posts, check:</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {reviewChecklist.map((item) => <li key={item} className="rounded-xl bg-white/75 px-4 py-3 text-base leading-6 text-gray-700">{item}</li>)}
            </ul>
          </section>

          <section id="publishing" className="scroll-mt-28">
            <SectionHeading id="publishing-heading">Publishing and channel status</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Channel availability can vary based on platform permissions, API access, and your connected account.</p>
            <div className="mt-8 divide-y divide-[#dfeae3] overflow-hidden rounded-2xl border border-[#dfeae3] bg-white/75">
              {channelStatuses.map(([status, description]) => (
                <div key={status} className="grid gap-2 px-5 py-4 sm:grid-cols-[190px_1fr] sm:gap-6">
                  <p className="font-semibold text-gray-950">{status}</p>
                  <p className="text-gray-700">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base leading-7 text-gray-700">If a channel is marked Manual, queued posts will remain available in your staging area rather than being silently lost.</p>
          </section>

          <section id="scheduling" className="scroll-mt-28">
            <SectionHeading id="scheduling-heading">Scheduling and timezones</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Your publishing schedule is configured in Settings. Confirm your timezone and publishing times before queuing a week.</p>
            <p className="mt-4 text-base leading-7 text-gray-700">If you join during the middle of a week, DispatchOS may generate content for the remaining publishing days rather than backfilling days that have already passed.</p>
          </section>

          <section id="generation" className="scroll-mt-28">
            <SectionHeading id="generation-heading">Generation and usage</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Each generation request uses compute and AI capacity. Depending on your plan:</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
              <li>Full weekly generations may count toward your monthly allowance.</li>
              <li>Regenerating a week may count as another generation.</li>
              <li>Very large websites or repeated requests may be limited.</li>
            </ul>
            <p className="mt-6 text-base leading-7 text-gray-700">Usage limits are intended to keep the service reliable and predictable for everyone.</p>
            <p className="mt-4 text-base leading-7 text-gray-700">If you reach a limit, review your usage in the app or contact support before retrying repeatedly.</p>
          </section>

          <section id="analytics" className="scroll-mt-28">
            <SectionHeading id="analytics-heading">Analytics</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Analytics become available after posts are published and the connected platform returns performance data.</p>
            <p className="mt-4 text-base leading-7 text-gray-700">Metrics may differ by channel. For example, one platform may provide impressions while another only provides reactions, comments, or reposts. A delay between publishing and analytics refresh is normal.</p>
          </section>

          <section id="common-problems" className="scroll-mt-28">
            <SectionHeading id="common-problems-heading">Common problems</SectionHeading>
            <div className="mt-8 space-y-8">
              {commonProblems.map((problem) => (
                <div key={problem.title}>
                  <h3 className="text-xl font-bold text-gray-950">{problem.title}</h3>
                  <div className="prose prose-gray mt-3 max-w-none text-base leading-7 text-gray-700">{problem.body}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="billing" className="scroll-mt-28">
            <SectionHeading id="billing-heading">Account, billing, and cancellation</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">Use the account and billing controls available in Settings to review your plan, usage, and subscription status.</p>
            <p className="mt-4 text-base leading-7 text-gray-700">For billing questions, include:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
              <li>The email on the account</li>
              <li>The plan name</li>
              <li>The relevant invoice or transaction date</li>
              <li>A short description of the issue</li>
            </ul>
            <p className="mt-6 border-l-2 border-[#00b377] pl-5 text-base leading-7 text-gray-700">Do not send passwords, access tokens, or secret keys in a support request.</p>
          </section>

          <section id="privacy" className="scroll-mt-28">
            <SectionHeading id="privacy-heading">Privacy and security</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">DispatchOS may process your website content, onboarding information, generated posts, publishing settings, and social authorization data to provide the service.</p>
            <p className="mt-4 text-base leading-7 text-gray-700">You should:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
              <li>Connect only accounts you control.</li>
              <li>Review generated content before publishing.</li>
              <li>Never paste passwords or private keys into post content or support messages.</li>
              <li>Disconnect channels you no longer use.</li>
              <li>Contact support if you believe an account or token has been compromised.</li>
            </ul>
            <p className="mt-6 text-base leading-7 text-gray-700">See the Privacy Policy and Terms of Service for the complete details of data handling and account responsibilities.</p>
          </section>

          <section id="contact" className="scroll-mt-28">
            <SectionHeading id="contact-heading">Contact support</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">When contacting support, include:</p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-base leading-7 text-gray-700">
              {supportDetails.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <p className="mt-6 border-l-2 border-[#00b377] pl-5 text-base leading-7 text-gray-700">Never include passwords, API keys, access tokens, or other secrets.</p>
          </section>

          <section id="limitations" className="scroll-mt-28">
            <SectionHeading id="limitations-heading">Product limitations</SectionHeading>
            <p className="mt-6 text-lg leading-8 text-gray-700">DispatchOS is designed to reduce the work of planning and publishing content, not to remove your responsibility for what gets published.</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
              {limitations.map((limitation) => <li key={limitation}>{limitation}</li>)}
            </ul>
            <p className="mt-6 rounded-2xl bg-[#e6fff5] p-6 text-base leading-7 text-gray-800">We recommend starting with one connected channel, reviewing your first weekly calendar carefully, and expanding your automation once the workflow feels right.</p>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}