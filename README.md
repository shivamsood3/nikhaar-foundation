# Nikhaar Foundation

Marketing and fundraising site for Nikhaar Foundation, a registered Indian
nonprofit working on water conservation, clean air, and the education and
welfare of children in Delhi.

Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4. Every page
is statically prerendered, so it can be deployed to Vercel, Netlify, or any
static host without a backend.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

```
src/
  app/
    page.tsx           Home
    about/             Story, principles, leadership, governance
    our-work/          The four programmes plus the full campaign gallery
    impact/            Numbers, the Kasturba Nagar case study, reporting rules
    support/           Donations, CSR partnerships, FAQ
    contact/           Email routes by enquiry type
    sitemap.ts         Generated sitemap
    robots.ts          Generated robots.txt
  components/          Header, footer, logo, shared UI primitives
  lib/site.ts          All site content and constants live here
public/images/         Campaign photographs
```

Almost all copy, statistics, programme descriptions, and campaign captions live
in `src/lib/site.ts`. Edit that one file to change content across the site.

## Content rule

The copy on this site deliberately contains no em dashes or en dashes. Keep it
that way when editing.

## Before going live

These are the gaps that need real information rather than placeholder handling.
None of them are invented in the current copy, they are simply absent.

1. **Domain and metadata base.** `site.url` in `src/lib/site.ts` is set to
   `https://www.nikhaarfoundation.org`. Update it if the site goes elsewhere.
2. **Payment details.** The donate flow currently opens an email to
   `info@nikhaarfoundation.org`. Add bank details, a UPI ID, or a payment
   gateway (Razorpay and Instamojo both support 80G receipting) on
   `src/app/support/page.tsx`.
3. **Costed giving tiers.** `uses` in `src/app/support/page.tsx` has an optional
   `amount` field on each item. Fill these in with real figures, for example
   what a community water pump actually costs, and they will render
   automatically. Specific rupee amounts convert far better than open requests.
4. **Registered address and phone.** Needed on the contact page and in the
   footer for donor and CSR due diligence. Also add them to the JSON-LD block in
   `src/app/layout.tsx`.
5. **Registration certificates.** Consider hosting PDFs of the 12A, 80G, and
   CSR-1 certificates and linking them from the governance section of
   `/about`. CSR teams look for this.
6. **Founding year, team, and trustees.** The about page currently names only
   the founder. A board or trustee list adds credibility with institutional
   funders.
7. **Annual report and audited accounts.** The about page says these are
   available on request. Publishing them directly is stronger.
8. **Open Graph image.** Add `src/app/opengraph-image.png` (1200x630) so links
   shared on WhatsApp, LinkedIn, and X preview properly.
9. **Favicon.** `src/app/favicon.ico` is still the Next.js default.
10. **Analytics.** Nothing is installed. Add Plausible or Vercel Analytics if
    you want to see where donor traffic comes from.

## Photographs

The images in `public/images/` are from the foundation's own campaigns and were
taken from shivamsood.com/nikhaar-foundation. They are compressed copies. If
higher resolution originals exist, replace them, since these are the strongest
credibility signal on the site.
