export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const mark = tone === "light" ? "text-white" : "text-teal";
  const word = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/55" : "text-ink-muted";

  return (
    <span className="flex items-center gap-3">
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={`h-8 w-8 shrink-0 ${mark}`}
      >
        <path
          d="M16 3c5.5 6.2 8.6 10.8 8.6 15A8.6 8.6 0 0 1 16 26.6 8.6 8.6 0 0 1 7.4 18C7.4 13.8 10.5 9.2 16 3Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M16 3c5.5 6.2 8.6 10.8 8.6 15A8.6 8.6 0 0 1 16 26.6 8.6 8.6 0 0 1 7.4 18C7.4 13.8 10.5 9.2 16 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          fill="none"
        />
        <path
          d="M12 18.4a4 4 0 0 0 4 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`display text-[1.35rem] ${word}`}>Nikhaar</span>
        <span className={`eyebrow mt-1 text-[0.6rem] ${sub}`}>Foundation</span>
      </span>
    </span>
  );
}
