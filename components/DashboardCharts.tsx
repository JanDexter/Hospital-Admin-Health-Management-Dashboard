import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';

const patientFlowData = [
  { name: 'Mon', admissions: 24, discharges: 18, emergency: 12 },
  { name: 'Tue', admissions: 32, discharges: 22, emergency: 15 },
  { name: 'Wed', admissions: 28, discharges: 25, emergency: 18 },
  { name: 'Thu', admissions: 35, discharges: 20, emergency: 14 },
  { name: 'Fri', admissions: 30, discharges: 28, emergency: 20 },
  { name: 'Sat', admissions: 25, discharges: 15, emergency: 25 },
  { name: 'Sun', admissions: 20, discharges: 12, emergency: 22 },
];

const departmentData = [
  { name: 'Emergency', patients: 156, color: '#ef4444' },
  { name: 'Cardiology', patients: 89, color: '#3b82f6' },
  { name: 'Orthopedics', patients: 72, color: '#10b981' },
  { name: 'Neurology', patients: 54, color: '#f59e0b' },
  { name: 'Pediatrics', patients: 98, color: '#8b5cf6' },
  { name: 'Surgery', patients: 43, color: '#ec4899' },
];

const monthlyTrendsData = [
  { month: 'Jan', patients: 890, revenue: 720 },
  { month: 'Feb', patients: 920, revenue: 780 },
  { month: 'Mar', patients: 1050, revenue: 850 },
  { month: 'Apr', patients: 980, revenue: 920 },
  { month: 'May', patients: 1120, revenue: 990 },
  { month: 'Jun', patients: 1200, revenue: 1100 },
  { month: 'Jul', patients: 1247, revenue: 1180 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      {/* Patient Flow Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weekly Patient Flow</CardTitle>
          <CardDescription>
            Admissions, discharges, and emergency visits this week
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={patientFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="admissions" fill="hsl(var(--chart-1))" name="Admissions" />
              <Bar dataKey="discharges" fill="hsl(var(--chart-2))" name="Discharges" />
              <Bar dataKey="emergency" fill="hsl(var(--chart-3))" name="Emergency" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Department Distribution */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Department Distribution</CardTitle>
          <CardDescription>
            Current patient distribution by department
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                dataKey="patients"
                label={({ name, patients }) => `${name}: ${patients}`}
              >
                {departmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Trends */}
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Monthly Trends</CardTitle>
          <CardDescription>
            Patient count and revenue trends over the past 7 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="patients" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} name="Patients" />
              <Area type="monotone" dataKey="revenue" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} name="Revenue (K)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}