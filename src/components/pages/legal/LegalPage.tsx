import React, { useState } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import categories from "../../../data/commerce/categories.json";
export function LegalPage({ kind }: { kind: string }) {
  const initial: PolicyKey =
    kind === "payment-policy"
      ? "payment"
      : kind === "cancellation-policy"
        ? "cancellation"
        : kind === "privacy"
          ? "privacy"
          : "rental";
  const [active, setActive] = useState<PolicyKey>(initial);
  const [optional, setOptional] = useState(true);
  const policy = policyLibrary[active];
  return (
    <div className="public-site legal-hub">
      <PublicHeader />
      <main>
        <section className="legal-hero">
          <span>LEGAL & CUSTOMER INFORMATION</span>
          <h1>
            Terms, policies and
            <br />
            important information
          </h1>
          <p>
            Choose a category to read clear, organised information without
            leaving this page.
          </p>
          <small>
            ✓ Current policies · Effective 1 July 2026 · Victoria, Australia
          </small>
        </section>
        <section className="policy-switcher legal-width">
          <header>
            <span>POLICY LIBRARY</span>
            <h2>One place for every policy</h2>
            <p>
              Select a category. Its complete content updates inside the card
              below.
            </p>
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
                Effective<small>1 July 2026</small>
              </b>
              <b>
                Version<small>3.2</small>
              </b>
              <b>
                Region<small>Victoria</small>
              </b>
              <b>
                Language<small>English</small>
              </b>
            </div>
            <blockquote>
              <b>Plain-language summary</b>
              <p>{policy.summary}</p>
            </blockquote>
            <div className="policy-sections">
              {completePolicySections(policy).map((section, index) => (
                <section key={section[0]}>
                  <i>{index + 1}</i>
                  <div>
                    <h3>{section[0]}</h3>
                    <p>{section[1]}</p>
                  </div>
                </section>
              ))}
            </div>
            {active === "cookies" && (
              <div className="cookie-preference">
                <div>
                  <b>Essential cookies</b>
                  <small>Always on for security and core site functions.</small>
                </div>
                <label>
                  <input
                    type="checkbox"
                    checked={optional}
                    onChange={(event) => setOptional(event.target.checked)}
                  />{" "}
                  Optional analytics {optional ? "on" : "off"}
                </label>
                <button type="button" onClick={() => setOptional(false)}>
                  Reject optional
                </button>
                <button type="button" onClick={() => setOptional(true)}>
                  Accept optional
                </button>
              </div>
            )}
            <footer>
              <p>
                The accepted quotation and any written special conditions form
                part of the agreement for a specific booking.
              </p>
              <a href="/contact">Ask a policy question →</a>
            </footer>
          </article>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
