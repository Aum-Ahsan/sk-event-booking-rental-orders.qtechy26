import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { Field } from "../../landing/shared/FormControls";
import pageData from "../../../data/pages/planning.json";

export function EventPlanningConsultationPage() {
  const [support, setSupport] = useState("Full event plan");

  return (
    <div className="public-site planning-consultation">
      <PublicHeader active="Event Planning" />
      <main>
        <section className="planning-hero">
          <img
            src={pageData.hero.image}
            alt={pageData.hero.imageAlt}
          />
          <div>
            <span>{pageData.hero.eyebrow}</span>
            <h1 dangerouslySetInnerHTML={{ __html: pageData.hero.title }} />
            <p>{pageData.hero.description}</p>
            <div>
              {pageData.hero.links.map(l => (
                <a key={l.text} href={l.href}>{l.text}</a>
              ))}
            </div>
            <small>{pageData.hero.small}</small>
          </div>
        </section>
        
        <section className="planning-section support-choice">
          <header>
            <span>{pageData.support.eyebrow}</span>
            <h2>{pageData.support.title}</h2>
            <p>{pageData.support.description}</p>
          </header>
          <div>
            {pageData.support.options.map((x, i) => (
              <button
                type="button"
                className={support === x[0] ? "selected" : ""}
                onClick={() => setSupport(x[0])}
                key={x[0]}
              >
                <i>{["◉", "✦", "⌖", "◎", "✓"][i]}</i>
                <b>{x[0]}</b>
                <small>{x[1]}</small>
                <em>{support === x[0] ? "Selected" : "Choose support →"}</em>
              </button>
            ))}
          </div>
        </section>
        
        <section className="planning-events">
          <div className="planning-section">
            <header>
              <span>{pageData.events.eyebrow}</span>
              <h2>{pageData.events.title}</h2>
              <p>{pageData.events.description}</p>
            </header>
            <div className="planning-event-grid">
              {pageData.events.items.map((x, i) => (
                <a
                  className={i === 0 ? "large" : ""}
                  href="/contact"
                  key={x[0]}
                >
                  <img src={x[2]} alt={x[0]} />
                  <span>
                    <b>{x[0]}</b>
                    <small>{x[1]}</small>
                    <em>Plan this event →</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
        
        <section className="planning-section practical-team">
          <div>
            <span>{pageData.teamwork.eyebrow}</span>
            <h2>{pageData.teamwork.title}</h2>
            <p>{pageData.teamwork.description}</p>
            <ul>
              {pageData.teamwork.items.map((x) => (
                <li key={x}>✓ {x}</li>
              ))}
            </ul>
            <a href={pageData.teamwork.linkHref}>{pageData.teamwork.linkText}</a>
          </div>
          <div className="planning-collage">
            {pageData.teamwork.images.map((img, i) => (
              <img key={i} src={img.src} alt={img.alt} />
            ))}
          </div>
        </section>
        
        <section className="planning-process">
          <div className="planning-section">
            <span>{pageData.process.eyebrow}</span>
            <h2>{pageData.process.title}</h2>
            <div>
              {pageData.process.items.map((x) => (
                <article key={x[0]}>
                  <i>{x[0]}</i>
                  <b>{x[1]}</b>
                  <p>{pageData.process.stepDescription}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        <section className="planning-section pricing-support">
          <header>
            <span>{pageData.pricing.eyebrow}</span>
            <h2>{pageData.pricing.title}</h2>
            <p>{pageData.pricing.description}</p>
          </header>
          <div>
            <article>
              <span>{pageData.pricing.consultation.eyebrow}</span>
              <h3>{pageData.pricing.consultation.price}</h3>
              <p>{pageData.pricing.consultation.description}</p>
              <ul>
                {pageData.pricing.consultation.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href={pageData.pricing.consultation.linkHref}>{pageData.pricing.consultation.linkText}</a>
            </article>
            <article>
              <span>{pageData.pricing.tailored.eyebrow}</span>
              <h3>{pageData.pricing.tailored.price}</h3>
              <p>{pageData.pricing.tailored.description}</p>
              <ul>
                {pageData.pricing.tailored.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <a href={pageData.pricing.tailored.linkHref}>{pageData.pricing.tailored.linkText}</a>
            </article>
          </div>
        </section>
        
        <section className="planning-section meet-team">
          <header>
            <span>{pageData.meetTeam.eyebrow}</span>
            <h2>{pageData.meetTeam.title}</h2>
          </header>
          <div>
            <article>
              <img
                src={pageData.meetTeam.planner.image}
                alt={pageData.meetTeam.planner.imageAlt}
              />
              <span>
                <b>{pageData.meetTeam.planner.title}</b>
                <small>{pageData.meetTeam.planner.description}</small>
                <a href={pageData.meetTeam.planner.linkHref}>{pageData.meetTeam.planner.linkText}</a>
              </span>
            </article>
            <article>
              <img
                src={pageData.meetTeam.operations.image}
                alt={pageData.meetTeam.operations.imageAlt}
              />
              <span>
                <b>{pageData.meetTeam.operations.title}</b>
                <small>{pageData.meetTeam.operations.description}</small>
                <a href={pageData.meetTeam.operations.linkHref}>{pageData.meetTeam.operations.linkText}</a>
              </span>
            </article>
          </div>
        </section>
        
        <section className="planning-thinking">
          <div className="planning-section">
            <header>
              <span>{pageData.insights.eyebrow}</span>
              <h2>{pageData.insights.title}</h2>
            </header>
            <div>
              {pageData.insights.items.map((x) => (
                <article key={x[0]}>
                  <img src={x[1]} alt={x[0]} />
                  <div>
                    <h3>{x[0]}</h3>
                    <p>{pageData.insights.itemDescription}</p>
                    <a href={pageData.insights.linkHref}>{pageData.insights.linkText}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        <section className="planning-section remembered">
          <div>
            <span>{pageData.remembered.eyebrow}</span>
            <h2>{pageData.remembered.title}</h2>
            <p>{pageData.remembered.quote}</p>
            <b>{pageData.remembered.author}</b>
            <a href={pageData.remembered.linkHref}>{pageData.remembered.linkText}</a>
          </div>
          <img
            src={pageData.remembered.image}
            alt={pageData.remembered.imageAlt}
          />
        </section>
        
        <section className="planning-cta">
          <div>
            <span>{pageData.cta.eyebrow}</span>
            <h2>{pageData.cta.title}</h2>
          </div>
          {pageData.cta.links.map((l, i) => (
            <a key={i} href={l.href}>{l.text}</a>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

const curatedPackages = pageData.curatedPackages;
