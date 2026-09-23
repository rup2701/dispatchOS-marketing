import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';
import TopNav from '@/components/TopNav';

export const metadata = {
  title: 'Pricing | DispatchOS',
  description: 'Choose the DispatchOS plan that fits your content workflow.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#f0fffa]">
      <TopNav />
      <Pricing />
      <Footer />
    </main>
  );
}