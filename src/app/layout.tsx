import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import { JsonLd, keywords, organizationLd, websiteLd } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500"],
});

const defaultTitle = `${site.name} | 80G and CSR-1 registered NGO in Delhi`;
const defaultDescription =
  "Nikhaar Foundation is a 12A, 80G and CSR-1 registered Indian nonprofit working on water conservation, clean air, and children's welfare in Delhi. Individual donations are tax deductible under Section 80G; companies can route CSR spending under CSR-1 registration CSR00107287.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: `%s | ${site.name}` },
  description: defaultDescription,
  applicationName: site.name,
  keywords,
  authors: [{ name: "Shivam Sood", url: site.url }],
  creator: "Shivam Sood",
  publisher: site.name,
  category: "Nonprofit",
  alternates: {
    canonical: site.url,
    types: { "application/rss+xml": `${site.url}/sitemap.xml` },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: site.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[60] focus:rounded-full focus:bg-teal focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd data={organizationLd()} />
        <JsonLd data={websiteLd()} />
      </body>
    </html>
  );
}
