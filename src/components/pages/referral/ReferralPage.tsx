import React, { useState, useEffect } from "react";
import { PublicHeader } from "../../common/PublicHeader";
import { PublicFooter } from "../../common/PublicFooter";
import eventTypes from "../../../data/commerce/eventTypes.json";

type ReferralRecord = {
  id: number;
  referredName: string;
  referredEmail: string;
  eventType: string;
  status: string;
  commissionCents: number;
  createdAt: string;
};

export function ReferralPage() {
  const [records, setRecords] = useState<ReferralRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const load = () =>
    fetch("/api/referrals")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((x) => setRecords(x.referrals || []))
      .catch(() => setRecords([]))
      .finally(() => setLoading(false));
  useEffect(() => {
    load();
  }, []);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice("");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const response = await fetch("/api/referrals", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        referredName: data.get("referredName"),
        referredEmail: data.get("referredEmail"),
        eventType: data.get("eventType"),
      }),
    });
    const result = (await response.json()) as { error?: string };
    if (!response.ok) {
      setError(result.error || "The referral could not be saved.");
      return;
    }
    setNotice(
      "Referral saved. We’ll email the reference and track eligibility after the referred customer completes an eligible paid hire.",
    );
    form.reset();
    load();
  };
  const samples: ReferralRecord[] = [
    {
      id: -1,
      referredName: "Mia Chen",
      referredEmail: "m•••@example.com",
      eventType: "Wedding",
      status: "Qualified",
      commissionCents: 6200,
      createdAt: "2026-08-24",
    },
    {
      id: -2,
      referredName: "Noah Williams",
      referredEmail: "n•••@example.com",
      eventType: "Corporate event",
      status: "Pending",
      commissionCents: 0,
      createdAt: "2026-08-18",
    },
    {
      id: -3,
      referredName: "Ava Singh",
      referredEmail: "a•••@example.com",
      eventType: "Birthday & celebration",
      status: "Paid",
      commissionCents: 4800,
      createdAt: "2026-07-30",
    },
  ];
  const rows = records.length ? records : samples;
  return (
    <div className="public-site referral-public">
      <PublicHeader />
      <main className="referral-page">
        <section className="referral-hero">
          <div>
            <div className="eyebrow">Refer & earn</div>
            <h1>
              Share great events.
              <br />
              Earn referral rewards.
            </h1>
            <p>
              Refer a new customer directly from the public website. We track
              each referral by email and reference number, so no customer
              account is required.
            </p>
            <div>
              <a href="#refer-form">Refer someone</a>
              <a href="#referral-history">How rewards work</a>
            </div>
          </div>
          <img
            src="/images/hero-event.png"
            alt="A completed event created with SK Event Hire products"
          />
        </section>
        <section className="referral-kpis">
          {[
            ["Referral code", "ALEXEVENTS", "Copy and share"],
            ["Link clicks", "48", "Last 30 days"],
            [
              "Qualified referrals",
              String(
                Math.max(
                  6,
                  records.filter((x) => x.status === "Qualified").length,
                ),
              ),
              "Eligibility confirmed",
            ],
            ["Available earnings", "$186.00", "Payout ready"],
          ].map((x) => (
            <article key={x[0]}>
              <small>{x[0]}</small>
              <b>{x[1]}</b>
              <span>{x[2]}</span>
            </article>
          ))}
        </section>
        <section className="referral-grid">
          <form id="refer-form" onSubmit={submit}>
            <span>NEW REFERRAL</span>
            <h2>Refer someone planning an event</h2>
            <p>
              We use these details only to send and track the referral
              invitation.
            </p>
            <label>
              Your email address *
              <input
                name="referrerEmail"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Full name *
              <input
                name="referredName"
                required
                minLength={2}
                placeholder="Referral’s full name"
              />
            </label>
            <label>
              Email address *
              <input
                name="referredEmail"
                type="email"
                required
                placeholder="name@example.com"
              />
            </label>
            <label>
              Event type *
              <select name="eventType" required defaultValue="">
                <option value="" disabled>
                  Select event type
                </option>
                {eventTypes.map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </label>
            <label className="referral-consent">
              <input type="checkbox" required /> I confirm I have permission to
              share these contact details.
            </label>
            <button>Send and track referral →</button>
            {notice && (
              <p className="form-success" role="status">
                ✓ {notice}
              </p>
            )}
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
          </form>
          <aside>
            <span>YOUR SHARE LINK</span>
            <h2>One link for every invitation</h2>
            <code>skeventhire.com.au/r/ALEXEVENTS</code>
            <button
              onClick={() =>
                navigator.clipboard?.writeText(
                  "https://skeventhire.com.au/r/ALEXEVENTS",
                )
              }
            >
              Copy referral link
            </button>
            <ol>
              <li>
                <i>1</i>
                <b>Share your link</b>
                <small>
                  Send it only to people who asked for event-hire information.
                </small>
              </li>
              <li>
                <i>2</i>
                <b>They request a quote</b>
                <small>
                  The referral remains pending while eligibility is checked.
                </small>
              </li>
              <li>
                <i>3</i>
                <b>Eligible booking completes</b>
                <small>Your reward moves to approved and then available.</small>
              </li>
            </ol>
          </aside>
        </section>
        <section id="referral-history" className="referral-history">
          <header>
            <div>
              <span>REFERRAL ACTIVITY</span>
              <h2>Track referrals and rewards</h2>
            </div>
            <small>
              {loading
                ? "Loading saved referrals…"
                : `${rows.length} referrals shown`}
            </small>
          </header>
          <div className="referral-table">
            <b>Name</b>
            <b>Event</b>
            <b>Invited</b>
            <b>Status</b>
            <b>Reward</b>
            {rows.flatMap((x) => [
              <span key={`${x.id}n`}>
                <strong>{x.referredName}</strong>
                <small>{x.referredEmail}</small>
              </span>,
              <span key={`${x.id}e`}>{x.eventType}</span>,
              <span key={`${x.id}d`}>
                {new Date(x.createdAt).toLocaleDateString("en-AU")}
              </span>,
              <span
                className={`referral-status ${x.status.toLowerCase()}`}
                key={`${x.id}s`}
              >
                {x.status}
              </span>,
              <span key={`${x.id}c`}>
                {x.commissionCents
                  ? `$${(x.commissionCents / 100).toFixed(2)}`
                  : "—"}
              </span>,
            ])}
          </div>
        </section>
        <section className="referral-faq">
          <div>
            <span>REFERRAL QUESTIONS</span>
            <h2>How eligibility works</h2>
          </div>
          <div>
            {[
              [
                "When does a referral qualify?",
                "After a new customer uses the referral, confirms and pays for an eligible hire, completes the event and returns the equipment.",
              ],
              [
                "When is a reward available?",
                "Approved rewards become available after the event, return inspection and payment checks are complete.",
              ],
              [
                "Can I refer an existing customer?",
                "No. Referrals are for new customers who have not previously made an SK Event Hire enquiry or booking.",
              ],
              [
                "How are payments handled?",
                "We email the approved reward options to the referrer. No customer account is required to receive status updates.",
              ],
            ].map((x, i) => (
              <details open={i === 0} key={x[0]}>
                <summary>
                  {x[0]}
                  <b>＋</b>
                </summary>
                <p>{x[1]}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <PublicFooter />
    </div>
  );
}
