export default function FinalCta() {
  return (
    <section className="mx-auto w-[90vw] max-w-[1600px] px-4 py-24 sm:w-[80vw] sm:px-6 lg:px-8">
      <div className="rounded-[28px] border border-[#b7e8d0]  px-6 py-10 text-center text-gray-950 sm:px-10 lg:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#008d61]">
          Start shipping content
        </p>

        <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-4xl">
          Stop staring at a blank calendar.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-700 sm:text-md">
          DispatchOS turns your product into a steady stream of ready-to-review posts, so you can keep shipping without turning marketing into a second job.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full bg-[#00b377] px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#00c885]"
          >
            Get started
          </a>
          <a
            href="https://app.dispatchos.dev/login"
            className="inline-flex items-center justify-center rounded-full border border-[#00b377] bg-[#e6fff5] px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-[#d6fbea]"
          >
            Sign in
          </a>
        </div>
      </div>
    </section>
  );
}
