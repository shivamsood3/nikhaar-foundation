import type { Metadata } from "next";
import Image from "next/image";
import { Arrow, Button, Container, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impact",
  description:
    "What Nikhaar Foundation has actually delivered, how we count it, and what we deliberately do not claim.",
};

const measures = [
  {
    value: "3,000+",
    label: "People with water at their doorstep",
    body: "Residents of Indira Gandhi Camp, Kasturba Nagar, served by the community water pump we funded, installed, and handed over.",
  },
  {
    value: "1",
    label: "Community water pump installed",
    body: "Owned and operated by the residents themselves. No ongoing fee, no dependence on us.",
  },
  {
    value: "Delhi Police",
    label: "Institutional partner",
    body: "Our painting competition and the #MyRightToBreathe cracker-free Diwali campaign were run in association with the Delhi Police.",
  },
];

const method = [
  {
    title: "We count people, not impressions",
    body: "A campaign that reached a lot of phones has not necessarily reached anybody. Where we can name a settlement and estimate the households served, we report that. Where we cannot, we say so rather than converting activity into a bigger sounding number.",
  },
  {
    title: "We report the intervention, not the outcome we hope for",
    body: "We installed a pump serving roughly 3,000 people. We do not extrapolate that into hours saved, illnesses prevented, or incomes raised. Those effects are real, but we did not measure them, so we will not bill them to you as results.",
  },
  {
    title: "Photographs are from the work itself",
    body: "Every image on this site is from a drive, installation, or event we ran. Nothing is stock, and nothing is staged after the fact.",
  },
  {
    title: "Funders get the specifics",
    body: `Any donor or CSR partner can ask for a written account of what their contribution paid for, where it went, and when. Write to ${site.email} and we will put it together.`,
  },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact"
        title="What we have actually delivered, and how we count it."
        lead="Nonprofit impact pages tend to be exercises in flattering arithmetic. This one is deliberately conservative. We would rather show you a smaller number you can trust than a large one you cannot check."
      />

      {/* Numbers */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            {measures.map((m) => (
              <div key={m.label}>
                <p className="display text-4xl text-teal lg:text-5xl">{m.value}</p>
                <p className="mt-4 text-base font-semibold text-ink">{m.label}</p>
                <p className="mt-3 leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case study */}
      <section className="border-b border-line">
        <Container className="py-20 lg:py-28">
          <Eyebrow>Case study</Eyebrow>
          <h2 className="display mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-[2.75rem]">
            Indira Gandhi Camp, Kasturba Nagar
          </h2>

          <div className="mt-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="space-y-10">
              {[
                {
                  head: "The situation",
                  body: "Indira Gandhi Camp is a dense settlement in Kasturba Nagar. Like most of Delhi’s camps, its water came irregularly and from a distance. Collecting it was a daily task that fell mostly to women and older children, and it was measured in hours rather than minutes. Households rationed. Some paid for what should have been free.",
                },
                {
                  head: "What we did",
                  body: "We funded and installed a community water pump inside the settlement and handed it to the residents. The decision on siting was made with the people who would use it. There is no fee attached, and no continuing role for the foundation in its operation.",
                },
                {
                  head: "The result",
                  body: "Around 3,000 people now have water door to door. The queue that structured the first two hours of the day in that lane no longer exists. The intervention was neither expensive nor technically difficult. It had simply never been anyone’s job.",
                },
                {
                  head: "Why we lead with this",
                  body: "It is the clearest example of what we are asking funders to buy: a defined problem in a named place, a physical fix, a countable set of people better off, and an asset that stays with the community after we have gone.",
                },
              ].map((block) => (
                <div key={block.head} className="border-t border-line pt-6">
                  <h3 className="text-lg font-semibold text-ink">{block.head}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-ink-soft">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand-deep">
                <Image
                  src="/images/water-pump-installed.jpg"
                  alt="The community water pump installed at Indira Gandhi Camp"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-sand-deep">
                <Image
                  src="/images/water-pump-community.jpg"
                  alt="Residents of Indira Gandhi Camp after the water pump was installed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Method */}
      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-28">
          <SectionHeading
            eyebrow="How we measure"
            title="Our reporting rules, written down so you can hold us to them."
          />
          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2">
            {method.map((m) => (
              <div key={m.title}>
                <div className="h-px w-10 bg-ochre" />
                <h3 className="mt-5 text-lg font-semibold text-ink">{m.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{m.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-teal-deep text-white">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="display text-3xl sm:text-4xl">
                We would like the next entry on this page to be yours.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/70">
                Tell us the scale you are considering and we will come back with a
                costed proposal for a specific piece of work in a specific place.
              </p>
            </div>
            <Button href="/support" variant="ghost">
              Fund a project <Arrow />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
