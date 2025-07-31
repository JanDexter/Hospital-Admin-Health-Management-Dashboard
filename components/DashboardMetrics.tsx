import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Users, Calendar, Bed, AlertTriangle, TrendingUp, Activity } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

function MetricCard({ title, value, description, icon, trend }: MetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="flex items-center pt-1">
            <TrendingUp className={`h-4 w-4 ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`} />
            <span className={`text-xs ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '+' : ''}{trend.value}%
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function DashboardMetrics() {
  const metrics = [
    {
      title: "Total Patients",
      value: "1,247",
      description: "Active patients in system",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      trend: { value: 12, isPositive: true }
    },
    {
      title: "Today's Appointments",
      value: "89",
      description: "Scheduled for today",
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
      trend: { value: 8, isPositive: true }
    },
    {
      title: "Bed Occupancy",
      value: "87%",
      description: "245 of 280 beds occupied",
      icon: <Bed className="h-4 w-4 text-muted-foreground" />,
      trend: { value: 5, isPositive: false }
    },
    {
      title: "Critical Alerts",
      value: "3",
      description: "Require immediate attention",
      icon: <AlertTriangle className="h-4 w-4 text-red-500" />,
    },
    {
      title: "Monthly Revenue",
      value: "$847K",
      description: "Current month earnings",
      icon: <Activity className="h-4 w-4 text-muted-foreground" />,
      trend: { value: 15, isPositive: true }
    },
    {
      title: "Staff on Duty",
      value: "234",
      description: "Currently active staff",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </div>
  );
}