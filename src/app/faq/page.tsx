import type { Metadata } from "next";
import { Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { breadcrumbLd, faqLd, JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title:
    "Nikhaar Foundation FAQ | 80G, CSR-1, transparency and how donations work",
  description:
    "Answers to the questions donors, CSR teams, and grant makers ask about Nikhaar Foundation: 12A and 80G registration, CSR-1 eligibility, how funds are tracked, what our programmes cost, and how we report impact.",
  path: "/faq",
});

const groups: { heading: string; note?: string; faqs: { q: string; a: string }[] }[] = [
  {
    heading: "About the organisation",
    faqs: [
      {
        q: "What is Nikhaar Foundation?",
        a: "Nikhaar Foundation is a nonprofit organisation based in Delhi, India, working on water conservation, clean air, and the education and welfare of children in the city's underserved neighbourhoods. It was founded by Shivam Sood.",
      },
      {
        q: "Where does Nikhaar Foundation work?",
        a: "Delhi. Our programmes have run in settlements including Indira Gandhi Camp in Kasturba Nagar, with campaigns run in association with the Delhi Police.",
      },
      {
        q: "Is Nikhaar Foundation a registered NGO in India?",
        a: `Yes. Nikhaar Foundation is registered under Section 12A of the Income Tax Act, 1961, which confirms its charitable status; under Section 80G, which makes donations tax deductible for Indian donors; and under CSR-1 with the Ministry of Corporate Affairs, registration number ${site.csrNumber}, which lets companies route mandated CSR spending to us.`,
      },
      {
        q: "Who founded Nikhaar Foundation?",
        a: "Nikhaar Foundation was founded by Shivam Sood, who continues to serve as its founder and is directly reachable for anyone considering funding the work.",
      },
    ],
  },
  {
    heading: "Donations and 80G",
    faqs: [
      {
        q: "Can I claim a tax deduction on my donation?",
        a: `Yes. Nikhaar Foundation is registered under Section 80G of the Income Tax Act, 1961, so donations from Indian taxpayers are eligible for deduction. Our 80G URN is ${site.urn80g} and our PAN is ${site.pan}, both of which appear on the receipt.`,
      },
      {
        q: "How do I donate?",
        a: `The fastest way is UPI to ${site.email.replace("@", " at ")} or, more usefully, to the UPI ID published on our support page. You can also transfer by NEFT or IMPS to our IndusInd Bank current account. Both routes are listed at /support with copy buttons for the account number and IFSC.`,
      },
      {
        q: "How do I receive my 80G receipt?",
        a: `Email the transaction reference and your full name, PAN, and address to ${site.email} after paying. We issue a digitally signed 80G receipt, usually within two working days, carrying our 80G URN ${site.urn80g}.`,
      },
      {
        q: "Can I set up a recurring donation?",
        a: "Yes, and we prefer it. Regular giving lets us commit to work before the money is in hand. Set up a UPI mandate or a bank standing instruction and email us so we can issue receipts on schedule.",
      },
      {
        q: "Can I fund a specific project rather than the foundation generally?",
        a: "Yes, and we prefer it for larger contributions. Tell us which of our four programmes interests you and the scale you are considering, and we will come back with a costed proposal for a specific piece of work in a specific settlement.",
      },
      {
        q: "Do you accept foreign contributions?",
        a: "Please write to us before making a contribution from outside India so we can confirm the correct route under current regulations.",
      },
    ],
  },
  {
    heading: "CSR partnerships",
    faqs: [
      {
        q: "Is Nikhaar Foundation CSR eligible?",
        a: `Yes. We hold CSR-1 registration with the Ministry of Corporate Affairs, registration number ${site.csrNumber}. Contributions from a qualifying company count toward the mandated CSR spending under Section 135 of the Companies Act, 2013.`,
      },
      {
        q: "What documents will you provide for our CSR committee?",
        a: "The registration certificate under CSR-1, PAN, the 12A and 80G certificates, an organisation profile, a costed project proposal, and, after implementation, a written utilisation report. We can also provide bank details, audited financials, and copies of past project reports on request.",
      },
      {
        q: "What is the minimum CSR contribution you accept?",
        a: "We do not set a hard minimum. We do think in terms of specific deliverables, so we would rather have a conversation about a scoped project than about a number in the abstract.",
      },
      {
        q: "How do you report on CSR utilisation?",
        a: "We report the intervention we delivered, where, and for how many people. Photographs are from the work itself. We do not extrapolate outputs into speculative outcomes.",
      },
    ],
  },
  {
    heading: "Programmes and impact",
    faqs: [
      {
        q: "What does Nikhaar Foundation do?",
        a: "Four things: water conservation and access, children's education and welfare, clean air and environment, and civic awareness campaigns. All of them are run in Delhi's underserved neighbourhoods.",
      },
      {
        q: "What has Nikhaar Foundation actually delivered?",
        a: "Our clearest deliverable to date is a community water pump funded, installed, and handed over to residents of Indira Gandhi Camp in Kasturba Nagar, giving roughly 3,000 people water at their doorstep. Full case study at /impact.",
      },
      {
        q: "How does Nikhaar Foundation measure impact?",
        a: "We count named beneficiaries in named places where we can, and where we cannot, we report the intervention rather than converting activity into a larger sounding number. We do not extrapolate a physical intervention into speculative downstream outcomes we did not measure.",
      },
      {
        q: "Why should a donor pick a small NGO like Nikhaar over a large one?",
        a: "Not because small is inherently better. Small is useful when it means the distance between your contribution and the ground is short, the overhead is low, and you can be told exactly what your money paid for. Nikhaar is deliberately small for those reasons.",
      },
    ],
  },
  {
    heading: "Transparency and governance",
    faqs: [
      {
        q: "Can I see Nikhaar Foundation's registration certificates?",
        a: `Yes. Copies of the 12A, 80G, and CSR-1 certificates, PAN, and audited accounts are available on request. Write to ${site.email} and we will send them.`,
      },
      {
        q: "How is Nikhaar Foundation funded?",
        a: "Through a combination of individual donations from Indian taxpayers claiming Section 80G deduction and, where scoped project proposals fit, corporate CSR contributions under CSR-1.",
      },
      {
        q: "How can I help without donating?",
        a: "Volunteers on drive days are always useful. Professional help with design, legal, and accounting is genuinely useful. Introductions to CSR teams are the most useful of all.",
      },
    ],
  },
];

const allFaqs = groups.flatMap((g) => g.faqs);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently asked questions"
        title="What donors, CSR teams, and grant makers ask us."
        lead="A single page of straight answers about how we are registered, how donations work, how we report, and how our programmes actually run."
      />

      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-24">
          <div className="space-y-16">
            {groups.map((group) => (
              <div key={group.heading}>
                <Eyebrow>{group.heading}</Eyebrow>
                <SectionHeading title={group.heading} />
                <div className="mt-10 divide-y divide-line border-y border-line">
                  {group.faqs.map((f) => (
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
                      <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <JsonLd data={faqLd(allFaqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
    </>
  );
}
