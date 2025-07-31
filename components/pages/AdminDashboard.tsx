import { DashboardMetrics } from "../DashboardMetrics";
import { DashboardCharts } from "../DashboardCharts";
import { RecentActivities } from "../RecentActivities";
import { AdminLayout } from "../layout/AdminLayout";

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Key Metrics */}
        <DashboardMetrics />

        {/* Charts */}
        <DashboardCharts />

        {/* Recent Activities and Alerts */}
        <RecentActivities />
      </div>
    </AdminLayout>
  );
}
