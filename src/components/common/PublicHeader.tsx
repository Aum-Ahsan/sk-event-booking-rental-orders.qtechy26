import React from "react";
import headerData from "../../data/pages/header.json";

export function PublicHeader({ active = "" }: { active?: string }) {
  return (
    <>
      <div className="announcement">
        <span className="announcement-msg">{headerData.announcement.text}</span>
        <span className="announcement-link">{headerData.announcement.linkText}</span>
      </div>
      <header className="public-header">
        <a
          className="public-brand brand-image-link"
          href={headerData.brand.href}
          aria-label={headerData.brand.ariaLabel}
        >
          <img
            src={headerData.brand.logoSrc}
            alt={headerData.brand.logoAlt}
          />
        </a>
        <nav>
          {headerData.navLinks.map((x) => (
            <a
              className={x.text === active ? "nav-active" : ""}
              aria-current={x.text === active ? "page" : undefined}
              href={x.href}
              key={x.text}
            >
              {x.text}
            </a>
          ))}
        </nav>
        <div>
          <a className="icon-link" href="/search" aria-label="Search">
            ⌕
          </a>
          <a className="icon-link" href="/basket" aria-label="Basket">
            Bag <sup>3</sup>
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">☰</summary>
            <div>
              {headerData.navLinks.map((x) => (
                <a
                  className={x.text === active ? "nav-active" : ""}
                  href={x.href}
                  key={x.text}
                >
                  {x.text}
                </a>
              ))}
              {headerData.mobileExtraLinks.map((x) => (
                <a href={x.href} key={x.text}>{x.text}</a>
              ))}
            </div>
          </details>
        </div>
      </header>
    </>
  );
}
