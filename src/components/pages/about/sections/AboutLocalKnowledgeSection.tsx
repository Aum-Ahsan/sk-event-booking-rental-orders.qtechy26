import React from "react";
import pageData from "../../../../data/pages/about.json";

const AREA_POSITIONS: Record<string, React.CSSProperties> = {
  "Melbourne CBD":  { top: "12%",  left: "55%",  transform: "translateX(-50%)" },
  "Western suburbs":{ top: "45%",  left: "4px" },
  "Inner North":    { top: "45%",  right: "4px" },
  "Inner East":     { bottom: "22%", left: "28%" },
  "Bayside":        { bottom: "10%", right: "4px" },
};

export function AboutLocalKnowledgeSection() {
  const { localMap } = pageData;
  return (
    <section className="local-knowledge">
      <div
        className="real-map"
        style={{ position: "relative", minHeight: 340, borderRadius: 12, overflow: "hidden" }}
      >
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=144.55%2C-38.05%2C145.35%2C-37.55&layer=mapnik&marker=-37.814%2C144.963"
          title="Melbourne service area map"
          loading="lazy"
          style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            border: 0, filter: "saturate(0.72) contrast(0.94)"
          }}
        />
        {/* SK centre marker */}
        <span
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 2,
            background: "#17344c", color: "#fff",
            width: 44, height: 44, borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 900, fontSize: 13, letterSpacing: 1,
            boxShadow: "0 4px 14px rgba(11,52,87,.35)"
          }}
        >
          SK
        </span>
        {/* Area labels */}
        {localMap.areas.map((area) => (
          <span
            key={area}
            style={{
              position: "absolute",
              zIndex: 2,
              background: "#fff",
              color: "#c0392b",
              fontWeight: 800,
              fontSize: 12,
              padding: "5px 10px",
              borderRadius: 20,
              whiteSpace: "nowrap",
              boxShadow: "0 3px 10px rgba(11,52,87,.18)",
              ...AREA_POSITIONS[area],
            }}
          >
            {area}
          </span>
        ))}
      </div>
      <div>
        <span>{localMap.eyebrow}</span>
        <h2>{localMap.title}</h2>
        <p>{localMap.description}</p>
        <ul>
          {localMap.services.map((s) => (
            <li key={s.title}>
              <b>{s.title}</b>
              <small>{s.description}</small>
            </li>
          ))}
        </ul>
        <a href={localMap.linkHref}>{localMap.linkText}</a>
      </div>
    </section>
  );
}
