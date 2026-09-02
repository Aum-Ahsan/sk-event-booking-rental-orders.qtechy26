import React from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import { type BlogGuide, blogGuides, articleSections } from "../../../../app/blogData";
import pageData from "../../../data/pages/blog-article.json";

export function BlogArticlePage({ guide }: { guide: BlogGuide }) {
  const sections =
    articleSections[guide.category] || articleSections["Planning basics"];
  const related = blogGuides
    .filter(
      (item) => item.category === guide.category && item.slug !== guide.slug,
    )
    .slice(0, 3);
  return (
    <div className="public-site blog-resource article-detail">
      <PublicHeader active="Blog" />
      <main>
        <div className="detail-back">
          <a href="/blog">{pageData.backLink}</a>
        </div>
        <article className="guide-article">
          <header>
            <div>
              <span>{guide.category.toUpperCase()} GUIDE</span>
              <h1>{guide.title}</h1>
              <p>{guide.summary}</p>
              <small>
                {pageData.meta.author} · {pageData.meta.updated} ·{" "}
                {guide.read}
              </small>
            </div>
            <img src={guide.image} alt={guide.title} />
          </header>
          <div className="article-layout">
            <aside>
              <b>{pageData.sidebar.title}</b>
              {sections.map((section, index) => (
                <a href={"#guide-" + (index + 1)} key={section[0]}>
                  {index + 1}. {section[0]}
                </a>
              ))}
              <a href="/request-quote">{pageData.sidebar.helpLink}</a>
            </aside>
            <div className="article-copy">
              <p>
                {guide.summary} {pageData.intro[0]}
              </p>
              <p>{pageData.intro[1]}</p>
              <blockquote>
                <b>{pageData.quote.label}</b> {pageData.quote.text}
              </blockquote>
              {sections.map((section, index) => (
                <section id={"guide-" + (index + 1)} key={section[0]}>
                  <h2>
                    {index + 1}. {section[0]}
                  </h2>
                  <p>{section[1]}</p>
                  <p>
                    For “{guide.title},” {pageData.sectionFooter}
                  </p>
                  {index === 2 && (
                    <img
                      src={guide.image}
                      alt={guide.title + " planning example"}
                    />
                  )}
                </section>
              ))}
              <section className="article-tip">
                <h2>{pageData.tip.title}</h2>
                <p>{pageData.tip.text}</p>
              </section>
              <a className="public-cta" href="/request-quote">
                {pageData.cta}
              </a>
            </div>
          </div>
        </article>
        <section className="keep-planning editorial-section article-related">
          <span>{pageData.related.kickerPrefix} {guide.category.toUpperCase()}</span>
          <h2>{pageData.related.title}</h2>
          <div>
            {related.map((item) => (
              <article key={item.slug}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <a href={"/blog-" + item.slug}>{pageData.related.linkText}</a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
