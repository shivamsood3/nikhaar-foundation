import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { articleLd, breadcrumbLd, faqLd, JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const PUBLISHED = "2026-07-21";

export const metadata: Metadata = pageMeta({
  title:
    "How to fund a high-impact NGO in India | A practical donor's guide",
  description:
    "A donor's guide to choosing a high-impact NGO in India: what 12A, 80G, CSR-1, and FCRA actually mean, how to read an NGO's reporting, what small NGOs do well, and the questions to ask before you send money.",
  path: "/donor-guide",
});

const inlineFaqs = [
  {
    q: "What is an 80G registered NGO?",
    a: "An 80G registered NGO is one that has been certified by the Income Tax Department under Section 80G of the Income Tax Act, 1961. Donations to an 80G registered NGO are eligible for tax deduction in the hands of Indian donors. The certificate carries a URN (Unique Registration Number) that must appear on every 80G receipt issued after April 2021.",
  },
  {
    q: "What is CSR-1 registration and why does it matter?",
    a: "CSR-1 is the registration a nonprofit must obtain from the Ministry of Corporate Affairs before it can receive Corporate Social Responsibility funds under Section 135 of the Companies Act, 2013. Without CSR-1, a company cannot count its contribution to the NGO toward its mandated CSR spending. Nikhaar Foundation's CSR-1 registration number is CSR00107287.",
  },
  {
    q: "What is 12A registration?",
    a: "Section 12A of the Income Tax Act, 1961 exempts a charitable organisation's income from tax. It is the foundational registration for any NGO in India: without 12A, the organisation cannot obtain 80G, and its own income is taxable at slab rates.",
  },
  {
    q: "What is FCRA?",
    a: "The Foreign Contribution (Regulation) Act, 2010 governs whether and how an Indian nonprofit can receive contributions from foreign sources. An NGO must hold FCRA registration or specific prior permission to receive money from a foreign donor. If you are outside India and want to fund an Indian NGO, always ask about FCRA status before transferring.",
  },
  {
    q: "How do I check if an Indian NGO is genuine?",
    a: "Ask for and verify four documents: PAN of the trust or Section 8 company, the 12A registration certificate, the 80G registration certificate carrying a URN, and, for companies giving CSR, the CSR-1 registration. A serious NGO will send these within a working day. If they cannot, that is your answer.",
  },
  {
    q: "How much of a donation actually reaches the ground?",
    a: "There is no universal answer. Large NGOs spend more on fundraising, technology, and salaried staff, which can be a fair price for scale but is often not visible to the donor. Small NGOs run leaner and can point at what your specific rupee bought, but they scale slowly and may lack capacity for complex programmes. Neither is inherently better. Pick the model that fits the outcome you want.",
  },
  {
    q: "What questions should I ask an NGO before donating?",
    a: "Six that separate the serious from the not: (1) show me your 12A, 80G, and CSR-1 certificates; (2) name a specific project you delivered last year, where, and for how many people; (3) tell me who runs the organisation and how they are paid; (4) send me your last audited accounts; (5) if I fund a specific project, will you send a written utilisation report; (6) what will you not claim credit for.",
  },
];

const jsonLdList = [
  articleLd({
    title: "How to fund a high-impact NGO in India: a donor's guide",
    description:
      "A donor's guide to choosing a high-impact NGO in India, covering 12A, 80G, CSR-1, and FCRA, how to read an NGO's reporting, and the questions to ask before you send money.",
    path: "/donor-guide",
    datePublished: PUBLISHED,
  }),
  faqLd(inlineFaqs),
  breadcrumbLd([
    { name: "Home", path: "/" },
    { name: "Donor guide", path: "/donor-guide" },
  ]),
];

const sections = [
  {
    n: "01",
    id: "what-high-impact-means",
    title: "What high impact actually means, and what it does not",
    body: (
      <>
        <p>
          Impact is one of the most abused words in the nonprofit sector. A campaign
          that reached ten million phones has not necessarily reached ten million
          people. A programme that ran in fifty districts has not necessarily changed
          anything in any of them. Numbers of this kind are cheap to produce and
          almost impossible to verify.
        </p>
        <p>
          A useful definition of high impact for a donor is much narrower: a named
          intervention, in a named place, that produced a countable change in the
          lives of a countable set of people, and that would not have happened without
          the NGO's involvement. Everything else, however sincerely felt, is
          storytelling.
        </p>
        <p>
          The reason to insist on this narrower definition is not cynicism. It is
          that the moment an NGO is allowed to claim credit for outcomes it did not
          measure, the incentive structure of the whole sector shifts toward
          performance rather than delivery. You, the donor, are one of the few people
          in a position to hold that line.
        </p>
      </>
    ),
  },
  {
    n: "02",
    id: "registrations-explained",
    title: "Registrations that matter: 12A, 80G, CSR-1, FCRA",
    body: (
      <>
        <p>
          Four registrations do most of the work of establishing an Indian NGO's
          legitimacy. They are worth knowing by name.
        </p>
        <p>
          <strong>Section 12A</strong> of the Income Tax Act, 1961, exempts the
          organisation's own income from tax and formally recognises it as a
          charitable entity. Without 12A, an NGO cannot obtain 80G, and its receipts
          are taxable.
        </p>
        <p>
          <strong>Section 80G</strong> makes donations to the NGO tax deductible for
          Indian donors. The 80G certificate carries a URN, a sixteen character code
          that must appear on the receipt for the deduction to be claimed. Any NGO
          that cannot produce its 80G URN should not be issuing receipts.
        </p>
        <p>
          <strong>CSR-1</strong> is the registration that a nonprofit must obtain from
          the Ministry of Corporate Affairs before a company can route its mandated
          Corporate Social Responsibility spending to it under Section 135 of the
          Companies Act, 2013. If you are a CSR head, CSR-1 is non-negotiable.
        </p>
        <p>
          <strong>FCRA</strong>, the Foreign Contribution (Regulation) Act, 2010,
          governs whether the NGO can accept contributions from outside India. It is
          a separate registration with its own compliance burden. If you are giving
          in Indian rupees from India, FCRA is not required at your end. If you are
          giving from abroad, it is the first question to ask.
        </p>
      </>
    ),
  },
  {
    n: "03",
    id: "reading-reporting",
    title: "How to read an NGO's reporting",
    body: (
      <>
        <p>
          The typical impact report leans on three levers to make its numbers look
          bigger: aggregating across time and geography, converting activity into
          outcome, and counting reach as impact. All three are common and none is
          illegal. The donor's job is to notice them.
        </p>
        <p>
          <strong>Aggregation.</strong> A number like "10,000 people served" over a
          decade across four states means something very different from 10,000 people
          served in one settlement in one year. Ask for the denominator and the time
          window.
        </p>
        <p>
          <strong>Activity converted into outcome.</strong> "Distributed a thousand
          books" is an activity. "Raised literacy in the settlement" is an outcome
          that requires measurement the NGO probably did not do. A serious NGO
          reports the activity and, separately, whatever it actually measured of the
          outcome.
        </p>
        <p>
          <strong>Reach counted as impact.</strong> Impressions on a social media
          campaign are reach. Behavior change is impact. If the report cannot
          distinguish the two, treat it as a communications output rather than a
          programme output.
        </p>
        <p>
          None of this is a reason not to give. It is a reason to give to the NGOs
          that report conservatively, and to reward that behavior by continuing to
          fund them.
        </p>
      </>
    ),
  },
  {
    n: "04",
    id: "small-vs-large",
    title: "When to choose a small NGO over a large one",
    body: (
      <>
        <p>
          Large NGOs have real advantages: geographic reach, professional
          administration, monitoring capacity, and the ability to absorb a large
          contribution without distortion. They are the right answer for donors who
          want to fund a proven programme at scale and are comfortable with the
          overhead that scale requires.
        </p>
        <p>
          Small NGOs have a different set of advantages, and they are advantages that
          most donors underweight. The distance between the money and the ground is
          shorter. The overhead ratio is genuinely lower. The specific rupee you sent
          is traceable to a specific piece of work. And because a small organisation
          cannot spend its way out of a delivery failure, its incentives are aligned
          with actually delivering.
        </p>
        <p>
          The right question is not size, it is fit. If you want your contribution
          to fund a bounded intervention in a specific community and to be able to
          point at what it paid for, a small NGO is usually the better answer. If you
          want to fund a national programme with a research arm and a monitoring
          team, it is not.
        </p>
      </>
    ),
  },
  {
    n: "05",
    id: "questions-to-ask",
    title: "Six questions to ask before you send money",
    body: (
      <>
        <ol className="list-decimal space-y-3 pl-6 marker:font-semibold marker:text-teal">
          <li>Show me the 12A, 80G, and CSR-1 certificates, and your PAN.</li>
          <li>
            Name a project you delivered in the last year, where, for how many
            people, and what it cost.
          </li>
          <li>Who runs the organisation, and how are they paid?</li>
          <li>Send me the last audited accounts.</li>
          <li>
            If I fund a specific project, will you send a written utilisation report
            when it is finished?
          </li>
          <li>What outcomes will you not claim credit for?</li>
        </ol>
        <p>
          A serious NGO will answer all six within a working day. The sixth question
          is the diagnostic one. An organisation that cannot name something it would
          not claim credit for is claiming credit for everything.
        </p>
      </>
    ),
  },
  {
    n: "06",
    id: "where-nikhaar-fits",
    title: "Where Nikhaar Foundation fits in this picture",
    body: (
      <>
        <p>
          Nikhaar Foundation is one small NGO among many working in Delhi. We are
          registered under 12A and 80G of the Income Tax Act, and we hold CSR-1
          registration with the Ministry of Corporate Affairs under number
          CSR00107287. Our work is water conservation and access, children's
          education and welfare, clean air, and civic awareness, in Delhi's
          underserved neighbourhoods.
        </p>
        <p>
          We meet the criteria in this guide because we hold ourselves to them. Our
          clearest deliverable to date is a community water pump we funded, installed,
          and handed over to residents of Indira Gandhi Camp in Kasturba Nagar,
          giving roughly 3,000 people water at their doorstep. That is a bounded
          intervention in a named place, and we can tell you exactly what it cost.
        </p>
        <p>
          If that is close to what you want your giving to do, our{" "}
          <Link href="/support" className="text-teal underline underline-offset-4">
            support page
          </Link>{" "}
          has the bank and UPI details, and{" "}
          <Link href="/impact" className="text-teal underline underline-offset-4">
            the impact page
          </Link>{" "}
          has the case study in full. If it is not, the guide above should still be
          useful in choosing the NGO that fits.
        </p>
      </>
    ),
  },
];

export default function DonorGuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Donor's guide"
        title="How to fund a high-impact NGO in India."
        lead="A practical guide for individual donors and CSR teams. What the important registrations mean, how to read an NGO's reporting, when small beats large, and the six questions to ask before you send money."
      />

      {/* TOC */}
      <section className="border-b border-line bg-white">
        <Container className="py-12 lg:py-14">
          <Eyebrow>What this guide covers</Eyebrow>
          <ol className="mt-6 grid gap-3 sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-start gap-4 rounded-xl p-3 text-ink-soft transition-colors hover:bg-sand hover:text-ink"
                >
                  <span className="display shrink-0 text-teal">{s.n}</span>
                  <span className="text-base font-medium text-ink">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Sections */}
      {sections.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 border-b border-line ${i % 2 === 1 ? "bg-white" : ""}`}
        >
          <Container className="py-20 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_2.25fr] lg:gap-14">
              <div>
                <p className="display text-3xl text-ochre">{s.n}</p>
                <p className="eyebrow mt-4 text-ink-muted">Section {s.n}</p>
              </div>
              <div>
                <h2 className="display text-3xl sm:text-4xl">{s.title}</h2>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink-soft">
                  {s.body}
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-teal-deep text-white">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <SectionHeading
              tone="light"
              eyebrow="Applying this to Nikhaar"
              title="Answers to the six questions above, in one place."
              lead="Our FAQ page walks through registrations, transparency, and reporting the same way the guide does. Read it before you decide."
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Button href="/faq" variant="ghost">
                Read the FAQ <Arrow />
              </Button>
              <Button href={`mailto:${site.email}`} variant="ghost">
                Ask us directly
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {jsonLdList.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
