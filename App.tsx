import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMetrics } from "./components/DashboardMetrics";
import { DashboardCharts } from "./components/DashboardCharts";
import { RecentActivities } from "./components/RecentActivities";

export default function App() {
  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:block">
        <DashboardSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-6 space-y-6">
          {/* Key Metrics */}
          <DashboardMetrics />

          {/* Charts */}
          <DashboardCharts />

          {/* Recent Activities and Alerts */}
          <RecentActivities />
        </div>
      </main>
    </div>
  );
}