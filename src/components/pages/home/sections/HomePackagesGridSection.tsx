import React from "react";
import pageData from "../../../../data/pages/home.json";

export function HomePackagesGridSection() {
  return (
    <section className="hg-section">
      <div className="hg-container">
        <div className="hg-heading">
          <div className="hg-heading-text">
            <div className="hg-eyebrow">{pageData.packagesGrid?.eyebrow || 'POPULAR EVENT STARTERS'}</div>
            <h2>{pageData.packagesGrid?.title || 'A simpler way to hire'}</h2>
            <p>{pageData.packagesGrid?.description || 'Start with a clear package, then customise products, colours and service.'}</p>
          </div>
          <a href="/packages" className="hg-guide-link">
            {pageData.packagesGrid?.ctaText || 'View package guide →'}
          </a>
        </div>
        
        <div className="hg-grid">
          {pageData.packages?.map((pkg) => (
            <article key={pkg.name} className="hg-card">
              <div className="hg-image-container">
                <img src={pkg.image} alt={pkg.name} className="hg-image" />
                <span className="hg-tag">{pkg.tag}</span>
                <button className="hg-heart-btn" aria-label="Add to favourites">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>
              
              <div className="hg-content">
                <div className="hg-category">{pkg.category}</div>
                <h3 className="hg-name">{pkg.name}</h3>
                <div className="hg-guests">{pkg.guests}</div>
                
                <ul className="hg-items">
                  {pkg.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                <div className="hg-price-wrap">
                  <div className="hg-price">{pkg.price}</div>
                  <div className="hg-price-sub">{pkg.priceSubtext}</div>
                </div>
                
                <a href={pkg.url} className="hg-btn">
                  {pkg.buttonText}
                </a>
                
                <a href="#compare" className="hg-compare">
                  {pkg.compareText}
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="hg-banner">
          <div className="hg-banner-text">
            <strong>{pageData.packagesGrid?.bannerText || 'Packages are flexible.'}</strong> {pageData.packagesGrid?.bannerSubtext || 'Swap colours, change quantities, add accessories or request a complete custom plan.'}
          </div>
          <a href="/contact" className="hg-banner-link">
            {pageData.packagesGrid?.bannerCta || 'Ask about a package'}
          </a>
        </div>
      </div>
    </section>
  );
}
