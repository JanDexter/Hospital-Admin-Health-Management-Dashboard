import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings, 
  Syringe, 
  UserCog,
  Bell,
  LogOut,
  Search,
  Filter,
  Plus,
  Download,
  Menu
} from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  path: string;
  badge?: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="h-4 w-4" />,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: <Users className="h-4 w-4" />,
    label: "Patients",
    path: "/patients",
    badge: "1,247"
  },
  {
    icon: <Syringe className="h-4 w-4" />,
    label: "Vaccinations",
    path: "/vaccinations",
    badge: "89"
  },
  {
    icon: <Package className="h-4 w-4" />,
    label: "Vaccine Inventory",
    path: "/inventory",
    badge: "1,245"
  },
  {
    icon: <Calendar className="h-4 w-4" />,
    label: "Scheduling",
    path: "/scheduling"
  },
  {
    icon: <UserCog className="h-4 w-4" />,
    label: "User Management",
    path: "/users",
    badge: "6"
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Medical Records",
    path: "/records"
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    label: "Analytics",
    path: "/analytics"
  },
  {
    icon: <Bell className="h-4 w-4" />,
    label: "Alerts",
    path: "/alerts",
    badge: "3"
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings",
    path: "/settings"
  }
];

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:block w-64 bg-white border-r border-gray-200">
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Syringe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">ImmunizeTrack</h1>
                <p className="text-sm text-gray-500">Admin Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {sidebarItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <Link key={index} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={`w-full justify-start ${
                      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.icon}
                    <span className="ml-3 flex-1 text-left">{item.label}</span>
                    {item.badge && (
                      <Badge 
                        variant={isActive ? "secondary" : "outline"} 
                        className={`ml-auto ${
                          isActive ? "bg-blue-500 text-white" : ""
                        }`}
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-sm text-white font-medium">DA</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Dr. Admin</p>
                <p className="text-xs text-gray-500">System Administrator</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="w-full justify-start text-gray-600">
              <LogOut className="h-4 w-4 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Immunization Dashboard</h1>
                <p className="text-sm text-gray-500">Welcome back, Dr. Admin</p>
              </div>
            </div>

            {/* Center - Search */}
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search patients, vaccines, records..."
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Quick Actions */}
              <div className="hidden lg:flex items-center space-x-2">
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Vaccination
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-red-500">
                  3
                </Badge>
              </Button>

              {/* User Avatar */}
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Dr. Admin" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mt-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patients, vaccines, records..."
                className="pl-10 bg-gray-50 border-gray-200"
              />
            </div>
          </div>
        </header>

        {/* Portal Switch */}
        <div className="p-4 bg-blue-50 border-b">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-blue-900">Admin Portal</h2>
              <p className="text-sm text-blue-700">Immunization Management System</p>
            </div>
            <Link to="/parent">
              <Button 
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-100"
              >
                Switch to Parent Portal
              </Button>
            </Link>
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
