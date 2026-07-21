import Link from "next/link";
import { Logo } from "./logo";
import { Container } from "./ui";
import { site } from "@/lib/site";

const columns = [
  {
    title: "Organisation",
    links: [
      { href: "/about", label: "About us" },
      { href: "/our-work", label: "Our work" },
      { href: "/impact", label: "Impact" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { href: "/support", label: "Donate" },
      { href: "/support#csr", label: "CSR partnerships" },
      { href: "/contact", label: "Contact us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-teal-deep text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Water conservation, clean air, and the education and welfare of
              children. Quietly, and close to the ground.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-white/45">{col.title}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow text-white/45">Reach us</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-white/80 transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 transition-colors hover:text-white"
                >
                  Instagram {site.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-white/50">
            Nikhaar Foundation is registered under Section 12A and Section 80G of
            the Income Tax Act, 1961. CSR Registration Number {site.csrNumber},
            Ministry of Corporate Affairs. Donations made to the foundation are
            eligible for tax deduction under Section 80G.
          </p>
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Nikhaar Foundation. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
