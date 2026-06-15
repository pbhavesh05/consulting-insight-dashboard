import React from "react";
import Charts from "./Charts";
import KPICard from "./KPICard";
import { kpiData } from "../data/businessData";

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`;
}

export default function Dashboard() {
  return (
    <main className="dashboard" id="dashboard">
      <div className="section-heading">
        <p className="eyebrow">Client Dashboard</p>
        <h2>Company Performance Snapshot</h2>
      </div>

      <section className="kpi-grid">
        <KPICard
          label="Revenue"
          value={formatCurrency(kpiData.revenue)}
          change="+14.8% vs prior month"
          tone="positive"
        />

        <KPICard
          label="Costs"
          value={formatCurrency(kpiData.costs)}
          change="+6.7% vs prior month"
          tone="neutral"
        />

        <KPICard
          label="Profit"
          value={formatCurrency(kpiData.profit)}
          change="+18.4% vs prior month"
          tone="positive"
        />

        <KPICard
          label="Profit Margin"
          value={`${kpiData.profitMargin}%`}
          change="+7 pts since January"
          tone="positive"
        />

        <KPICard
          label="Customer Churn"
          value={`${kpiData.customerChurn}%`}
          change="Monitor smaller segments"
          tone="warning"
        />

        <KPICard
          label="Customer Growth"
          value={`${kpiData.customerGrowth}%`}
          change="Healthy acquisition trend"
          tone="positive"
        />
      </section>

      <Charts />
    </main>
  );
}
