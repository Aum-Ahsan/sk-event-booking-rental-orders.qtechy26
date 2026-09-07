import React from "react";
import pageData from "../../../../data/pages/about.json";

export function AboutPeopleBehindSection() {
  const { team } = pageData;
  return (
    <section className="people-behind">
      <header>
        <span>{team.eyebrow}</span>
        <h2>{team.title}</h2>
        <p>{team.description}</p>
      </header>
      <div>
        {team.members.map((member) => (
          <article key={member.title}>
            <img src={member.image} alt={member.imageAlt} />
            <span>{member.role}</span>
            <h3>{member.title}</h3>
            <p>{member.description}</p>
            <a href={member.linkHref}>{member.linkText}</a>
          </article>
        ))}
      </div>
      <small>{team.note}</small>
    </section>
  );
}
