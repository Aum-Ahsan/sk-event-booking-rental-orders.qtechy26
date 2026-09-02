import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import pageData from "../../../data/pages/help-centre.json";
import { HelpHeroSection } from "./sections/HelpHeroSection";
import { HelpTopicsSection } from "./sections/HelpTopicsSection";
import { PopularHelpSection } from "./sections/PopularHelpSection";
import { DeliveryGuidanceSection } from "./sections/DeliveryGuidanceSection";
import { SafeUseSection } from "./sections/SafeUseSection";
import { PolicyLinksSection } from "./sections/PolicyLinksSection";
import { SupportContactSection } from "./sections/SupportContactSection";

export function HelpCentrePage() {
  const [sent, setSent] = useState(false);
  const jump = (id: string) =>
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <div className="public-site help-centre">
      <PublicHeader />
      <main>
        <HelpHeroSection />
        <HelpTopicsSection />
        <PopularHelpSection />
        <article id="booking-article" className="help-article">
          <div className="help-width">
            <aside>
              <b>{pageData.article.sidebar.title}</b>
              {pageData.article.sidebar.links.map(l => (
                <a key={l.text} href={l.href}>{l.text}</a>
              ))}
            </aside>
            <div>
              <span>{pageData.article.eyebrow}</span>
              <h1>{pageData.article.title}</h1>
              <p className="article-lead">{pageData.article.lead}</p>
              <blockquote>{pageData.article.quote}</blockquote>
              
              {pageData.article.sections.map((sec, i) => (
                <React.Fragment key={sec.id}>
                  <h2 id={sec.id}>{sec.title}</h2>
                  <p>{sec.text}</p>
                  {i === 0 && (
                    <div id="change-options" className="change-cards">
                      {pageData.article.options.map((x, j) => (
                        <article key={x[0]}>
                          <i>{j + 1}</i>
                          <b>{x[0]}</b>
                          <small>{x[1]}</small>
                        </article>
                      ))}
                    </div>
                  )}
                  {i === 0 && <div className="article-note">{pageData.article.note}</div>}
                </React.Fragment>
              ))}
              <div className="article-helpful">
                {pageData.article.helpful.text} 
                <button>{pageData.article.helpful.yes}</button>
                <button>{pageData.article.helpful.no}</button>
                <a href={pageData.article.helpful.contactHref}>{pageData.article.helpful.contact}</a>
              </div>
            </div>
          </div>
        </article>
        <DeliveryGuidanceSection />
        <SafeUseSection />
        <PolicyLinksSection />
        <SupportContactSection />
        {sent && (
          <section id="support-received" className="support-received">
            <i>✓</i>
            <div>
              <span>{pageData.support.received.eyebrow}</span>
              <h2>{pageData.support.received.title}</h2>
              <p>{pageData.support.received.description}</p>
              <b>{pageData.support.received.reference}</b>
              <dl>
                {pageData.support.received.details.map(d => (
                  <div key={d.label}>
                    <dt>{d.label}</dt>
                    <dd>{d.value}</dd>
                  </div>
                ))}
              </dl>
              {pageData.support.received.links.map(l => (
                <a key={l.text} href={l.href}>{l.text}</a>
              ))}
            </div>
          </section>
        )}
      </main>
      <PublicFooter />
    </div>
  );
}
