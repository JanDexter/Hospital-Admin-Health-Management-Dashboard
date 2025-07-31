import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart } from 'recharts';

const vaccinationFlowData = [
  { name: 'Mon', vaccinations: 24, appointments: 18, walkins: 12 },
  { name: 'Tue', vaccinations: 32, appointments: 22, walkins: 15 },
  { name: 'Wed', vaccinations: 28, appointments: 25, walkins: 18 },
  { name: 'Thu', vaccinations: 35, appointments: 20, walkins: 14 },
  { name: 'Fri', vaccinations: 30, appointments: 28, walkins: 20 },
  { name: 'Sat', vaccinations: 25, appointments: 15, walkins: 25 },
  { name: 'Sun', vaccinations: 20, appointments: 12, walkins: 22 },
];

const vaccineTypeData = [
  { name: 'DTaP', administered: 156, color: '#ef4444' },
  { name: 'MMR', administered: 89, color: '#3b82f6' },
  { name: 'Polio', administered: 72, color: '#10b981' },
  { name: 'Hepatitis B', administered: 54, color: '#f59e0b' },
  { name: 'Varicella', administered: 98, color: '#8b5cf6' },
  { name: 'Flu', administered: 143, color: '#ec4899' },
];

const monthlyTrendsData = [
  { month: 'Jan', vaccinations: 890, coverage: 72 },
  { month: 'Feb', vaccinations: 920, coverage: 78 },
  { month: 'Mar', vaccinations: 1050, coverage: 85 },
  { month: 'Apr', vaccinations: 980, coverage: 82 },
  { month: 'May', vaccinations: 1120, coverage: 89 },
  { month: 'Jun', vaccinations: 1200, coverage: 91 },
  { month: 'Jul', vaccinations: 1247, coverage: 87 },
];

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      {/* Vaccination Flow Chart */}
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Weekly Vaccination Activity</CardTitle>
          <CardDescription>
            Vaccinations administered, scheduled appointments, and walk-ins this week
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={vaccinationFlowData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="vaccinations" fill="hsl(var(--chart-1))" name="Vaccinations" />
              <Bar dataKey="appointments" fill="hsl(var(--chart-2))" name="Appointments" />
              <Bar dataKey="walkins" fill="hsl(var(--chart-3))" name="Walk-ins" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Vaccine Type Distribution */}
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Vaccine Distribution</CardTitle>
          <CardDescription>
            Vaccines administered by type this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <PieChart>
              <Pie
                data={vaccineTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                fill="#8884d8"
                dataKey="administered"
                label={({ name, administered }) => `${name}: ${administered}`}
              >
                {vaccineTypeData.map((entry, index) => (
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
          <CardTitle>Monthly Immunization Trends</CardTitle>
          <CardDescription>
            Vaccination count and coverage percentage over the past 7 months
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={monthlyTrendsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="vaccinations" stroke="hsl(var(--chart-1))" fill="hsl(var(--chart-1))" fillOpacity={0.3} name="Vaccinations" />
              <Area type="monotone" dataKey="coverage" stroke="hsl(var(--chart-2))" fill="hsl(var(--chart-2))" fillOpacity={0.3} name="Coverage %" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}