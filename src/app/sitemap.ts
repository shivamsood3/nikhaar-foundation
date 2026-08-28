import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/content/blog/posts";

const routes: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" },
  { path: "/our-work", priority: 0.9, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/support", priority: 0.95, changeFrequency: "monthly" },
  { path: "/csr", priority: 0.95, changeFrequency: "monthly" },
  { path: "/donor-guide", priority: 0.85, changeFrequency: "yearly" },
  { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries = routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));
  return [...staticEntries, ...blogEntries];
}
