import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Eyebrow, PageHero } from "@/components/ui";
import { Prose } from "@/components/prose";
import {
  articleLd,
  breadcrumbLd,
  canonical,
  JsonLd,
  pageMeta,
} from "@/lib/seo";
import { getPost, posts } from "@/content/blog/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };

  const meta = pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });

  return {
    ...meta,
    keywords: post.keywords,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: ["Shivam Sood"],
      tags: post.keywords,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={`${post.category} · ${new Date(post.datePublished).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })} · ${post.readingTime}`}
        title={post.title}
        lead={post.excerpt}
      />

      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-24">
          <article className="mx-auto">
            <Prose>{post.body}</Prose>
          </article>
        </Container>
      </section>

      {related.length ? (
        <section className="border-b border-line">
          <Container className="py-16 lg:py-20">
            <Eyebrow>More on the blog</Eyebrow>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group block rounded-2xl bg-white p-8 ring-1 ring-line transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(14,26,25,0.35)]"
                >
                  <p className="eyebrow text-teal">{r.category}</p>
                  <h3 className="display mt-3 text-xl text-ink transition-colors group-hover:text-teal">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <JsonLd
        data={{
          ...articleLd({
            title: post.title,
            description: post.description,
            path: `/blog/${slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
          }),
          "@type": "BlogPosting",
          "@id": `${canonical(`/blog/${slug}`)}#article`,
          keywords: post.keywords.join(", "),
          articleSection: post.category,
          wordCount: undefined,
          isPartOf: { "@id": `${canonical("/blog")}#blog` },
        }}
      />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${slug}` },
        ])}
      />
    </>
  );
}
