import Link from 'next/link';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

export const metadata = {
  title: 'Pricing | DispatchOS',
  description: 'Choose the DispatchOS plan that fits your content workflow.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-lg font-extrabold text-gray-950">DispatchOS</Link>
          <nav className="flex items-center gap-5 text-sm">
            <Link href="/" className="text-gray-600 transition hover:text-gray-950">Home</Link>
            <a href="https://app.dispatchos.com" className="rounded-full bg-[#00b377] px-4 py-2 font-medium text-gray-950 transition hover:bg-[#00c885]">Start for free</a>
          </nav>
        </div>
      </header>
      <Pricing />
      <Footer />
    </main>
  );
}