const tiers = [
  {
    name: 'Starter',
    price: '$29/mo',
    description: 'For solo founders who want a weekly calendar on autopilot.',
    features: [
      '1 product/workspace',
      'Weekly generation + calendar staging',
      'Review/edit/queue/hold/drop',
      'Auto-publish (or manual mode)',
      'Basic analytics',
    ],
    uploads: '1 upload / month (Phase 2)',
    cta: 'Start Starter',
    microcopy: 'Cancel anytime.',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$59/mo',
    description: 'For builders shipping weekly who want the full feedback loop.',
    features: [
      'Everything in Starter',
      'Up to 3 products/workspaces',
      'Engagement feedback loop (Phase 2)',
      'Better repurposing (threads / variants)',
      'Higher generation limits',
    ],
    uploads: '10 uploads / month (Phase 2)',
    cta: 'Go Pro',
    microcopy: 'Best for serious build-in-public.',
    popular: true,
  },
  {
    name: 'Agency',
    price: '$129/mo',
    description: 'For operators managing multiple brands.',
    features: [
      'Everything in Pro',
      '5+ products/workspaces',
      'Team seats + shared calendar (Phase 3)',
      'Priority support',
    ],
    uploads: 'Unlimited (Phase 2)',
    cta: 'Start Agency',
    microcopy: 'Built for multi-brand workflows.',
    popular: false,
  },
];

const comparisonRows = [
  ['Live Monday–Friday calendar', 'Yes', 'Yes', 'Yes'],
  ['Weekly content generation', 'Yes', 'Higher limits', 'Highest limits'],
  ['Per-post editing', 'Yes', 'Yes', 'Yes'],
  ['Hold, drop, and queue controls', 'Yes', 'Yes', 'Yes'],
  ['Multi-channel publishing', 'Yes', 'Yes', 'Yes'],
  ['Analytics feedback loop', 'Yes', 'Yes', 'Yes'],
  ['Products/workspaces', '1', '3', '5'],
  ['Threads and variants', 'Basic', 'Included', 'Included'],
  ['Source uploads', 'Later-defined', '10/month', 'Higher limit'],
];

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-5xl">
          Pricing that feels like a cheat code.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Less than a dollar a day to never think about content again.
        </p>
        <p className="mt-3 text-sm font-medium text-[#00b377]">First 100 users get $29/mo forever.</p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex h-full flex-col rounded-3xl border p-6 shadow-sm transition ${
              tier.popular
                ? 'border-[#00b377] bg-[#e6fff5] text-gray-950 shadow-lg shadow-[#00b377]/10'
                : 'border-gray-200 bg-white text-gray-900'
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl font-bold">{tier.name}</h3>
              {tier.popular && (
                <span className="rounded-full bg-[#00b377] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-950">
                  Most popular
                </span>
              )}
            </div>

            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-black tracking-tight">{tier.price}</span>
            </div>

            <p className="mt-5 text-base leading-7 text-gray-600">
              {tier.description}
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gray-500">
                Includes
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#00b377]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white/70 px-4 py-3 text-sm text-gray-700">
              <span className="font-semibold">RAG / uploads:</span> {tier.uploads}
            </div>

            <div className="mt-auto pt-8">
              <button
                type="button"
                className="w-full rounded-full bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                {tier.cta}
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                {tier.microcopy}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            See what each plan unlocks.
          </h2>
          <p className="mt-3 text-base text-gray-600">
            A quick view of the workflow and limits included at every level.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead className="bg-[#eefeee] text-gray-950">
              <tr>
                <th scope="col" className="px-5 py-4 font-semibold">Capability</th>
                <th scope="col" className="px-5 py-4 font-semibold">Starter</th>
                <th scope="col" className="px-5 py-4 font-semibold">Pro</th>
                <th scope="col" className="px-5 py-4 font-semibold">Agency</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              {comparisonRows.map(([capability, starter, pro, agency]) => (
                <tr key={capability}>
                  <th scope="row" className="px-5 py-4 font-medium text-gray-950">{capability}</th>
                  <td className="px-5 py-4">{starter}</td>
                  <td className="px-5 py-4">{pro}</td>
                  <td className="px-5 py-4">{agency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
