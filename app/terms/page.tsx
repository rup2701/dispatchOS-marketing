import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Terms of Service | DispatchOS',
  description: 'The terms that apply when you use DispatchOS.',
};

const contents = [
  ['agreement', 'Agreement'],
  ['service', 'The service'],
  ['accounts', 'Accounts'],
  ['content', 'Your content'],
  ['ai', 'AI-generated content'],
  ['publishing', 'Publishing and channels'],
  ['billing', 'Plans and billing'],
  ['acceptable-use', 'Acceptable use'],
  ['ownership', 'Ownership'],
  ['availability', 'Availability and changes'],
  ['disclaimers', 'Disclaimers'],
  ['liability', 'Liability'],
  ['termination', 'Termination'],
  ['contact', 'Contact'],
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-black tracking-[-0.04em] text-gray-950 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            Terms of service
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            The working agreement.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            These terms explain the rules for using DispatchOS and the responsibilities we share while you build and publish.
          </p>
          <p className="mt-5 text-sm text-gray-500">Last updated: September 26, 2026</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-4 pb-24 sm:px-6 lg:grid-cols-[190px_minmax(0,1fr)] lg:gap-20 lg:px-8 lg:pb-36">
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">On this page</p>
          <nav className="mt-4 grid gap-2 border-l border-[#b7e8d0] pl-4 text-sm text-gray-600">
            {contents.map(([id, label]) => <a key={id} href={`#${id}`} className="transition hover:text-gray-950">{label}</a>)}
          </nav>
        </aside>

        <article className="min-w-0 space-y-20 text-gray-700 sm:space-y-28">
          <section id="agreement" className="scroll-mt-28">
            <SectionHeading id="agreement-heading">Agreement</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>These Terms of Service are an agreement between you and DispatchOS. They apply to your use of the DispatchOS website at <strong className="font-semibold text-gray-950">dispatchos.dev</strong>, the application at <strong className="font-semibold text-gray-950">app.dispatchos.dev</strong>, and related services that link to these terms.</p>
              <p>By creating an account or using DispatchOS, you agree to these terms and our <a className="font-semibold text-[#008d61] underline" href="/privacy">Privacy Policy</a>. If you are using DispatchOS for a company, you represent that you have authority to accept these terms for that company.</p>
            </div>
          </section>

          <section id="service" className="scroll-mt-28">
            <SectionHeading id="service-heading">The service</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>DispatchOS helps builders turn business context into structured content calendars, drafts, publishing workflows, and available performance feedback.</p>
              <p>Features, integrations, plans, limits, and availability may change as the product develops. Some features may be marked beta, manual, or otherwise limited.</p>
            </div>
          </section>

          <section id="accounts" className="scroll-mt-28">
            <SectionHeading id="accounts-heading">Accounts</SectionHeading>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              <li>Provide accurate information and keep it up to date.</li>
              <li>Keep your credentials confidential and do not share access in a way that violates your plan or another person&apos;s rights.</li>
              <li>Notify us promptly if you believe your account has been compromised.</li>
              <li>Use only accounts, websites, and social channels that you own or are authorized to connect.</li>
              <li>You are responsible for activity performed through your account.</li>
            </ul>
          </section>

          <section id="content" className="scroll-mt-28">
            <SectionHeading id="content-heading">Your content</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>You retain ownership of the business information, website content, prompts, edits, media, and other materials you submit to DispatchOS, subject to rights held by others.</p>
              <p>You give DispatchOS the limited rights needed to host, process, reproduce, transform, display, and transmit your content to provide and improve the service, including sending approved content to channels you connect.</p>
              <p>You are responsible for having the rights and permissions needed for content you submit or publish, and for ensuring it does not violate law, platform rules, or another person&apos;s rights.</p>
            </div>
          </section>

          <section id="ai" className="scroll-mt-28">
            <SectionHeading id="ai-heading">AI-generated content</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>DispatchOS uses AI to generate drafts and organize content from the context you provide. Outputs may be inaccurate, incomplete, repetitive, or unsuitable for your audience.</p>
              <p>You must review generated content before publishing. You are responsible for claims, disclosures, legal compliance, intellectual property, and the final decision to publish.</p>
              <p>Do not treat generated content as legal, financial, medical, or other professional advice.</p>
            </div>
          </section>

          <section id="publishing" className="scroll-mt-28">
            <SectionHeading id="publishing-heading">Publishing and channels</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>When you connect a social channel, you authorize DispatchOS to use the permissions required for the actions you approve. Platform availability, permissions, rate limits, API behavior, and content rules are controlled partly by the third-party platform.</p>
              <p>DispatchOS is not responsible for a platform rejecting, delaying, modifying, removing, or failing to publish content. You are responsible for reviewing channel status and complying with each platform&apos;s terms.</p>
              <p>You can disconnect channels and use manual publishing where automated publishing is not available.</p>
            </div>
          </section>

          <section id="billing" className="scroll-mt-28">
            <SectionHeading id="billing-heading">Plans and billing</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>Paid plans, prices, allowances, usage limits, and billing intervals are shown at checkout or in the application. You authorize the applicable payment provider to charge the payment method associated with your subscription.</p>
              <p>Unless stated otherwise, subscriptions renew for the selected billing period until canceled. Cancelation takes effect according to the plan and billing information shown in the application.</p>
              <p>Taxes, refunds, credits, and billing adjustments are handled according to the applicable checkout terms and law.</p>
            </div>
          </section>

          <section id="acceptable-use" className="scroll-mt-28">
            <SectionHeading id="acceptable-use-heading">Acceptable use</SectionHeading>
            <p className="mt-6 text-lg leading-8">You may not use DispatchOS to:</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              <li>Break the law, infringe rights, or violate a platform&apos;s rules.</li>
              <li>Send spam, scams, malware, phishing, or deceptive content.</li>
              <li>Harass, threaten, exploit, or target people unlawfully.</li>
              <li>Attempt to access accounts, systems, or data without authorization.</li>
              <li>Interfere with the service, bypass limits, or probe it for vulnerabilities without permission.</li>
              <li>Submit secrets or sensitive information that is not needed for the service.</li>
              <li>Use automation to make decisions where errors could cause substantial harm without appropriate human review.</li>
            </ul>
          </section>

          <section id="ownership" className="scroll-mt-28">
            <SectionHeading id="ownership-heading">Ownership</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>DispatchOS and its software, branding, design, documentation, and service materials are owned by DispatchOS or its licensors and are protected by applicable law.</p>
              <p>These terms give you a limited, non-exclusive, non-transferable right to use the service during your subscription or authorized access period. No other rights are transferred.</p>
              <p>If you send feedback, you allow us to use it without restriction or compensation, provided we do not identify you publicly without permission.</p>
            </div>
          </section>

          <section id="availability" className="scroll-mt-28">
            <SectionHeading id="availability-heading">Availability and changes</SectionHeading>
            <p className="mt-6 text-lg leading-8">We work to keep DispatchOS reliable, but the service may be unavailable or degraded because of maintenance, outages, third-party dependencies, security events, or circumstances beyond our control. We may modify, pause, or discontinue features with reasonable notice where practical.</p>
          </section>

          <section id="disclaimers" className="scroll-mt-28">
            <SectionHeading id="disclaimers-heading">Disclaimers</SectionHeading>
            <p className="mt-6 text-lg leading-8">To the maximum extent permitted by law, DispatchOS is provided on an “as is” and “as available” basis. We do not guarantee that the service or generated content will be uninterrupted, error-free, accurate, complete, secure, or suitable for every purpose. You use generated content and publishing features at your own judgment and risk.</p>
          </section>

          <section id="liability" className="scroll-mt-28">
            <SectionHeading id="liability-heading">Liability</SectionHeading>
            <p className="mt-6 text-lg leading-8">To the maximum extent permitted by law, DispatchOS and its team will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business opportunities arising from your use of the service. Where liability cannot be excluded, it will be limited to the amount you paid for the service during the applicable period, subject to any limits that cannot legally be restricted.</p>
          </section>

          <section id="termination" className="scroll-mt-28">
            <SectionHeading id="termination-heading">Termination</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>You may stop using DispatchOS or cancel your subscription through the available account controls. We may suspend or terminate access if you materially breach these terms, create risk for the service or others, or if required by law.</p>
              <p>When access ends, your right to use the service ends. Provisions that should reasonably survive termination, including ownership, disclaimers, limitations, and dispute-related terms, will continue to apply.</p>
            </div>
          </section>

          <section id="contact" className="scroll-mt-28">
            <SectionHeading id="contact-heading">Contact</SectionHeading>
            <div className="mt-6 rounded-2xl bg-[#e6fff5] p-6 text-lg leading-8 sm:p-8">
              <p>Questions about these terms can be sent to:</p>
              <a className="mt-3 inline-block font-semibold text-[#008d61] underline" href="mailto:support@dispatchos.dev">support@dispatchos.dev</a>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}