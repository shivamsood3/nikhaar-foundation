"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "nf-sticky-cta-dismissed";

export function StickyDonateCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        // Reveal after a small delay so it feels earned rather than pushy.
        const t = window.setTimeout(() => setVisible(true), 1200);
        return () => window.clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // no-op
    }
    setVisible(false);
  };

  return (
    <aside
      role="complementary"
      aria-label="Support Nikhaar Foundation"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex justify-center px-4 pb-4 sm:pb-6"
    >
      <div className="pointer-events-auto flex w-full max-w-2xl items-center gap-4 rounded-2xl bg-teal-deep px-5 py-3.5 text-white shadow-[0_18px_48px_-18px_rgba(8,64,59,0.65)] sm:px-6">
        <div className="flex-1 text-sm leading-snug">
          <p className="font-semibold">Fund the work behind this piece.</p>
          <p className="text-white/70">
            80G tax deductible. UPI, NEFT, or CSR partnership.
          </p>
        </div>
        <Link
          href="/support#donate"
          className="shrink-0 rounded-full bg-white px-4 py-2 text-xs font-semibold text-teal-deep transition-colors hover:bg-sand"
        >
          Donate
        </Link>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="shrink-0 rounded-full p-1.5 text-white/60 transition-colors hover:text-white"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden className="h-3.5 w-3.5">
            <path
              d="M3 3l10 10M13 3L3 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}
