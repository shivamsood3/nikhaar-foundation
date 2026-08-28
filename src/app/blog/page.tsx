import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageHero } from "@/components/ui";
import { breadcrumbLd, canonical, JsonLd, pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { posts } from "@/content/blog/posts";

export const metadata: Metadata = pageMeta({
  title: "Notes and guides on giving in India | Nikhaar Foundation blog",
  description:
    "Guides for individual donors and CSR heads on how to give in India: 80G tax deductions, CSR-1 registration under Section 135, Schedule VII activities, and case notes from our water, clean air, and children's welfare programmes in Delhi.",
  path: "/blog",
});

const blogLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${site.url}/blog#blog`,
  url: `${site.url}/blog`,
  name: `${site.name} Blog`,
  description:
    "Long-form notes and guides on giving in India, CSR compliance under Section 135, and Nikhaar Foundation's programmes in Delhi.",
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en-IN",
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    "@id": `${site.url}/blog/${p.slug}#article`,
    url: canonical(`/blog/${p.slug}`),
    headline: p.title,
    description: p.description,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { "@id": `${site.url}/about#founder` },
    publisher: { "@id": `${site.url}/#organization` },
  })),
};

export default function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes and guides on giving in India."
        lead="Long-form pieces for donors, CSR heads, and grant makers. Straight explanations of how 80G, CSR-1, and Schedule VII work, and case notes from our programmes in Delhi's underserved neighbourhoods."
      />

      <section className="border-b border-line bg-white">
        <Container className="py-20 lg:py-24">
          <ul className="divide-y divide-line border-y border-line">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid gap-6 py-8 lg:grid-cols-[180px_1fr_180px] lg:items-baseline"
                >
                  <div>
                    <p className="eyebrow text-teal">{post.category}</p>
                    <p className="mt-2 text-xs text-ink-muted">
                      {new Date(post.datePublished).toLocaleDateString("en-IN", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div>
                    <h2 className="display text-2xl leading-snug text-ink transition-colors group-hover:text-teal sm:text-[1.65rem]">
                      {post.title}
                    </h2>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                      {post.excerpt}
                    </p>
                  </div>

                  <p className="text-sm text-ink-muted lg:text-right">
                    {post.readingTime}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd data={blogLd} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
