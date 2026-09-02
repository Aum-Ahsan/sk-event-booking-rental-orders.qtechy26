import React from "react";
import footerData from "../../data/pages/footer.json";

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="footer-inner">
        <div className="footer-about">
          <b className="footer-column-title">{footerData.about.title}</b>
          <a
            className="footer-brand-logo"
            href={footerData.about.brand.href}
            aria-label={footerData.about.brand.ariaLabel}
          >
            <img
              src={footerData.about.brand.logoSrc}
              alt={footerData.about.brand.logoAlt}
            />
          </a>
          <p>{footerData.about.description}</p>
          <small>{footerData.about.notice}</small>
        </div>
        
        {footerData.columns.map((col) => (
          <div className="footer-links" key={col.title}>
            <b>{col.title}</b>
            {col.links.map(l => <a href={l.href} key={l.text}>{l.text}</a>)}
          </div>
        ))}
        
        <div className="footer-connect">
          <section className="footer-social">
            <img
              src={footerData.social.logoSrc}
              alt={footerData.social.logoAlt}
            />
            <div>
              <b>{footerData.social.title}</b>
              <nav aria-label={footerData.social.ariaLabel}>
                {footerData.social.links.map(l => (
                  <a href={l.href} aria-label={l.ariaLabel} key={l.href}>
                    {l.text}
                  </a>
                ))}
              </nav>
            </div>
          </section>
          <section>
            <b>{footerData.payment.title}</b>
            <div
              className="payment-marks"
              aria-label={footerData.payment.ariaLabel}
            >
              {footerData.payment.methods.map(m => <span key={m}>{m}</span>)}
            </div>
            <small>{footerData.payment.notice}</small>
          </section>
        </div>
        <div className="footer-bottom">
          <span>{footerData.bottom.copyright}</span>
          <span>{footerData.bottom.location}</span>
        </div>
      </div>
    </footer>
  );
}
