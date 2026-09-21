export default function FinalCta() {
  return (
    <section className="mx-auto w-[90vw] max-w-[1600px] px-4 py-24 sm:w-[80vw] sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-gray-900 bg-gray-950 px-6 py-10 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:px-10 lg:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7ef5c3]">
          // start shipping content
        </p>

        <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
          Stop staring at a blank calendar.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-300 sm:text-md">
          DispatchOS turns your product into a steady stream of ready-to-review posts, so you can keep shipping without turning marketing into a second job.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://app.dispatchos.com"
            className="inline-flex items-center justify-center rounded-full bg-[#00b377] px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#00c885]"
          >
            Start for free
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
