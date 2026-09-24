import Footer from '@/components/Footer';
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
              <p className="mt-5 text-lg leading-8 text-gray-700">The form opens your email client with the details you provide. Please do not include passwords, API keys, access tokens, or other secrets.</p>
            </div>

            <form action={`mailto:${supportEmail}`} method="post" encType="text/plain" className="mt-10 space-y-6 rounded-[28px] border border-[#dfeae3] bg-white/80 p-6 sm:p-8">
              <input type="hidden" name="subject" value="DispatchOS bug report" />

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-900">
                  Your email
                  <input required type="email" name="email" placeholder="you@example.com" className="rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition focus:border-[#00b377] focus:ring-2 focus:ring-[#00b377]/20" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-gray-900">
                  Where did it happen?
                  <input required type="text" name="area" placeholder="Calendar, Settings, publishing..." className="rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal text-gray-900 outline-none transition focus:border-[#00b377] focus:ring-2 focus:ring-[#00b377]/20" />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-semibold text-gray-900">
                What happened?
                <textarea required name="description" rows={5} placeholder="Describe the issue and what you expected to happen." className="resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal leading-7 text-gray-900 outline-none transition focus:border-[#00b377] focus:ring-2 focus:ring-[#00b377]/20" />
              </label>

              <div className="grid gap-6 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-900">
                  Steps to reproduce
                  <textarea name="steps" rows={4} placeholder="1. Open...&#10;2. Click...&#10;3. See..." className="resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal leading-7 text-gray-900 outline-none transition focus:border-[#00b377] focus:ring-2 focus:ring-[#00b377]/20" />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-gray-900">
                  Browser or device
                  <textarea name="environment" rows={4} placeholder="Chrome on macOS, Safari on iPhone..." className="resize-y rounded-xl border border-gray-300 bg-white px-4 py-3 font-normal leading-7 text-gray-900 outline-none transition focus:border-[#00b377] focus:ring-2 focus:ring-[#00b377]/20" />
                </label>
              </div>

              <button type="submit" className="inline-flex items-center justify-center rounded-full bg-[#00b377] px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#00c885]">
                Open email draft
              </button>
            </form>
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