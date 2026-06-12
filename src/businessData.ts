export type MonthlyPerformance = { 
    month:string;
    revenue:number;
    costs:number;
    profitMargin:number; 
}; 

export type CustomerSegment = { 
    segment:string;
    customers:number; 
    revenue:number; 
    churnRate:number; 
    growthRate:number; 
}; 

export const monthlyPerformance: MonthlyPerformance[] = [ 
  { month: "Jan", revenue: 120000, costs: 78000, profitMargin: 35 },
  { month: "Feb", revenue: 132000, costs: 85000, profitMargin: 36 },
  { month: "Mar", revenue: 141000, costs: 92000, profitMargin: 35 },
  { month: "Apr", revenue: 158000, costs: 99000, profitMargin: 37 },
  { month: "May", revenue: 176000, costs: 104000, profitMargin: 41 },
  { month: "Jun", revenue: 193000, costs: 111000, profitMargin: 42 },
];

export const customerSegments: CustomerSegment[] = [  
    {
        segment: "Enterprise",
        customers: 68,
        revenue: 420000,
        churnRate: 4.2,
        growthRate: 18,
      },
      {
        segment: "Mid-Market",
        customers: 145,
        revenue: 310000,
        churnRate: 7.5,
        growthRate: 14,
      },
      {
        segment: "Small Business",
        customers: 320,
        revenue: 190000,
        churnRate: 13.8,
        growthRate: 9,
      },
      {
        segment: "Startup",
        customers: 210,
        revenue: 115000,
        churnRate: 16.5,
        growthRate: 6,
      },
    
] 
export const kpiData = {
    revenue: 193000,
    costs: 111000,
    profit: 82000,
    profitMargin: 42,
    customerChurn: 8.9,
    customerGrowth: 14.2,
};