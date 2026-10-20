import type { SiteContent } from "../../content";
import { Reveal } from "../../Reveal";
import { PerfSeam } from "../../Stamp";
import { ThanksBanner } from "../../Thanks";
import { MailingListForm } from "../../MailingList";
import { Arrow, ExternalArrow, btn } from "../primitives";

/** US (SIMA) and UK (CIC) donation cards, each with a mailing-list form. */
export function DonateSection({ t }: { t: SiteContent }) {
  const d = t.donate;
  const { us, uk, note } = d;
  return (
    <section className="relative overflow-hidden bg-nile-900 text-sand-50 grain">
      <PerfSeam dark />
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-24">
        <ThanksBanner text={t.thanks} />

        {/* min-w-0 on the cards: grid items otherwise grow to their widest
            unbreakable run, which pushed the Arabic cards past a phone screen. */}
        <div className="grid gap-6 md:grid-cols-2 [&>*]:min-w-0">
          <Reveal className="reveal" delay={80}>
            <div className="h-full min-w-0 break-words rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">{us.kicker}</p>
              <h2 className="font-display text-3xl mb-4">{us.heading}</h2>
              <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">{us.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <a href={us.links.paypal} target="_blank" rel="noopener noreferrer" className={btn.lightFilled}>
                  {us.paypalButton}
                  <ExternalArrow />
                </a>
                <a href={us.links.sponsorPage} target="_blank" rel="noopener noreferrer" className={btn.lightOutline}>
                  {us.sponsorButton}
                  <ExternalArrow />
                </a>
              </div>
              <div className="mt-8 pt-8 border-t border-sand-100/10">
                <MailingListForm text={t.mailingList} idSuffix="us" />
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal" delay={160}>
            <div className="h-full min-w-0 break-words rounded-2xl border border-sand-100/15 bg-sand-50/[0.04] p-8 sm:p-10 flex flex-col">
              <p className="kicker text-sand-300 mb-3">{uk.kicker}</p>
              <h2 className="font-display text-3xl mb-4">{uk.heading}</h2>
              {uk.links.stripe || uk.bank ? (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8">{uk.body}</p>
                  <div className="flex flex-wrap gap-3">
                    {uk.links.stripe && (
                      <a href={uk.links.stripe} target="_blank" rel="noopener noreferrer" className={btn.lightFilled}>
                        {uk.cardButton}
                        <ExternalArrow />
                      </a>
                    )}
                  </div>
                  {uk.bank && (
                    <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 text-sm text-sand-100/80">
                      <dt className="text-sand-300">{uk.bankLabels.accountName}</dt>
                      <dd>{uk.bank.accountName}</dd>
                      <dt className="text-sand-300">{uk.bankLabels.sortCode}</dt>
                      <dd>{uk.bank.sortCode}</dd>
                      <dt className="text-sand-300">{uk.bankLabels.accountNumber}</dt>
                      <dd>{uk.bank.accountNumber}</dd>
                      {uk.bank.iban && (
                        <>
                          <dt className="text-sand-300">{uk.bankLabels.iban}</dt>
                          <dd className="tabular-nums">{uk.bank.iban}</dd>
                        </>
                      )}
                      {uk.bank.bic && (
                        <>
                          <dt className="text-sand-300">{uk.bankLabels.bic}</dt>
                          <dd>{uk.bank.bic}</dd>
                        </>
                      )}
                    </dl>
                  )}
                  <div className="flex-1" />
                </>
              ) : (
                <>
                  <p className="text-sand-100/75 leading-relaxed mb-8 flex-1">
                    {uk.fallback.bodyLead}{" "}
                    <a href={`mailto:${uk.links.donationsEmail}`} className="hover-underline text-sand-50">
                      {uk.links.donationsEmail}
                    </a>{" "}
                    {uk.fallback.bodyTail}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${uk.links.donationsEmail}?subject=${encodeURIComponent(uk.fallback.mailSubject)}`}
                      className={btn.lightOutline}
                    >
                      {uk.fallback.button}
                      <Arrow />
                    </a>
                  </div>
                </>
              )}
              <div className="mt-8 pt-8 border-t border-sand-100/10">
                <MailingListForm text={t.mailingList} idSuffix="uk" />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="reveal mt-12" delay={220}>
          <p className="text-sm text-sand-100/60 max-w-2xl leading-relaxed">{note}</p>
        </Reveal>
      </div>
    </section>
  );
}
