import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

export function DeliveryGuidanceSection() {
  return (
    <section id="delivery-help" className="delivery-guidance help-width">
              <header>
                <span>{pageData.guidance.eyebrow}</span>
                <h2>{pageData.guidance.title}</h2>
              </header>
              {pageData.guidance.sections.map((sec, i) => (
                <article key={i}>
                  {i === 0 && <img src={sec.image} alt={sec.imageAlt} />}
                  <div>
                    <span>{sec.eyebrow}</span>
                    <h3>{sec.title}</h3>
                    <ul>
                      {sec.items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                    <a href={sec.link.href}>{sec.link.text}</a>
                  </div>
                  {i === 1 && <img src={sec.image} alt={sec.imageAlt} />}
                </article>
              ))}
            </section>
  );
}
