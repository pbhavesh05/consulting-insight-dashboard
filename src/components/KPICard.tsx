
import React from "react";

type KPICardProps = {
    label: string;
    value: string;
    change: string;
    tone?: "positive" | "warning" | "neutral";
  };
  
  export default function KPICard({
    label,
    value,
    change,
    tone = "neutral",
  }: KPICardProps) {
    return (
      <article className="kpi-card">
        <p className="kpi-card__label">{label}</p>
        <h3>{value}</h3>
        <span className={`kpi-card__change ${tone}`}>{change}</span>
      </article>
    );
  }
