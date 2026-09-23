import Image from "next/image";

const productLinks = [
  { label: 'How it works', href: '#features' },
  { label: 'Calendar / Staging', href: '#features' },
  { label: 'Channels', href: '#features' },
  { label: 'Roadmap', href: '/pricing' },
];


const resources = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Changelog', href: '#features' },
  { label: 'AEO Audit', href: '#features' },
];

const companyLinks = [
  { label: 'About', href: '#features' },
  { label: 'Contact', href: '#features' },
  { label: 'Login', href: 'https://app.dispatchos.com' },
  { label: 'Pricing', href: '/pricing' },
];

export default function Footer() {
  return (
    <footer className="bg-[#eefeee]" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Image src="/dispatchOS-logo.svg" alt="DispatchOS Logo" width={132} height={32} className="inline-block  mb-2" />
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500">AI drafts → you approve → it ships.</p>
        <div className=" hidden rounded-2xl border border-gray-200 bg-gray-50/60 px-4 py-4 sm:px-6">
          <div className=" flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <a
                href="https://app.dispatchos.com"
                className="inline-flex items-center justify-center rounded-full bg-[#00b377] px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-[#00c885]"
              >
                Generate my first week
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <span>© 2026 DispatchOS</span>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Security</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="https://x.com" className="hover:text-gray-900">X</a>
            <a href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
