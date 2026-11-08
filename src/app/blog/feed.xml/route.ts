import { posts } from "@/content/blog/posts";
import { site } from "@/lib/site";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const feedUrl = `${site.url}/blog/feed.xml`;
  const blogUrl = `${site.url}/blog`;

  const entries = posts
    .slice()
    .sort((a, b) => b.dateModified.localeCompare(a.dateModified))
    .map((p) => {
      const url = `${site.url}/blog/${p.slug}`;
      return `  <entry>
    <title>${esc(p.title)}</title>
    <link href="${esc(url)}"/>
    <id>${esc(url)}</id>
    <updated>${new Date(p.dateModified).toISOString()}</updated>
    <published>${new Date(p.datePublished).toISOString()}</published>
    <summary>${esc(p.description)}</summary>
    <author><name>Shivam Sood</name></author>
    <category term="${esc(p.category)}"/>
  </entry>`;
    })
    .join("\n");

  const latest = posts.reduce(
    (acc, p) => (p.dateModified > acc ? p.dateModified : acc),
    "1970-01-01",
  );

  const feed = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${esc(site.name)} Blog</title>
  <subtitle>Notes and guides on giving in India, CSR under Section 135, and programmes in Delhi's underserved settlements.</subtitle>
  <link href="${esc(feedUrl)}" rel="self"/>
  <link href="${esc(blogUrl)}"/>
  <id>${esc(blogUrl)}</id>
  <updated>${new Date(latest).toISOString()}</updated>
  <author><name>Shivam Sood</name></author>
  <rights>© ${new Date().getFullYear()} ${esc(site.name)}</rights>
${entries}
</feed>
`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
