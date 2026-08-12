import type { Metadata } from "next";
import Image from "next/image";
import {
  Arrow,
  Button,
  Container,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/ui";
import { breadcrumbLd, faqLd, JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title:
    "CSR Partner NGO in Delhi | CSR-1 registered under Section 135, CSR00107287",
  description:
    "Route your company's mandated CSR spending under Section 135 of the Companies Act to Nikhaar Foundation, a CSR-1 registered NGO in Delhi (CSR00107287) working on water conservation, clean air, and children's welfare across Schedule VII activities.",
  path: "/csr",
});

const scheduleVii = [
  {
    clause: "Schedule VII (i)",
    label: "Eradicating hunger, promoting healthcare and sanitation, safe drinking water",
    match:
      "Our water conservation and access programme, including the community water pump serving 3,000 people in Kasturba Nagar, is a direct fit.",
  },
  {
    clause: "Schedule VII (ii)",
    label: "Promoting education, including special education",
    match:
      "Our children's education and welfare drives in Delhi's underserved bastis are eligible under this clause.",
  },
  {
    clause: "Schedule VII (iv)",
    label:
      "Ensuring environmental sustainability, ecological balance, conservation of natural resources and quality of air, water and soil",
    match:
      "Our clean air, cracker-free Diwali, and neighbourhood cleanliness campaigns route cleanly under this clause.",
  },
];

const whyNikhaar = [
  {
    title: "CSR-1 registered under the Ministry of Corporate Affairs",
    body: `Our CSR registration number is ${site.csrNumber}. Your CSR committee can verify this in seconds on the MCA portal, and contributions count toward your obligation under Section 135 of the Companies Act, 2013.`,
  },
  {
    title: "12A and 80G under the Income Tax Act, 1961",
    body: `PAN ${site.pan}. 80G URN ${site.urn80g}. All standard documentation for your finance and compliance teams is on file and available on request.`,
  },
  {
    title: "Small enough to be visible, structured enough to be safe",
    body: "You will not be one line item in an aggregated report. We work on named problems in named neighbourhoods, and can point to the specific settlement your contribution reached.",
  },
  {
    title: "Institutional partnerships you can reference",
    body: "Our clean air and children's programmes have been run in association with the Delhi Police, which gives the work reach, accountability, and easy verification for your CSR committee.",
  },
];

const documentation = [
  "CSR-1 registration certificate issued by the Ministry of Corporate Affairs",
  "Section 12A registration certificate under the Income Tax Act, 1961",
  "Section 80G registration certificate with the 16 digit Unique Registration Number",
  "PAN of the foundation",
  "Cancelled cheque and bank account details for CSR fund transfer",
  "Organisation profile with governance, leadership, and past project photographs",
  "Costed project proposal tailored to your CSR focus area",
  "Draft Memorandum of Understanding for CSR project implementation",
  "Utilisation report and photographs at project completion",
];

const process = [
  {
    step: "01",
    head: "Introduction call",
    body: "A 30 minute conversation about your CSR focus, budget cycle, and reporting expectations. We come back with two or three scoped project options in the areas that best fit your Schedule VII commitments.",
  },
  {
    step: "02",
    head: "Project selection and MoU",
    body: "You pick a project. We share a costed proposal, timeline, and beneficiary estimate. Once your CSR committee signs off, we execute an MoU and share every statutory document your finance team needs.",
  },
  {
    step: "03",
    head: "Implementation",
    body: "We deliver the work on the ground in Delhi, share progress photographs from the actual drives and installations, and are available for site visits by your CSR team.",
  },
  {
    step: "04",
    head: "Utilisation report",
    body: "A written utilisation report at the end of the project, in the format your Company Secretary needs for the Annual Report on CSR, along with photographs and beneficiary numbers.",
  },
];

