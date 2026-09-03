import React from "react";
import pageData from "../../../../data/pages/help-centre.json";

interface HelpTopicsSectionProps {
  jump: (id: string) => void;
}

export function HelpTopicsSection({ jump }: HelpTopicsSectionProps) {
  return (
    <section className="help-topics help-width">
              <header>
                <span>{pageData.topics.eyebrow}</span>
                <h2>{pageData.topics.title}</h2>
                <p>{pageData.topics.description}</p>
              </header>
              <div>
                {pageData.topics.items.map((x, i) => (
                  <button type="button" onClick={() => jump(x[2])} key={x[0]}>
                    <i>{["▤", "◇", "▣", "↻", "$", "!", "♡"][i]}</i>
                    <span>
                      <b>{x[0]}</b>
                      <small>{x[1]}</small>
                    </span>
                    <em>＋</em>
                  </button>
                ))}
              </div>
            </section>
  );
}
