import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { compliance, site } from "@/lib/site";
import { breadcrumbLd, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "About Nikhaar Foundation | Founder, mission and governance",
  description:
    "Nikhaar Foundation is a Delhi-based Indian NGO founded by Shivam Sood, registered under Section 12A and Section 80G of the Income Tax Act, and holding CSR-1 registration (CSR00107287) with the Ministry of Corporate Affairs.",
  path: "/about",
});

const founderPersonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/about#founder`,
  name: "Shivam Sood",
  jobTitle: "Founder",
  worksFor: { "@id": `${site.url}/#organization` },
  url: `${site.url}/about`,
  nationality: { "@type": "Country", name: "India" },
  sameAs: [site.instagram],
};

const principles = [
  {
    title: "Go where it is unfashionable",
    body: "The settlements we work in are not on anybody’s tour. They do not generate headlines. That is precisely why the basics there have gone unaddressed for so long, and why a modest amount of money goes further than it would almost anywhere else.",
  },
  {
    title: "Fix the thing, then leave it with people",
    body: "The water pump at Indira Gandhi Camp belongs to the residents, not to us. We are not interested in building a permanent presence that a community depends on. We are interested in the community not needing us.",
  },
  {
    title: "Consistency over spectacle",
    body: "A single large gesture photographs well and changes little. Turning up repeatedly for the same children in the same lane is harder, less visible, and the only thing that works.",
  },
  {
    title: "Say what actually happened",
    body: "We report what we did, where, and for how many people. We do not inflate numbers, and we do not claim credit for outcomes we did not produce.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A small foundation, working close to the ground in Delhi."
        lead="Nikhaar Foundation exists to address the things a community can least afford to go without: water, clean air, and its children. We do that in specific neighbourhoods, with specific people, and we stay long enough to matter."
      />

      {/* Story */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h2 className="display mt-5 text-3xl sm:text-4xl">
                Nikhaar means to emerge, to come into your own.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  That is close to what we are trying to do. Not to rescue anybody,
                  and not to arrive with a plan drawn up somewhere far away, but to
                  remove the specific obstacles that keep a family or a child from
                  becoming what they were already capable of becoming.
                </p>
                <p>
                  In practice that has looked like a water pump in a settlement that
                  had been queuing for tankers, a painting competition that gave
                  children a stage, a Diwali campaign that asked a whole neighbourhood
                  to reconsider a habit, and a lot of unremarkable hours spent
                  clearing rubbish and talking to residents.
                </p>
                <p>
                  We are not a large organisation, and we do not pretend to be. What
                  we offer a funder is the opposite of scale: a short distance between
                  the money and the ground, and a clear account of what happened in
                  between.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand-deep">
                <Image
                  src="/images/childrens-welfare.jpg"
                  alt="Children at a Nikhaar Foundation education and welfare drive"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-2xl bg-teal-light p-8">
                <p className="display text-2xl leading-snug text-teal-deep">
                  &ldquo;We work on the things a community can least afford to go
                  without: water, clean air, and its children.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="How we work"
            title="Four principles we hold to, including when they cost us attention."
          />
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
            {principles.map((p, i) => (
              <div key={p.title} className="flex gap-6">
                <span className="display shrink-0 text-2xl text-ochre">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="Leadership"
              title="Who runs the foundation."
            />
            <div>
              <div className="rounded-2xl bg-white p-8 ring-1 ring-line lg:p-10">
                <h3 className="display text-2xl">Shivam Sood</h3>
                <p className="eyebrow mt-2 text-ink-muted">Founder</p>
                <p className="mt-6 leading-relaxed text-ink-soft">
                  Shivam founded Nikhaar Foundation to put a structure around work he
                  was already doing in Delhi’s settlements. He writes and speaks
                  publicly about business, money, and the things numbers leave out,
                  and he brings that same insistence on specifics to the foundation:
                  named neighbourhoods, counted beneficiaries, and no claims that
                  cannot be checked.
                </p>
                <p className="mt-5 leading-relaxed text-ink-soft">
                  He is directly reachable for anyone considering funding the work.
                </p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary">
                    Get in touch <Arrow />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Compliance */}
      <section id="compliance" className="bg-teal-deep text-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <SectionHeading
              eyebrow="Governance"
              tone="light"
              title="Registered, compliant, and straightforward to fund."
              lead="Every registration a serious Indian donor or CSR team looks for is in place."
            />
            <div className="space-y-8">
              {compliance.map((c) => (
                <div key={c.label} className="border-t border-white/15 pt-6">
                  <h3 className="text-base font-semibold text-white">{c.label}</h3>
                  <p className="mt-2.5 leading-relaxed text-white/65">{c.detail}</p>
                </div>
              ))}
              <p className="text-sm leading-relaxed text-white/45">
                Copies of our registration certificates, PAN, and audited accounts are
                available on request. Write to{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-4 hover:text-white"
                >
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>

      <JsonLd data={founderPersonLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