const faqs = [
  {
    q: "Is Nikhaar Foundation eligible to receive CSR funds under Section 135 of the Companies Act?",
    a: `Yes. Nikhaar Foundation is registered under Form CSR-1 with the Ministry of Corporate Affairs, registration number ${site.csrNumber}. Any qualifying Indian company can route contributions to Nikhaar Foundation and count them toward the two per cent CSR obligation under Section 135 of the Companies Act, 2013.`,
  },
  {
    q: "Which Schedule VII activities does Nikhaar Foundation cover?",
    a: "Our programmes map to Schedule VII (i) on safe drinking water and sanitation, Schedule VII (ii) on education, and Schedule VII (iv) on environmental sustainability and quality of air and water. A CSR contribution to Nikhaar can be aligned with any of these clauses.",
  },
  {
    q: "What is the minimum CSR contribution Nikhaar Foundation accepts?",
    a: "We do not publish a hard minimum. We prefer scoped project conversations to abstract number conversations. Tell us your budget and Schedule VII focus, and we will come back with a costed proposal at that scale.",
  },
  {
    q: "What documentation will Nikhaar Foundation provide for our CSR committee?",
    a: "The CSR-1 certificate, 12A and 80G certificates, PAN, cancelled cheque, organisation profile, costed proposal, draft MoU, and, after implementation, a written utilisation report with photographs and beneficiary numbers.",
  },
  {
    q: "Can Nikhaar Foundation deliver CSR projects outside Delhi?",
    a: "Our current operational base and demonstrated track record is in Delhi. For CSR projects in other geographies, please write to us with the scope you have in mind and we will tell you honestly whether we can deliver it well.",
  },
  {
    q: "How does Nikhaar Foundation report on CSR utilisation?",
    a: "We report the intervention delivered, the location, the number of people served, and the actual spending against the sanctioned budget. Photographs are from the work itself, not stock. We do not extrapolate outputs into speculative long-term outcomes.",
  },
];

const csrServiceLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Corporate Social Responsibility partnership",
  provider: { "@id": `${site.url}/#organization` },
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "Country", name: "India" },
  ],
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Indian companies subject to Section 135 of the Companies Act, 2013",
  },
  category: [
    "Section 135 CSR compliance",
    "Schedule VII (i) drinking water and sanitation",
    "Schedule VII (ii) education",
    "Schedule VII (iv) environmental sustainability",
  ],
  offers: {
    "@type": "Offer",
    description:
      "Scoped, costed CSR project execution on water, clean air, and children's welfare in Delhi, delivered by a CSR-1 registered NGO with full 12A and 80G registration.",
    availability: "https://schema.org/InStock",
    priceCurrency: "INR",
    eligibleRegion: { "@type": "Country", name: "India" },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CSR project types",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Community water pump installation",
          description:
            "Survey, procurement, installation, and handover of a community water pump to residents of a Delhi settlement.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Children's education and welfare drive",
          description:
            "Learning materials, venue, and volunteers for structured education drives with children from Delhi's underserved bastis.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Clean air awareness campaign",
          description:
            "Design, permissions, and on-ground delivery of a neighbourhood clean air campaign in Delhi, in the model of our #MyRightToBreathe cracker-free Diwali drive with the Delhi Police.",
        },
      },
    ],
  },
};

