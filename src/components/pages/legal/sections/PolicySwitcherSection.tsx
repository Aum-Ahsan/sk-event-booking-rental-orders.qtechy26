import React from "react";
import { policyLibrary } from "../../faq/FaqPage";
import pageData from "../../../../data/pages/legal.json";

export type PolicyKey = keyof typeof policyLibrary;

interface PolicySwitcherSectionProps {
  active: PolicyKey;
  setActive: (key: PolicyKey) => void;
  policy: (typeof policyLibrary)[PolicyKey];
  optional: boolean;
  setOptional: (val: boolean) => void;
}

export function PolicySwitcherSection({
  active,
  setActive,
  policy,
  optional,
  setOptional,
}: PolicySwitcherSectionProps) {
  return (
    <section className="policy-switcher legal-width">
              <header>
                <span>{pageData.extracted.text_2}</span>
                <h2>{pageData.extracted.text_3}</h2>
                <p>
                  {pageData.extracted.text_4}</p>
              </header>
              <nav aria-label="Terms and policy categories">
                {(Object.keys(policyLibrary) as PolicyKey[]).map((key) => (
                  <button
                    type="button"
                    className={active === key ? "active" : ""}
                    aria-pressed={active === key}
                    onClick={() => setActive(key)}
                    key={key}
                  >
                    <i>{policyLibrary[key].icon}</i>
                    <span>{policyLibrary[key].label}</span>
                  </button>
                ))}
              </nav>
              <article className="dynamic-policy-card" aria-live="polite">
                <header>
                  <span>{policy.label.toUpperCase()}</span>
                  <h2>{policy.title}</h2>
                  <p>{policy.intro}</p>
                </header>
                <div className="policy-meta">
                  <b>
                    {pageData.extracted.text_5}<small>{pageData.extracted.text_6}</small>
                  </b>
                  <b>
                    {pageData.extracted.text_7}<small>{pageData.extracted.text_8}</small>
                  </b>
                  <b>
                    {pageData.extracted.text_9}<small>{pageData.extracted.text_10}</small>
                  </b>
                  <b>
                    {pageData.extracted.text_11}<small>{pageData.extracted.text_12}</small>
                  </b>
                </div>
                <blockquote>
                  <b>{pageData.extracted.text_13}</b>
                  <p>{policy.summary}</p>
                </blockquote>
                <div className="policy-sections">
                  {policy.sections.map((section: any, index: number) => (
                    <section key={section.title}>
                      <i>{index + 1}</i>
                      <div>
                        <h3>{section.title}</h3>
                        <p>{section.content}</p>
                      </div>
                    </section>
                  ))}
                </div>
                {active === "cookies" && (
                  <div className="cookie-preference">
                    <div>
                      <b>{pageData.extracted.text_14}</b>
                      <small>{pageData.extracted.text_15}</small>
                    </div>
                    <label>
                      <input
                        type="checkbox"
                        checked={optional}
                        onChange={(event) => setOptional(event.target.checked)}
                      />{" "}
                      {pageData.extracted.text_16}{optional ? "on" : "off"}
                    </label>
                    <button type="button" onClick={() => setOptional(false)}>
                      {pageData.extracted.text_17}</button>
                    <button type="button" onClick={() => setOptional(true)}>
                      {pageData.extracted.text_18}</button>
                  </div>
                )}
                <footer>
                  <p>
                    {pageData.extracted.text_19}</p>
                  <a href="/contact">{pageData.extracted.text_20}</a>
                </footer>
              </article>
            </section>
  );
}
