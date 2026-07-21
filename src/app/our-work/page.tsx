import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { campaigns, programs } from "@/lib/site";

import { breadcrumbLd, JsonLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Our Programmes | Water, clean air and children’s welfare in Delhi",
  description:
    "Nikhaar Foundation runs four programmes in Delhi’s underserved neighbourhoods: water conservation and access, children’s education and welfare, clean air and environment, and civic awareness campaigns.",
  path: "/our-work",
});

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Four programmes, one city, and a preference for problems you can see."
        lead="We run water, children’s welfare, clean air, and awareness programmes in Delhi’s underserved neighbourhoods. Each one is chosen because a small organisation can move it, and because the people affected have been waiting a long time."
      />

      {/* Programmes */}
      {programs.map((program, i) => (
        <section
          key={program.slug}
          id={program.slug}
          className={`scroll-mt-24 border-b border-line ${
            i % 2 === 1 ? "bg-white" : ""
          }`}
        >
          <Container className="py-20 lg:py-28">
            <div
              className={`grid items-center gap-14 lg:grid-cols-2 lg:gap-20 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <Eyebrow>Programme {String(i + 1).padStart(2, "0")}</Eyebrow>
                <h2 className="display mt-5 text-3xl sm:text-4xl">{program.title}</h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                  {program.body}
                </p>
                <ul className="mt-9 space-y-4">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-4">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre"
                        aria-hidden
                      />
                      <span className="leading-relaxed text-ink-soft">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-sand-deep">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Full gallery */}
      <section className="border-b border-line bg-sand-deep/50">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="On the ground"
            title="Everything we have run so far."
            lead="A complete record of the campaigns, installations, and drives behind the programmes above."
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.map((c) => (
              <figure key={c.image}>
                <div className="relative aspect-square overflow-hidden rounded-xl bg-sand-deep">
                  <Image
                    src={c.image}
                    alt={c.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
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

      <section className="bg-teal-deep text-white">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="display text-3xl sm:text-4xl">
                Everything on this page was funded by somebody.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                The next set of pumps, drives, and competitions needs the same. If
                any of this is close to what you want your giving to do, we should
                talk.
              </p>
            </div>
            <Button href="/support" variant="ghost">
              Ways to give <Arrow />
            </Button>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Our Work", path: "/our-work" },
        ])}
      />
    </>
  );
}
