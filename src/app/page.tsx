import Image from "next/image";
import Link from "next/link";
import { Arrow, Button, Container, Eyebrow, SectionHeading } from "@/components/ui";
import { campaigns, programs, site, stats } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <Container className="py-16 lg:py-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <Eyebrow>Delhi, India · Registered nonprofit</Eyebrow>
              <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-[4rem]">
                We work on what a community can least afford to go without.
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl">
                Nikhaar Foundation works on water conservation, clean air, and the
                education and welfare of children. Quietly and close to the ground,
                where small, consistent effort changes more than big, occasional
                gestures.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/support#donate">
                  Donate now <Arrow />
                </Button>
                <Button href="/impact" variant="secondary">
                  See the impact
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-ink-muted">
                {["12A registered", "80G tax deductible", "CSR-1 eligible"].map(
                  (chip, i) => (
                    <span key={chip} className="flex items-center gap-3">
                      {i > 0 ? (
                        <span className="h-1 w-1 rounded-full bg-line" aria-hidden />
                      ) : null}
                      {chip}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-[1.75rem] bg-sand-deep sm:aspect-square lg:aspect-4/5">
                <Image
                  src="/images/water-pump-community.jpg"
                  alt="Residents of Indira Gandhi Camp standing beside the newly installed community water pump"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 hidden w-56 rounded-2xl bg-white p-5 shadow-[0_18px_40px_-18px_rgba(14,26,25,0.45)] sm:block">
                <p className="display text-3xl text-teal">3,000+</p>
                <p className="mt-2 text-sm leading-snug text-ink-soft">
                  people now have water at their doorstep in Indira Gandhi Camp
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-b border-line bg-white">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="sm:px-2">
                <p className="display text-4xl text-teal lg:text-5xl">{stat.value}</p>
                <p className="mt-3 text-sm font-semibold text-ink">{stat.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="What we do"
            title="Four things, done properly, in the places that need them most."
            lead="We are deliberately narrow. Water, air, and children are the areas where a small organisation working consistently in one city can produce change you can point at."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/our-work#${program.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-line transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(14,26,25,0.5)]"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-sand-deep">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="display text-2xl">{program.title}</h3>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">
                    {program.short}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                    Read more{" "}
                    <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured case study */}
      <section className="bg-teal-deep text-white">
        <Container className="py-20 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-teal">
              <Image
                src="/images/water-pump-installed.jpg"
                alt="The community water pump installed at Indira Gandhi Camp, Kasturba Nagar"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow tone="light">Case study</Eyebrow>
              <h2 className="display mt-5 text-3xl sm:text-4xl lg:text-[2.75rem]">
                One pump, and a queue that no longer exists.
              </h2>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-white/70">
                <p>
                  In Indira Gandhi Camp in Kasturba Nagar, water arrived the way it
                  arrives in most of Delhi’s settlements: irregularly, at a distance,
                  and at a cost measured in hours of somebody’s day. Usually a
                  woman’s, usually before she went to work.
                </p>
                <p>
                  We funded and installed a community water pump and handed it over
                  to the residents. Around 3,000 people now have water door to door.
                  It is not a complicated intervention. It simply had not been done.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/impact" variant="ghost">
                  How we measure impact <Arrow />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* On the ground */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="On the ground"
              title="Campaigns we have run."
              lead="Not renderings or plans. Photographs from the drives, installations, and competitions we have actually delivered."
            />
            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 pb-2 text-sm font-semibold text-teal"
            >
              See all our work <Arrow />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.slice(0, 6).map((c) => (
              <figure key={c.image} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl bg-sand-deep">
                  <Image
                    src={c.image}
                    alt={c.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="eyebrow text-ochre">{c.tag}</span>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {c.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* Why fund us */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <SectionHeading
              eyebrow="Why fund Nikhaar"
              title="Small enough that your money is visible. Registered enough that it is safe."
            />
            <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {[
                {
                  title: "Every rupee has an address",
                  body: "We work in specific settlements on specific problems. You can be told exactly which community your contribution reached and what it paid for.",
                },
                {
                  title: "Fully compliant",
                  body: `12A and 80G registered under the Income Tax Act, and CSR-1 registered with the Ministry of Corporate Affairs under ${site.csrNumber}.`,
                },
                {
                  title: "Low overhead by design",
                  body: "We are a lean operation without layers of administration between a donation and the ground. Most of what comes in goes out as work.",
                },
                {
                  title: "Institutional partners",
                  body: "Our clean air and children’s campaigns have been run in association with the Delhi Police, which gives the work reach and accountability.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <div className="h-px w-10 bg-ochre" />
                  <h3 className="mt-5 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-soft">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-sand-deep">
        <Container className="py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display text-3xl sm:text-4xl lg:text-5xl">
              Fund the next pump. Or the next hundred children.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Individual donations are eligible for tax deduction under Section 80G.
              Companies can route mandated CSR spending to our programmes. Either
              way, we will tell you exactly where it went.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href="/support#donate">
                Donate now <Arrow />
              </Button>
              <Button href="/support#csr" variant="secondary">
                Discuss a CSR partnership
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
