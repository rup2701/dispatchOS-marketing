import Image from "next/image";
import Link from "next/link";

const productLinks = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Calendar / Staging', href: '/#calendar' },
  { label: 'Channels', href: '/#auto-sender' },
  { label: 'Pricing', href: '/pricing' },
];


const resources = [
  { label: 'FAQ', href: './#faq' },
  { label: 'Help & Support', href: '/help' },
  { label: 'AEO Audit', href: '/#aeo-audit' },
  { label: 'Security', href: '/security' },
];

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#eefeee]" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Link href="/">
        <Image src="/dispatchOS-logo.svg" alt="DispatchOS Logo" width={132} height={32} className="inline-block  mb-2" />
      </Link>
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-gray-500 md:mb-16">AI drafts → you approve → it ships.</p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Product</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-medium hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-medium hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-900">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-medium hover:text-gray-950">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
            <span>© 2026 DispatchOS</span>
            {/* <a href="#" className="font-medium hover:text-gray-900">Status</a>÷ */}
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-600">
            <a href="https://x.com/SFRupesh" className="font-bold hover:text-gray-900">X</a>
            <a href="https://linkedin.com/in/rp-apps" className="font-bold hover:text-gray-900">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
