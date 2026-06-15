import type {
    CustomerSegment,
    MonthlyPerformance,
  } from "../data/businessData";
  
  export type Insight = {
    title: string;
    description: string;
    status: "positive" | "warning" | "neutral";
  };
  
  export function generateInsights(
    monthlyData: MonthlyPerformance[],
    segments: CustomerSegment[]
  ): Insight[] {
    const insights: Insight[] = [];
  
    const firstMonth = monthlyData[0];
    const lastMonth = monthlyData[monthlyData.length - 1];
  
    const revenueGrowth =
      ((lastMonth.revenue - firstMonth.revenue) / firstMonth.revenue) * 100;
  
    const costGrowth =
      ((lastMonth.costs - firstMonth.costs) / firstMonth.costs) * 100;
  
    const averageChurn =
      segments.reduce((total, item) => total + item.churnRate, 0) /
      segments.length;
  
    const bestSegment = segments.reduce((best, current) =>
      current.revenue > best.revenue ? current : best
    );
  
    const marginImproved = lastMonth.profitMargin > firstMonth.profitMargin;
  
    // Consulting-style rule: compare cost growth against revenue growth.
    if (costGrowth > revenueGrowth) {
      insights.push({
        title: "Efficiency Opportunity",
        description:
          "Costs are growing faster than revenue. Review operating expenses, vendor contracts, and delivery efficiency.",
        status: "warning",
      });
    } else {
      insights.push({
        title: "Healthy Revenue Leverage",
        description:
          "Revenue is growing faster than costs, suggesting the company is gaining operating leverage.",
        status: "positive",
      });
    }
  
    if (averageChurn > 10) {
      insights.push({
        title: "Retention Risk",
        description:
          "Customer churn is elevated. A retention strategy focused on onboarding, support, and customer success could protect revenue.",
        status: "warning",
      });
    } else {
      insights.push({
        title: "Stable Customer Base",
        description:
          "Average churn is manageable, which supports predictable recurring revenue.",
        status: "positive",
      });
    }
  
    insights.push({
      title: `${bestSegment.segment} Segment Leads Revenue`,
      description: `${bestSegment.segment} customers generate the highest revenue. Marketing and sales resources should prioritize this segment.`,
      status: "positive",
    });
  
    if (marginImproved) {
      insights.push({
        title: "Scaling Well",
        description:
          "Profit margin is improving over time, which indicates the company is scaling more efficiently.",
        status: "positive",
      });
    }
  
    return insights;
  }