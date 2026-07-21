import type { Metadata } from "next";
import { Arrow, Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { DonationDetails } from "@/components/donation-details";
import { compliance, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support Our Work",
  description:
    "Donate to Nikhaar Foundation with 80G tax benefit, or route your company’s CSR spending to our water, clean air, and children’s programmes under CSR-1.",
};

/**
 * Set `amount` on any of these once the costings are confirmed, for example
 * amount: "₹25,000". Leave it undefined to show the tier without a price.
 */
const uses: { title: string; amount?: string; body: string }[] = [
  {
    title: "A community water pump",
    body: "Funds the survey, the pump, the installation, and the handover to residents. This is the single highest leverage thing we do, and it is what put water at the doorstep of 3,000 people in Kasturba Nagar.",
  },
  {
    title: "A children’s education and welfare drive",
    body: "Learning materials, a venue, volunteers, and refreshments for a day of structured work with children from a settlement, plus the follow up that keeps it from being a one-off.",
  },
  {
    title: "A clean air or cleanliness campaign",
    body: "Design, printing, permissions, and on-ground volunteers for a neighbourhood campaign like #MyRightToBreathe, our cracker-free Diwali drive run with the Delhi Police.",
  },
  {
    title: "A competition for young talent",
    body: "Materials, prizes, and coordination for an event like our painting competition, which gives children from underserved bastis a stage and a record of having won something.",
  },
];

const faqs = [
  {
    q: "Is my donation tax deductible?",
    a: "Yes. Nikhaar Foundation is registered under Section 80G of the Income Tax Act, 1961, so donations from Indian taxpayers are eligible for deduction. We issue a receipt for every contribution.",
  },
  {
    q: "Can our company route CSR funds to Nikhaar Foundation?",
    a: `Yes. We hold CSR-1 registration with the Ministry of Corporate Affairs, registration number ${site.csrNumber}. We can supply the registration certificate, PAN, 12A and 80G certificates, and a project proposal for your CSR committee.`,
  },
  {
    q: "How do I know where the money went?",
    a: "Ask us and we will tell you, in writing, which programme and which neighbourhood your contribution funded. We work in named places on named problems, so this is a short conversation rather than a research project.",
  },
  {
    q: "Can I fund one specific project rather than the foundation generally?",
    a: "Yes, and we prefer it for larger contributions. Tell us which of our four programmes interests you and the scale you are considering, and we will come back with a costed proposal for a specific piece of work.",
  },
  {
    q: "Do you accept foreign contributions?",
    a: "Please write to us before making a contribution from outside India so we can confirm the correct route under current regulations.",
  },
  {
    q: "Can I help without donating?",
    a: "Yes. We need volunteers on drive days, professional help with design, legal, and accounting, and introductions to CSR teams. Any of those is genuinely useful.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support our work"
        title="Give once, give regularly, or route your company’s CSR here."
        lead="Nikhaar Foundation is 12A and 80G registered and holds CSR-1 registration. Individual donations carry a tax benefit, companies can meet their CSR obligation through us, and both are told exactly where the money went."
      />

      {/* Two paths */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col rounded-2xl bg-sand p-8 ring-1 ring-line lg:p-10">
              <Eyebrow>For individuals</Eyebrow>
              <h2 className="display mt-4 text-3xl">Make a donation</h2>
              <p className="mt-5 flex-1 leading-relaxed text-ink-soft">
                Any amount is useful, and regular giving is more useful still, because
                it lets us commit to work before the money is in hand. Every donation
                is receipted and eligible for deduction under Section 80G.
              </p>
              <p className="mt-5 leading-relaxed text-ink-soft">
                Bank transfer, UPI, and full 80G receipting details are just below.
              </p>
              <div className="mt-8">
                <Button href="#donate">
                  Donate now <Arrow />
                </Button>
              </div>
            </div>

            <div
              id="csr"
              className="flex scroll-mt-24 flex-col rounded-2xl bg-teal-deep p-8 text-white lg:p-10"
            >
              <Eyebrow tone="light">For companies</Eyebrow>
              <h2 className="display mt-4 text-3xl text-white">
                CSR partnerships
              </h2>
              <p className="mt-5 flex-1 leading-relaxed text-white/70">
                We are CSR-1 registered under {site.csrNumber}, which means your
                company can count contributions to Nikhaar Foundation toward its
                mandated CSR spending under Section 135 of the Companies Act.
              </p>
              <p className="mt-5 leading-relaxed text-white/70">
                We will provide a costed project proposal, all statutory documents for
                your CSR committee, and a written utilisation report at the end.
              </p>
              <div className="mt-8">
                <Button
                  href={`mailto:${site.email}?subject=CSR%20partnership%20enquiry`}
                  variant="ghost"
                >
                  Discuss a partnership <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Donation details */}
      <DonationDetails />

      {/* What funding buys */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Where the money goes"
            title="What a contribution to Nikhaar actually buys."
            lead="We are a lean operation. There is very little between a donation arriving and it turning into work on a street in Delhi."
          />
          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {uses.map((use) => (
              <div key={use.title} className="border-t border-line pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-lg font-semibold text-ink">{use.title}</h3>
                  {use.amount ? (
                    <span className="display text-xl text-teal">{use.amount}</span>
                  ) : null}
                </div>
                <p className="mt-3 leading-relaxed text-ink-soft">{use.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-sm leading-relaxed text-ink-muted">
            For a costed breakdown of any of the above, including materials, labour,
            and the number of people served, write to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-teal underline underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        </Container>
      </section>

      {/* Compliance strip */}
      <section className="border-b border-line bg-white">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            {compliance.map((c) => (
              <div key={c.label}>
                <p className="display text-2xl text-teal">{c.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-sand-deep/50">
        <Container className="py-20 lg:py-28">
          <SectionHeading eyebrow="Questions" title="Before you give." />
          <div className="mt-14 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-ink marker:content-['']">
                  {f.q}
                  <span
                    className="mt-1.5 shrink-0 text-teal transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                      <path
                        d="M8 3v10M3 8h10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
