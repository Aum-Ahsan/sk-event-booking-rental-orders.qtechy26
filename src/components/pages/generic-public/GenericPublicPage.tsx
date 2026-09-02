import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/generic-public.json";

export const genericPages = pageData;

export function GenericPublicPage({ type }: { type: string }) {
  // Use a type assertion or key validation to safely access pageData
  const activeData = (pageData as any)[type] || (pageData as any)["packages"];

  return (
    <div className="public-site about-editorial">
      <PublicHeader active={type.charAt(0).toUpperCase() + type.slice(1)} />
      <main>
        <section className="about-main-hero">
          <div>
            <span>{activeData.eyebrow.toUpperCase()}</span>
            <h1>{activeData.title}</h1>
            <p>{activeData.text}</p>
            <div>
              <a href="/request-quote">{pageData.extracted.text_1}</a>
              <a href="/products">{pageData.extracted.text_2}</a>
            </div>
          </div>
          <figure>
            <img src={activeData.image} alt={activeData.title} />
            <figcaption>
              <b>{pageData.extracted.text_3}</b>
              <span>{pageData.extracted.text_4}</span>
            </figcaption>
          </figure>
        </section>
        <section className="about-expect">
          <header>
            <span>{pageData.extracted.text_5}</span>
            <h2>{pageData.extracted.text_6}</h2>
            <p>{pageData.extracted.text_7}</p>
          </header>
          <div>
            {activeData.items.map((x: [string, string], i: number) => (
              <article key={x[0]}>
                <i>{["✣", "▢", "▣", "◇"][i]}</i>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
