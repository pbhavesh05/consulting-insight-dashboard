import React from "react";

export default function ConsultingSummary() {
  return (
    <section className="summary" id="summary">
      <div className="section-heading">
        <p className="eyebrow">Executive Summary</p>
        <h2>Consulting Recommendation</h2>
      </div>

      <div className="summary-grid">
        <article>
          <h3>Problem</h3>
          <p>
            The company needs to understand whether growth is profitable,
            scalable, and supported by healthy customer behavior.
          </p>
        </article>

        <article>
          <h3>Data Observed</h3>
          <p>
            Revenue, costs, profit margin, customer growth, churn, and segment
            performance were reviewed across multiple months.
          </p>
        </article>

        <article>
          <h3>Key Insight</h3>
          <p>
            Revenue and profit margin are improving, while churn is concentrated
            in smaller customer segments.
          </p>
        </article>

        <article>
          <h3>Recommendation</h3>
          <p>
            Prioritize enterprise and mid-market customers while improving
            retention programs for smaller accounts.
          </p>
        </article>

        <article>
          <h3>Expected Business Impact</h3>
          <p>
            Better segment focus can increase marketing efficiency, protect
            recurring revenue, and improve long-term profitability.
          </p>
        </article>
      </div>
    </section>
  );
}