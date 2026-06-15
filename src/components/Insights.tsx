import React from "react";

import {
  customerSegments,
  monthlyPerformance,
} from "../data/businessData";

import { generateInsights } from "../utils/generateInsights";

export default function Insights() {
  const insights = generateInsights(monthlyPerformance, customerSegments);

  return (
    <section className="insights" id="insights">
      <div className="section-heading">
        <p className="eyebrow">Consulting Logic</p>
        <h2>Generated Strategic Recommendations</h2>
      </div>

      <div className="insight-grid">
        {insights.map((insight) => (
          <article className="insight-card" key={insight.title}>
            <span className={`status-dot ${insight.status}`} />

            <div>
              <h3>{insight.title}</h3>
              <p>{insight.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
