
import React from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  customerSegments,
  monthlyPerformance,
} from "../data/businessData";

const chartColors = ["#1d4ed8", "#0f766e", "#f59e0b", "#dc2626"];

export default function Charts() {
  return (
    <section className="charts">
      <div className="section-heading">
        <p className="eyebrow">Performance View</p>
        <h2>Business Performance Analysis</h2>
      </div>

      <div className="chart-grid">
        <article className="chart-card">
          <h3>Revenue vs Costs</h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#1d4ed8"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="costs"
                stroke="#dc2626"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </article>

        <article className="chart-card">
          <h3>Profit Margin Over Time</h3>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={monthlyPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="profitMargin"
                stroke="#0f766e"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </article>

        <article className="chart-card">
          <h3>Customer Segment Breakdown</h3>

          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={customerSegments}
                dataKey="customers"
                nameKey="segment"
                outerRadius={95}
                label
              >
                {customerSegments.map((segment, index) => (
                  <Cell
                    key={segment.segment}
                    fill={chartColors[index % chartColors.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </article>

        <article className="chart-card">
          <h3>Churn by Segment</h3>

          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={customerSegments}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="segment" />
              <YAxis />
              <Tooltip />

              <Bar
                dataKey="churnRate"
                fill="#f59e0b"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </article>
      </div>
    </section>
  );
}
