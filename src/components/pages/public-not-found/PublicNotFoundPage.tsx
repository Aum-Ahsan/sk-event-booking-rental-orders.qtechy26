import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
export function PublicNotFoundPage() {
  return (
    <div className="public-site">
      <PublicHeader />
      <main>
        <section className="public-result">
          <i>404</i>
          <div className="eyebrow">PAGE NOT FOUND</div>
          <h1>This page is not part of the public landing site.</h1>
          <p>
            Customer and admin applications are intentionally separated from
            public navigation. Use the public catalogue, quotation or contact
            pages to continue.
          </p>
          <div className="hero-actions">
            <a className="public-cta" href="/">
              Return home
            </a>
            <a className="outline-cta" href="/contact">
              Contact support
            </a>
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
