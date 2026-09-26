import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Security | DispatchOS',
  description: 'Learn how DispatchOS approaches account, content, and integration security.',
};

const contents = [
  ['approach', 'Our approach'],
  ['data', 'Data protection'],
  ['access', 'Access controls'],
  ['integrations', 'Connected channels'],
  ['infrastructure', 'Infrastructure and operations'],
  ['monitoring', 'Monitoring and response'],
  ['your-part', 'Your part'],
  ['report', 'Report a concern'],
];

const practices = [
  ['Least privilege', 'Access to systems and customer information is limited to what is needed for a person or service to perform its role.'],
  ['Separation of environments', 'Development and production concerns are managed separately where appropriate to reduce unnecessary access and operational risk.'],
  ['Secure integrations', 'Connected channel permissions are used to perform the actions you authorize, and you can disconnect channels you no longer use.'],
  ['Operational awareness', 'We monitor service behavior and investigate reports, errors, and signals that may indicate abuse or a security issue.'],
];

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-28 text-3xl font-black tracking-[-0.04em] text-gray-950 sm:text-4xl">
      {children}
    </h2>
  );
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            Security
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            Built to handle your context carefully.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            DispatchOS connects to the work behind your business. This is how we think about protecting the account, content, and integrations you trust to the product.
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
          <section id="approach" className="scroll-mt-28">
            <SectionHeading id="approach-heading">Our approach</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>Security is an ongoing product and engineering responsibility, not a one-time feature. We design the service to reduce unnecessary access, protect credentials, and preserve your control over what gets published.</p>
              <p>We continue to improve our controls as DispatchOS grows. This page describes our current approach and does not represent a certification or guarantee of absolute security.</p>
            </div>
          </section>

          <section id="data" className="scroll-mt-28">
            <SectionHeading id="data-heading">Data protection</SectionHeading>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {practices.map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-[#dfeae3] bg-white/75 p-6">
                  <h3 className="text-lg font-bold text-gray-950">{title}</h3>
                  <p className="mt-3 text-base leading-7">{description}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-lg leading-8">Your website content, onboarding information, generated posts, publishing settings, and social authorization data are handled to provide the service described in our <a className="font-semibold text-[#008d61] underline" href="/privacy">Privacy Policy</a>.</p>
          </section>

          <section id="access" className="scroll-mt-28">
            <SectionHeading id="access-heading">Access controls</SectionHeading>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              <li>Account access is protected by authentication controls provided by the application.</li>
              <li>Access to internal systems and customer data is limited according to role and operational need.</li>
              <li>We review access as responsibilities change and remove access that is no longer needed.</li>
              <li>We expect team members and service providers with access to protect confidential information.</li>
            </ul>
          </section>

          <section id="integrations" className="scroll-mt-28">
            <SectionHeading id="integrations-heading">Connected channels</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>When you connect a social channel, DispatchOS uses the permissions and authorization data needed to stage or publish the content you approve. The available permissions depend on the platform.</p>
              <p>Review connected channels regularly and disconnect accounts you no longer use. If a token or account may be compromised, disconnect it and contact us at <a className="font-semibold text-[#008d61] underline" href="mailto:support@dispatchos.dev">support@dispatchos.dev</a>.</p>
              <p>Third-party platforms have their own security practices, permissions, terms, and privacy policies. DispatchOS cannot control how a platform operates after content or an authorization request reaches it.</p>
            </div>
          </section>

          <section id="infrastructure" className="scroll-mt-28">
            <SectionHeading id="infrastructure-heading">Infrastructure and operations</SectionHeading>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              <li>We use managed infrastructure and service providers selected to support reliable operation of the product.</li>
              <li>We apply reasonable protections to production systems, application secrets, and operational data.</li>
              <li>We use logging and diagnostics to operate the service, troubleshoot failures, and investigate suspicious behavior.</li>
              <li>Backups and retention depend on the systems involved and are handled according to operational and legal requirements.</li>
            </ul>
            <p className="mt-6 text-base leading-7">Specific infrastructure providers, control details, and retention periods may change as the service evolves.</p>
          </section>

          <section id="monitoring" className="scroll-mt-28">
            <SectionHeading id="monitoring-heading">Monitoring and response</SectionHeading>
            <div className="mt-6 space-y-5 text-lg leading-8">
              <p>We investigate credible reports of unauthorized access, account compromise, data exposure, abuse, and service vulnerabilities. When appropriate, we take steps to contain an issue, restore service, preserve evidence, and notify affected users in accordance with applicable law.</p>
              <p>Security events can also involve third-party platforms or providers. We will work to understand the scope and communicate material information where required.</p>
            </div>
          </section>

          <section id="your-part" className="scroll-mt-28">
            <SectionHeading id="your-part-heading">Your part</SectionHeading>
            <p className="mt-6 text-lg leading-8">You help protect the service when you:</p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-base leading-7">
              <li>Use a strong, unique password and protect your account credentials.</li>
              <li>Connect only websites and social accounts you control or are authorized to use.</li>
              <li>Review generated content before publishing.</li>
              <li>Do not paste passwords, private keys, access tokens, or unnecessary sensitive information into DispatchOS.</li>
              <li>Keep your device and browser reasonably up to date.</li>
              <li>Report suspicious activity promptly.</li>
            </ul>
          </section>

          <section id="report" className="scroll-mt-28">
            <SectionHeading id="report-heading">Report a concern</SectionHeading>
            <div className="mt-6 rounded-2xl bg-[#e6fff5] p-6 text-lg leading-8 sm:p-8">
              <p>To report a suspected vulnerability or account compromise, email:</p>
              <a className="mt-3 inline-block font-semibold text-[#008d61] underline" href="mailto:support@dispatchos.dev">support@dispatchos.dev</a>
              <p className="mt-4 text-base leading-7">Please do not include passwords, API keys, access tokens, or other secrets in your report. Include enough detail for us to reproduce or investigate the issue safely.</p>
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </main>
  );
}