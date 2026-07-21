import Image from "next/image";
import { CopyButton } from "./copy-button";
import { bank, site, upi } from "@/lib/site";

const rows: { label: string; value: string; copy?: boolean }[] = [
  { label: "Account name", value: bank.accountName },
  { label: "Bank", value: `${bank.bankName}, ${bank.branch}` },
  { label: "Account number", value: bank.accountNumber, copy: true },
  { label: "IFSC", value: bank.ifsc, copy: true },
  { label: "Account type", value: bank.accountType },
];

export function DonationDetails({ id = "donate" }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-line bg-sand">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          {/* Bank transfer */}
          <div className="rounded-2xl bg-white p-8 ring-1 ring-line lg:p-10">
            <p className="eyebrow text-teal">Bank transfer or NEFT</p>
            <h3 className="display mt-3 text-2xl">Transfer to our account</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              For domestic donations in Indian Rupees. After you transfer, email us
              with the transaction reference and your PAN so we can send the 80G
              receipt.
            </p>

            <dl className="mt-8 divide-y divide-line border-y border-line">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-wrap items-center justify-between gap-3 py-4"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                    {row.label}
                  </dt>
                  <dd className="flex items-center gap-3 text-right">
                    <span className="font-mono text-sm text-ink">{row.value}</span>
                    {row.copy ? <CopyButton value={row.value} /> : null}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-teal-light px-3 py-1.5 font-semibold text-teal-deep">
                PAN {site.pan}
              </span>
              <span className="rounded-full bg-ochre-light px-3 py-1.5 font-semibold text-ochre">
                80G URN {site.urn80g}
              </span>
            </div>
          </div>

          {/* UPI */}
          <div className="rounded-2xl bg-teal-deep p-8 text-white lg:p-10">
            <p className="eyebrow text-teal-light">UPI</p>
            <h3 className="display mt-3 text-2xl text-white">
              Or pay by UPI in seconds
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Scan the QR from any UPI app, or paste the ID. Use your name in the
              payment note so we can match it to the 80G receipt.
            </p>

            <div className="mt-8 flex flex-col items-center gap-6 rounded-xl bg-white p-6 text-center text-ink">
              <div className="relative h-52 w-52 overflow-hidden rounded-lg bg-sand">
                <Image
                  src={upi.qrImage}
                  alt={`UPI QR code for ${bank.accountName}`}
                  fill
                  sizes="208px"
                  className="object-contain p-2"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  UPI ID
                </p>
                <p className="mt-1 font-mono text-lg font-semibold text-ink">
                  {upi.id}
                </p>
                <div className="mt-3 flex justify-center">
                  <CopyButton value={upi.id} label="Copy UPI ID" />
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs leading-relaxed text-white/55">
              After paying, email a screenshot and your PAN to{" "}
              <a
                href={`mailto:${site.email}?subject=UPI%20donation%20-%2080G%20receipt`}
                className="underline underline-offset-2 hover:text-white"
              >
                {site.email}
              </a>{" "}
              and we will send your 80G receipt.
            </p>
          </div>
        </div>

        {/* 80G note */}
        <div className="mt-10 grid gap-6 rounded-2xl bg-white p-6 ring-1 ring-line md:grid-cols-3 md:p-8">
          {[
            {
              t: "1. Transfer or scan",
              b: "Send any amount by NEFT, IMPS, or UPI using the details above.",
            },
            {
              t: "2. Email us the details",
              b: `Write to ${site.email} with the transaction reference and your full name, PAN, and address.`,
            },
            {
              t: "3. Receive your 80G receipt",
              b: `We issue a digitally signed receipt carrying our 80G URN ${site.urn80g}, usually within two working days.`,
            },
          ].map((step) => (
            <div key={step.t}>
              <p className="text-sm font-semibold text-ink">{step.t}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
