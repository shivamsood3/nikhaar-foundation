import { site } from "./site";

/**
 * Shared SEO primitives. All routes read from here so titles, descriptions,
 * canonical URLs and JSON-LD stay in one place.
 */

export const keywords = [
  // Brand and entity
  "Nikhaar Foundation",
  "Nikhaar Foundation NGO",
  "Nikhaar Foundation Delhi",
  "info@nikhaarfoundation.org",
  // Category and intent
  "NGO in Delhi",
  "high impact NGO India",
  "high impact NGO Delhi",
  "verified NGO India",
  "80G registered NGO",
  "80G tax deduction donation",
  "CSR-1 registered NGO",
  "CSR partner NGO Delhi",
  "12A 80G NGO India",
  "small NGO Delhi donate",
  // Programme areas
  "water conservation NGO Delhi",
  "water conservation NGO India",
  "clean air NGO Delhi",
  "children welfare NGO Delhi",
  "NGO for slum children Delhi",
  "NGO for basti children",
  "cracker free Diwali campaign",
  // Location and partnership
  "NGO Kasturba Nagar",
  "Indira Gandhi Camp water pump",
  "Delhi Police NGO partnership",
  // Founder and governance
  "Shivam Sood NGO",
  "founder Nikhaar Foundation",
  "CSR00107287",
];

export function canonical(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function pageMeta({ title, description, path, ogImage }: PageMetaInput) {
  const url = canonical(path);
  const img = ogImage ?? "/opengraph-image";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en_IN",
      type: "website" as const,
      images: [{ url: img, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [img],
    },
  };
}

/** Root NGO / Organization schema. */
export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["NGO", "Organization"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: "Nikhaar Foundation India",
    url: site.url,
    logo: `${site.url}/icon.png`,
    email: site.email,
    description: site.description,
    foundingLocation: { "@type": "Place", name: "Delhi, India" },
    areaServed: [
      { "@type": "City", name: "Delhi" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Water conservation",
      "Access to drinking water",
      "Air quality",
      "Children's education",
      "Community welfare",
      "Corporate Social Responsibility in India",
    ],
    nonprofitStatus: "Nonprofit501c3",
    identifier: [
      { "@type": "PropertyValue", propertyID: "CSR Registration Number", value: site.csrNumber },
      { "@type": "PropertyValue", propertyID: "PAN", value: site.pan },
      { "@type": "PropertyValue", propertyID: "80G URN", value: site.urn80g },
      { "@type": "PropertyValue", propertyID: "Section 12A", value: "Registered" },
      { "@type": "PropertyValue", propertyID: "Section 80G", value: "Registered" },
      { "@type": "PropertyValue", propertyID: "CSR-1", value: "Registered with the Ministry of Corporate Affairs" },
    ],
    founder: {
      "@type": "Person",
      "@id": `${site.url}/about#founder`,
      name: "Shivam Sood",
      jobTitle: "Founder",
      worksFor: { "@id": `${site.url}/#organization` },
    },
    sameAs: [site.instagram],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "donations",
        email: site.email,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        contactType: "CSR partnerships",
        email: site.email,
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
    ],
    seeks: {
      "@type": "Demand",
      description:
        "Individual donations (80G tax deductible) and CSR partnerships (CSR-1 eligible under Section 135 of the Companies Act) to fund water conservation, clean air, and children's welfare programmes in Delhi.",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
  };
}

export function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-IN",
  };
}

type Crumb = { name: string; path: string };

export function breadcrumbLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  };
}

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: canonical(path),
    author: { "@id": `${site.url}/about#founder` },
    publisher: { "@id": `${site.url}/#organization` },
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en-IN",
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
