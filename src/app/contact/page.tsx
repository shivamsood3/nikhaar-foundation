import type { Metadata } from "next";
import { Container, Eyebrow, PageHero } from "@/components/ui";
import { site } from "@/lib/site";

import { breadcrumbLd, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Contact Nikhaar Foundation | Delhi NGO for donations and CSR",
  description:
    "Contact Nikhaar Foundation about donations with 80G tax deduction, CSR-1 partnerships under CSR00107287, volunteering, or press. Email info@nikhaarfoundation.org.",
  path: "/contact",
});

const routes = [
  {
    label: "Donations and 80G receipts",
    body: "For bank and UPI details, receipts, or anything to do with an individual contribution.",
    subject: "Donation enquiry",
  },
  {
    label: "CSR partnerships",
    body: `For statutory documents, project proposals, and utilisation reporting. Our CSR registration number is ${site.csrNumber}.`,
    subject: "CSR partnership enquiry",
  },
  {
    label: "Volunteering",
    body: "For drive days on the ground, and for professional help with design, legal, and accounting.",
    subject: "Volunteering with Nikhaar",
  },
  {
    label: "Press and media",
    body: "For interviews, photographs from our campaigns, and background on the work.",
    subject: "Media enquiry",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us directly."
        lead="We are small, so your message reaches a person rather than a queue. Write to us and you will hear back."
      />

      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div>
              <Eyebrow>Reach us</Eyebrow>
              <a
                href={`mailto:${site.email}`}
                className="display mt-5 block text-2xl text-ink underline decoration-line underline-offset-8 transition-colors hover:text-teal sm:text-3xl"
              >
                {site.email}
              </a>
              <p className="mt-6 max-w-md leading-relaxed text-ink-soft">
                Email is the fastest way to get a considered reply. For day to day
                updates from our drives and campaigns, Instagram is where we post
                first.
              </p>

              <div className="mt-10 space-y-4">
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl bg-sand p-5 ring-1 ring-line transition-colors hover:bg-sand-deep"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-teal"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  <span>
                    <span className="block text-sm font-semibold text-ink">
                      Instagram
                    </span>
                    <span className="block text-sm text-ink-muted">
                      {site.instagramHandle}
                    </span>
                  </span>
                </a>

                <div className="rounded-xl bg-sand p-5 ring-1 ring-line">
                  <p className="text-sm font-semibold text-ink">Registered status</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Registered under Section 12A and Section 80G of the Income Tax
                    Act, 1961. CSR Registration Number {site.csrNumber}, Ministry of
                    Corporate Affairs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Eyebrow>What are you writing about</Eyebrow>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {routes.map((route) => (
                  <a
                    key={route.label}
                    href={`mailto:${site.email}?subject=${encodeURIComponent(route.subject)}`}
                    className="group flex items-start justify-between gap-6 py-6 transition-colors hover:bg-sand/60"
                  >
                    <span>
                      <span className="block text-lg font-medium text-ink">
                        {route.label}
                      </span>
                      <span className="mt-2 block max-w-md leading-relaxed text-ink-soft">
                        {route.body}
                      </span>
                    </span>
                    <span className="mt-2 shrink-0 text-teal transition-transform duration-200 group-hover:translate-x-1">
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4">
                        <path
                          d="M3 8h10m0 0-4-4m4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
