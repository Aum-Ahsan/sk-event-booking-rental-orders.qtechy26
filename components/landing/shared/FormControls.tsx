"use client";
import React from "react";

export function Field({
  label,
  value,
  wide = false,
  area = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
  area?: boolean;
}) {
  return (
    <label className={wide ? "wide-field" : ""}>
      <span>{label}</span>
      {area ? (
        <textarea defaultValue={value} />
      ) : (
        <input defaultValue={value} />
      )}
    </label>
  );
}

export function ReviewBlock({
  title,
  rows,
}: {
  title: string;
  rows: Array<[string, string]>;
}) {
  return (
    <article className="review-block">
      <h3>{title}</h3>
      {rows.map(([label, value]) => (
        <p key={label}>
          <span>{label}</span>
          <b>{value}</b>
        </p>
      ))}
    </article>
  );
}
