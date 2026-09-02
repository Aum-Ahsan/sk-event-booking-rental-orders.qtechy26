import React, { useState, useEffect } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import pageData from "../../../data/pages/faq.json";

function completeFaqItems(group: { name: string; items: readonly (readonly [string, string])[] }) {
  const topic = group.name.toLowerCase();
  const additional: [string, string][] = pageData.completeFaqItems.map(item => [
    item.q.replace("{topic}", topic),
    item.a.replace("{topic}", topic)
  ]);
  return [...group.items, ...additional.slice(0, Math.max(0, 10 - group.items.length))];
}

export function FaqPage() {
  const [active, setActive] = useState(pageData.directory.allQuestions);
  const [search, setSearch] = useState("");
  const groups = pageData.faqGroups
    .map((group) => ({
      ...group,
      items: completeFaqItems(group).filter((item) =>
        `${item[0]} ${item[1]}`.toLowerCase().includes(search.toLowerCase()),
      ),
    }))
    .filter(
      (group) =>
        (active === pageData.directory.allQuestions || group.name === active) &&
        group.items.length,
    );
  
  return (
    <div className="public-site faq-page">
      <PublicHeader />
      <main>
        <section className="faq-hero">
          <div>
            <span>{pageData.hero.eyebrow}</span>
            <h1>{pageData.hero.title}</h1>
            <p>{pageData.hero.description}</p>
            <label>
              <i>⌕</i>
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder={pageData.hero.placeholder}
              />
              <button type="button" onClick={() => setSearch("")}>
                {search ? "Clear" : "Search"}
              </button>
            </label>
          </div>
          <img src={pageData.hero.image} alt={pageData.hero.imageAlt} />
        </section>
        
        <section className="faq-directory">
          <header>
            <span>{pageData.directory.eyebrow}</span>
            <h2>{pageData.directory.title}</h2>
          </header>
          <nav aria-label="FAQ categories">
            <button
              className={active === pageData.directory.allQuestions ? "active" : ""}
              onClick={() => setActive(pageData.directory.allQuestions)}
            >
              {pageData.directory.allQuestions}
            </button>
            {pageData.faqGroups.map((group) => (
              <button
                className={active === group.name ? "active" : ""}
                onClick={() => setActive(group.name)}
                key={group.name}
              >
                <i>{group.icon}</i>
                {group.name}
              </button>
            ))}
          </nav>
          <div className="faq-groups">
            {groups.map((group) => (
              <section key={group.name}>
                <div>
                  {group.items.map((item, index) => (
                    <details open={index === 0 && groups.length === 1} key={item[0]}>
                      <summary>
                        {item[0]}
                        <span>＋</span>
                      </summary>
                      <p>{item[1]}</p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
            {!groups.length && (
              <aside>
                <h2>{pageData.empty.title} “{search}”.</h2>
                <p>{pageData.empty.description}</p>
                <button onClick={() => setSearch("")}>{pageData.empty.button}</button>
              </aside>
            )}
          </div>
        </section>
        
        <section className="faq-support">
          <div>
            <span>{pageData.support.eyebrow}</span>
            <h2>{pageData.support.title}</h2>
            <p>{pageData.support.description}</p>
          </div>
          {pageData.support.links.map(l => (
            <a key={l.text} href={l.href}>{l.text}</a>
          ))}
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}

export const policyLibrary = pageData.policyLibrary;
