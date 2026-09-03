import React from "react";
import pageData from "../../../../data/pages/blog-resource-centre.json";

interface NewsletterSectionProps {
  subscribed: boolean;
  setSubscribed: (val: boolean) => void;
}

export function NewsletterSection({
  subscribed,
  setSubscribed,
}: NewsletterSectionProps) {
  return (
    <section className="newsletter">
              <div>
                <b>{pageData.extracted.text_28}</b>
                <p>{pageData.extracted.text_29}</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <input type="email" required placeholder={pageData.subscribe.placeholder} />
                <button>{subscribed ? "Subscribed ✓" : "Subscribe"}</button>
                <small>
                  {subscribed
                    ? "✓ You’re subscribed. Check your inbox for confirmation."
                    : "No spam. Unsubscribe whenever you like."}
                </small>
              </form>
            </section>
  );
}
