import type { ReactNode } from "react";

/**
 * Long-form article typography. Uses Tailwind arbitrary selectors so a single
 * wrapper styles the whole body without needing a plugin.
 */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className={[
        "max-w-2xl text-lg leading-[1.75] text-ink-soft",
        "[&>*+*]:mt-6",
        "[&_h2]:display [&_h2]:mt-14 [&_h2]:text-[1.9rem] [&_h2]:leading-[1.15] [&_h2]:text-ink",
        "[&_h3]:mt-10 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-ink",
        "[&_h2+p]:mt-5 [&_h3+p]:mt-4",
        "[&_a]:text-teal [&_a]:underline [&_a]:decoration-teal/40 [&_a]:underline-offset-4 hover:[&_a]:decoration-teal",
        "[&_ul]:list-disc [&_ul]:pl-6 [&_ul>li+li]:mt-2",
        "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol>li+li]:mt-2",
        "[&_strong]:text-ink [&_strong]:font-semibold",
        "[&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-sand-deep [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded",
        "[&_blockquote]:border-l-2 [&_blockquote]:border-ochre [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-ink",
        "[&_figure]:my-10",
        "[&_figcaption]:mt-3 [&_figcaption]:text-sm [&_figcaption]:text-ink-muted",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
