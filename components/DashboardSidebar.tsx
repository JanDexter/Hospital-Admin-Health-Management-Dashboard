import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  FileText, 
  BarChart3, 
  Settings, 
  Syringe, 
  UserCog,
  Bell,
  LogOut,
  Package,
  MapPin
} from "lucide-react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  badge?: string;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <LayoutDashboard className="h-4 w-4" />,
    label: "Dashboard",
    active: true
  },
  {
    icon: <Users className="h-4 w-4" />,
    label: "Patients",
    badge: "1,247"
  },
  {
    icon: <Syringe className="h-4 w-4" />,
    label: "Vaccinations",
    badge: "89"
  },
  {
    icon: <Package className="h-4 w-4" />,
    label: "Vaccine Inventory",
    badge: "1,245"
  },
  {
    icon: <Calendar className="h-4 w-4" />,
    label: "Scheduling"
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Clinics"
  },
  {
    icon: <UserCog className="h-4 w-4" />,
    label: "Staff",
    badge: "234"
  },
  {
    icon: <FileText className="h-4 w-4" />,
    label: "Medical Records"
  },
  {
    icon: <BarChart3 className="h-4 w-4" />,
    label: "Analytics"
  },
  {
    icon: <Bell className="h-4 w-4" />,
    label: "Alerts",
    badge: "3"
  },
  {
    icon: <Settings className="h-4 w-4" />,
    label: "Settings"
  }
];

export function DashboardSidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
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
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant={item.active ? "default" : "ghost"}
            className={`w-full justify-start ${
              item.active ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span className="ml-3 flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge 
                variant={item.active ? "secondary" : "outline"} 
                className={`ml-auto ${
                  item.active ? "bg-blue-500 text-white" : ""
                }`}
              >
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
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
  );
}