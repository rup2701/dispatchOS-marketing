'use client';

import { FormEvent, useState } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function BugReportForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/bug-report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error('Bug report submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 space-y-6 rounded-[28px] border border-[#dfeae3] bg-white/80 p-6 sm:p-8">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

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

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={status === 'sending'} className="inline-flex items-center justify-center rounded-full bg-[#00b377] px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-[#00c885] disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? 'Sending report...' : 'Submit bug report'}
        </button>
        {status === 'success' && <p role="status" className="text-sm font-medium text-[#008d61]">Thanks. Your report was sent to the DispatchOS team.</p>}
        {status === 'error' && <p role="alert" className="text-sm font-medium text-red-700">We could not send your report. Please try again or email support@dispatchos.dev.</p>}
      </div>
    </form>
  );
}
