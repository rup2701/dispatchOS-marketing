import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Privacy Policy | DispatchOS',
  description: 'Learn how DispatchOS collects, uses, protects, and handles information.',
};

const contents = [
  ['overview', 'Overview'],
  ['information', 'Information we collect'],
  ['use', 'How we use information'],
  ['sharing', 'When we share information'],
  ['ai', 'AI and generated content'],
  ['retention', 'Data retention'],
  ['security', 'Security'],
  ['rights', 'Your choices and rights'],
  ['transfers', 'International transfers'],
  ['children', 'Children’s privacy'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact us'],
];

const dataCategories = [
  ['Account information', 'Your email address, account details, plan, and subscription status.'],
  ['Business context', 'Your website content, onboarding answers, audience, tone, positioning, product details, and publishing preferences.'],
  ['Content and workflow data', 'Generated posts, edits, calendar entries, queues, publishing status, and other content you create or manage in DispatchOS.'],
  ['Connected channels', 'Account identifiers, authorization details, and publishing permissions needed to connect the social channels you choose.'],
  ['Usage and device information', 'Basic activity, browser, device, diagnostic, and log information used to operate and improve the service.'],
  ['Support information', 'Messages, bug reports, screenshots, and other information you choose to send to support.'],
];

const purposes = [
  'Provide, operate, maintain, and secure DispatchOS.',
  'Create content calendars and generated drafts from the context you provide.',
  'Publish approved content to the channels you connect and display publishing status.',
  'Provide analytics and feedback when connected platforms make performance data available.',
  'Respond to support requests, troubleshoot problems, and communicate about the service.',
  'Process subscriptions, billing, usage limits, and account administration.',
  'Detect abuse, prevent fraud, enforce our terms, and protect users and the service.',
  'Understand product usage and improve reliability, usability, and features.',
  'Comply with legal obligations and respond to lawful requests.',
];

const rights = [
  'Request access to personal information we hold about you.',
  'Ask us to correct inaccurate or incomplete information.',
  'Request deletion of information, subject to legal or operational requirements.',
  'Object to or ask us to restrict certain processing where applicable.',
  'Request a portable copy of information you provided where applicable.',
  'Withdraw consent where processing is based on consent.',
  'Disconnect social channels and stop using optional integrations.',
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-black tracking-[-0.04em] text-gray-950 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            Privacy policy
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            Your work is yours.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            This policy explains what information DispatchOS handles, why we handle it, and the choices you have.
          </p>
          <p className="mt-5 text-sm text-gray-500">Last updated: September 26, 2026</p>
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

        <article className="min-w-0 space-y-20 text-gray-700 sm:space-y-28">
          <section id="overview" className="scroll-mt-28">
            <SectionHeading id="overview-heading">Overview</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>DispatchOS helps builders turn product context into a weekly content calendar. To provide that service, we process information about your account, business, content, connected channels, and use of the product.</p>
              <p>This Privacy Policy applies to the DispatchOS website at <strong className="font-semibold text-gray-950">dispatchos.dev</strong>, the application at <strong className="font-semibold text-gray-950">app.dispatchos.dev</strong>, and related services that link to this policy.</p>
              <p>By using DispatchOS, you acknowledge this policy. If you do not agree with it, do not use the service.</p>
            </div>
          </section>

          <section id="information" className="scroll-mt-28">
            <SectionHeading id="information-heading">Information we collect</SectionHeading>
            <p className="mt-6 text-lg leading-8">The information we handle depends on how you use DispatchOS and which integrations you connect.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {dataCategories.map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-[#dfeae3] bg-white/75 p-6">
                  <h3 className="text-lg font-bold text-gray-950">{title}</h3>
                  <p className="mt-3 text-base leading-7">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="use" className="scroll-mt-28">
            <SectionHeading id="use-heading">How we use information</SectionHeading>
            <p className="mt-6 text-lg leading-8">We use information for the following purposes:</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              {purposes.map((purpose) => <li key={purpose}>{purpose}</li>)}
            </ul>
          </section>

          <section id="sharing" className="scroll-mt-28">
            <SectionHeading id="sharing-heading">When we share information</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>We do not sell your personal information. We share information only when needed to provide DispatchOS, operate the business, comply with law, or protect rights and safety.</p>
              <p>This may include sharing information with service providers that help with hosting, infrastructure, authentication, billing, email, error monitoring, analytics, or customer support. These providers may process information only to perform services for us and under appropriate confidentiality and security obligations.</p>
              <p>We may also share information when you direct us to, such as when you connect a social channel and approve publishing, or when required by law or in connection with a merger, acquisition, financing, reorganization, or sale of assets.</p>
            </div>
          </section>

          <section id="ai" className="scroll-mt-28">
            <SectionHeading id="ai-heading">AI and generated content</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>DispatchOS uses AI systems to help transform the business context you provide into structured content drafts and calendars.</p>
              <p>Your content is used to provide the product, including grounding and generating drafts that reflect your business, audience, and voice. Generated content can be inaccurate or incomplete, so you remain responsible for reviewing content before publication.</p>
              <p>Do not submit passwords, private keys, access tokens, confidential information you are not authorized to share, or sensitive personal information that is unnecessary for the service.</p>
            </div>
          </section>

          <section id="retention" className="scroll-mt-28">
            <SectionHeading id="retention-heading">Data retention</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>We retain information for as long as reasonably necessary to provide the service, maintain your account, resolve disputes, enforce agreements, comply with legal obligations, and protect the service.</p>
              <p>When information is no longer needed, we may delete it, anonymize it, or securely isolate it where deletion is not immediately practical. Retention periods can vary by data type and operational need.</p>
              <p>You can contact us to request account or data deletion. Some information may need to be retained where required by law or needed for legitimate security and accounting purposes.</p>
            </div>
          </section>

          <section id="security" className="scroll-mt-28">
            <SectionHeading id="security-heading">Security</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>We use reasonable technical and organizational measures intended to protect information against unauthorized access, loss, misuse, alteration, or disclosure.</p>
              <p>No online service can guarantee absolute security. You are responsible for using a strong, unique password, protecting your account, connecting only accounts you control, and notifying us promptly if you suspect unauthorized access.</p>
            </div>
          </section>

          <section id="rights" className="scroll-mt-28">
            <SectionHeading id="rights-heading">Your choices and rights</SectionHeading>
            <p className="mt-6 text-lg leading-8">Depending on where you live, you may have the right to:</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              {rights.map((right) => <li key={right}>{right}</li>)}
            </ul>
            <p className="mt-6 text-base leading-7">To make a request, email <a className="font-semibold text-[#008d61] underline" href="mailto:support@dispatchos.dev">support@dispatchos.dev</a>. We may need to verify your identity before completing a request. You may also have the right to contact your local data protection authority.</p>
          </section>

          <section id="transfers" className="scroll-mt-28">
            <SectionHeading id="transfers-heading">International transfers</SectionHeading>
            <p className="mt-6 text-lg leading-8">DispatchOS and its service providers may process information in countries other than the country where you live. When required, we use appropriate safeguards for international transfers and handle information in accordance with applicable law.</p>
          </section>

          <section id="children" className="scroll-mt-28">
            <SectionHeading id="children-heading">Children’s privacy</SectionHeading>
            <p className="mt-6 text-lg leading-8">DispatchOS is intended for business and professional use and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided information to us, contact us so we can review and delete it where appropriate.</p>
          </section>

          <section id="changes" className="scroll-mt-28">
            <SectionHeading id="changes-heading">Changes to this policy</SectionHeading>
            <p className="mt-6 text-lg leading-8">We may update this policy as DispatchOS changes or as legal requirements develop. We will update the date at the top of this page and, where appropriate, provide additional notice. Your continued use of the service after an update means the revised policy applies to your use.</p>
          </section>

          <section id="contact" className="scroll-mt-28">
            <SectionHeading id="contact-heading">Contact us</SectionHeading>
            <div className="mt-6 rounded-2xl bg-[#e6fff5] p-6 text-lg leading-8 sm:p-8">
              <p>Questions about this policy or your information can be sent to:</p>
              <a className="mt-3 inline-block font-semibold text-[#008d61] underline" href="mailto:support@dispatchos.dev">support@dispatchos.dev</a>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}