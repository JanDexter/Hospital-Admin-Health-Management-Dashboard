import { useState } from "react";
import { DashboardSidebar } from "./components/DashboardSidebar";
import { DashboardHeader } from "./components/DashboardHeader";
import { DashboardMetrics } from "./components/DashboardMetrics";
import { DashboardCharts } from "./components/DashboardCharts";
import { RecentActivities } from "./components/RecentActivities";
import { ParentPortal } from "./components/parent/ParentPortal";
import { Button } from "./components/ui/button";

export default function App() {
  const [currentView, setCurrentView] = useState<"admin" | "parent">("admin");

  if (currentView === "parent") {
    return <ParentPortal onSwitchToAdmin={() => setCurrentView("admin")} />;
  }

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:block">
        <DashboardSidebar onSwitchToParent={() => setCurrentView("parent")} />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Portal Switch */}
        <div className="p-4 bg-blue-50 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-blue-900">Admin Portal</h2>
              <p className="text-sm text-blue-700">Immunization Management System</p>
            </div>
            <Button 
              onClick={() => setCurrentView("parent")} 
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-100"
            >
              Switch to Parent Portal
            </Button>
          </div>
        </div>

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