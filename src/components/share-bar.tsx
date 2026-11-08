import { CopyButton } from "./copy-button";
import { site } from "@/lib/site";

const Icon = ({ children }: { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
    {children}
  </svg>
);

export function ShareBar({
  title,
  path,
  linkedInIntro,
}: {
  title: string;
  path: string;
  linkedInIntro?: string;
}) {
  const url = `${site.url}${path}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // LinkedIn's share dialog respects the og:title / og:description on the
  // destination URL, so we just pass the link. The copy-intro button below
  // gives users a pre-written sentence to paste into their own post.
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsapp = `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`;
  const x = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=`;
  const emailBody = `I thought this was worth reading.\n\n${title}\n${url}`;
  const email = `mailto:?subject=${encodedTitle}&body=${encodeURIComponent(emailBody)}`;

  const intro =
    linkedInIntro ??
    `${title}. A piece from Nikhaar Foundation, a Delhi based NGO working on water, clean air, and children's welfare. Worth a read if you fund, implement, or think about CSR and philanthropy in India.`;
  const linkedInPost = `${intro}\n\n${url}`;

  const items: { label: string; href: string; svg: React.ReactNode }[] = [
    {
      label: "Share on LinkedIn",
      href: linkedIn,
      svg: (
        <Icon>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </Icon>
      ),
    },
    {
      label: "Share on WhatsApp",
      href: whatsapp,
      svg: (
        <Icon>
          <path
            d="M4 20l1.6-4.3A8 8 0 1 1 9 20l-5 .01Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 10.5c0 2.5 2 4.5 4.5 4.5l1.3-1.3-1.9-.9-.7.7a3 3 0 0 1-1.7-1.7l.7-.7-.9-1.9L9 10.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </Icon>
      ),
    },
    {
      label: "Share on X",
      href: x,
      svg: (
        <Icon>
          <path
            d="M4 4l16 16M20 4L4 20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </Icon>
      ),
    },
    {
      label: "Share by email",
      href: email,
      svg: (
        <Icon>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 7l9 6 9-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </Icon>
      ),
    },
  ];

  return (
    <div className="my-10 flex flex-wrap items-center gap-3 rounded-2xl bg-sand p-4 ring-1 ring-line">
      <span className="eyebrow pl-2 text-ink-muted">Share</span>
      <div className="flex flex-wrap items-center gap-2">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-soft ring-1 ring-line transition-colors hover:text-teal"
          >
            {item.svg}
          </a>
        ))}
        <CopyButton value={url} label="Copy link" />
        <CopyButton value={linkedInPost} label="Copy LinkedIn intro" />
      </div>
    </div>
  );
}