export default function CsrPage() {
  return (
    <>
      <PageHero
        eyebrow="For companies · CSR-1 registered"
        title="Route your CSR budget to a verified NGO in Delhi."
        lead={`Nikhaar Foundation is CSR-1 registered with the Ministry of Corporate Affairs under ${site.csrNumber}. Your company's mandated CSR spending under Section 135 of the Companies Act, 2013 can be routed to our water, clean air, and children's welfare programmes.`}
      />

      {/* Trust strip */}
      <section className="border-b border-line bg-white">
        <Container className="py-12 lg:py-14">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { k: "CSR-1", v: site.csrNumber, l: "Ministry of Corporate Affairs" },
              { k: "PAN", v: site.pan, l: "Income Tax Department" },
              { k: "80G URN", v: site.urn80g, l: "16 digit unique registration number" },
              { k: "12A", v: "Registered", l: "Section 12A of the Income Tax Act, 1961" },
            ].map((c) => (
              <div key={c.k} className="border-l-2 border-ochre pl-4">
                <p className="eyebrow text-ink-muted">{c.k}</p>
                <p className="mt-2 font-mono text-lg text-ink">{c.v}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">{c.l}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Nikhaar for CSR */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Why partner with Nikhaar for CSR"
            title="A short distance between your CSR spending and the ground it changes."
            lead="Most CSR spending in India moves through large intermediaries and lands in aggregated reports. Ours does not. You will know the settlement, the intervention, and the number of people it served."
          />
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {whyNikhaar.map((item, i) => (
              <div key={item.title} className="flex gap-6">
                <span className="display shrink-0 text-2xl text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Schedule VII fit */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Schedule VII fit"
            title="How our work maps to the Schedule VII activities your CSR policy covers."
            lead="Every project we deliver can be attributed cleanly to one of these Schedule VII clauses, so your Company Secretary can slot the spending into the Annual Report on CSR without ambiguity."
          />
          <div className="mt-14 space-y-10">
            {scheduleVii.map((s) => (
              <div
                key={s.clause}
                className="grid gap-6 border-t border-line pt-6 lg:grid-cols-[220px_1fr_1.15fr]"
              >
                <p className="eyebrow text-teal">{s.clause}</p>
                <p className="text-base font-semibold text-ink">{s.label}</p>
                <p className="leading-relaxed text-ink-soft">{s.match}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How the partnership works */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="How the partnership works"
            title="Four steps, from first call to the utilisation report your board sees."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.step}
                className="flex flex-col rounded-2xl bg-white p-7 ring-1 ring-line"
              >
                <p className="display text-3xl text-teal">{p.step}</p>
                <h3 className="mt-4 text-base font-semibold text-ink">{p.head}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Documentation pack */}
      <section className="border-b border-line bg-teal-deep text-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="For your CSR committee"
              tone="light"
              title="The documentation pack we send on request."
              lead="Every certificate, registration, and template a listed company's CSR committee, Company Secretary, or finance team needs to sign off cleanly."
            />
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              {documentation.map((d) => (
                <li key={d} className="flex gap-3 border-t border-white/15 pt-4">
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-1 h-4 w-4 shrink-0 text-teal-light"
                    fill="none"
                  >
                    <path
                      d="M3 8.5 6.5 12 13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="leading-relaxed text-white/80">{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Featured project */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand-deep">
              <Image
                src="/images/water-pump-community.jpg"
                alt="Residents of Indira Gandhi Camp, Kasturba Nagar, standing beside the community water pump funded and installed by Nikhaar Foundation"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>A CSR-fundable case study</Eyebrow>
              <h2 className="display mt-5 text-3xl sm:text-4xl">
                A community water pump for 3,000 people, in one clean line item.
              </h2>
              <div className="mt-7 space-y-5 leading-relaxed text-ink-soft">
                <p>
                  A recent example of the kind of project we can execute against a
                  scoped CSR budget: a community water pump funded, installed, and
                  handed over to residents of Indira Gandhi Camp in Kasturba Nagar,
                  giving around 3,000 people water at their doorstep.
                </p>
                <p>
                  For a CSR committee, this is the kind of intervention that reports
                  cleanly. One named settlement, one physical asset that stays with
                  the community, and one countable beneficiary figure. It maps to
                  Schedule VII (i) on safe drinking water and sanitation.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/impact" variant="secondary">
                  Read the full case study <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="Frequently asked"
            title="What CSR heads and Company Secretaries ask before we sign an MoU."
          />
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

      {/* CTA */}
      <section className="bg-sand-deep">
        <Container className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              Talk to us about your CSR cycle.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Tell us the Schedule VII focus and the budget you are working with,
              and we will come back with two or three scoped project options and
              the full statutory pack for your CSR committee.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button
                href={`mailto:${site.email}?subject=CSR%20partnership%20enquiry`}
              >
                Start a CSR conversation <Arrow />
              </Button>
              <Button href="/impact" variant="secondary">
                See what we have delivered
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd data={csrServiceLd} />
      <JsonLd data={faqLd(faqs)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "CSR partnerships", path: "/csr" },
        ])}
      />
    </>
  );
}
