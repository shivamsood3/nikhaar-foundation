import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="py-32 text-center lg:py-40">
      <p className="eyebrow text-teal">404</p>
      <h1 className="display mt-5 text-4xl sm:text-5xl">
        This page is not here.
      </h1>
      <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
        The link may be old, or we may have moved something. The work itself is
        still going on.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/our-work" variant="secondary">
          See our work
        </Button>
      </div>
    </Container>
  );
}
