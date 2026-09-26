import Footer from '@/components/Footer';
import BugReportForm from '@/components/BugReportForm';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Contact | DispatchOS',
  description: 'Contact DispatchOS support, report a bug, or connect with the early-access community.',
};

const supportEmail = 'support@dispatchos.dev';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />

      <header className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-[#8ae0c5] bg-[#eafef4] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0f9a6d]">
            Contact DispatchOS
          </span>
          <h1 className="mt-7 text-5xl font-black leading-[0.96] tracking-[-0.06em] text-gray-950 sm:text-7xl">
            We are building this with you.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-700 sm:text-xl">
            Need help, found something broken, or want to shape what DispatchOS becomes next? Start with the path that fits.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 lg:px-8 lg:pb-36">
        <div className="grid gap-6 md:grid-cols-3">
          <a href={`mailto:${supportEmail}`} className="group rounded-[28px] border border-[#b7e8d0] bg-[#e6fff5] p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00b377]/10 sm:p-8">
            <span className="text-3xl" aria-hidden="true">✉</span>
            <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950">General support</h2>
            <p className="mt-3 text-base leading-7 text-gray-700">Questions about your account, billing, setup, or workflow.</p>
            <span className="mt-6 inline-block font-semibold text-[#008d61] group-hover:underline">{supportEmail}</span>
          </a>

          <a href="#bug-report" className="group rounded-[28px] border border-[#dfeae3] bg-white/80 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00b377]/10 sm:p-8">
            <span className="text-3xl" aria-hidden="true">⚙</span>
            <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950">Submit a bug</h2>
            <p className="mt-3 text-base leading-7 text-gray-700">Send the details we need to reproduce the issue and follow up.</p>
            <span className="mt-6 inline-block font-semibold text-[#008d61] group-hover:underline">Open bug report</span>
          </a>

          <div className="rounded-[28px] border border-[#dfeae3] bg-white/80 p-6 sm:p-8">
            <span className="text-3xl" aria-hidden="true">☁</span>
            <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950">Join Slack</h2>
            <p className="mt-3 text-base leading-7 text-gray-700">Talk through ideas, share feedback, and connect with other early users.</p>
            <span className="mt-6 inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-500">Invite link coming soon</span>
          </div>
        </div>

        <div className="mt-24 grid gap-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-20">
          <section id="bug-report" className="scroll-mt-28">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">Bug report</p>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] text-gray-950 sm:text-5xl">Tell us what happened.</h2>
              <p className="mt-5 text-lg leading-8 text-gray-700">Send the details directly to the DispatchOS team. Please do not include passwords, API keys, access tokens, or other secrets.</p>
            </div>

            <BugReportForm />
          </section>

          <aside className="h-fit rounded-[28px] border border-[#b7e8d0] bg-[#e6fff5] p-6 sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">Helpful context</p>
            <h2 className="mt-4 text-2xl font-black tracking-[-0.03em] text-gray-950">The faster we can see it, the faster we can fix it.</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-gray-700">
              <li>Include the approximate time of the issue.</li>
              <li>Tell us which post, batch, or channel was involved.</li>
              <li>Add a screenshot if it is safe to share.</li>
              <li>Never include passwords, API keys, access tokens, or other secrets.</li>
            </ul>
          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}