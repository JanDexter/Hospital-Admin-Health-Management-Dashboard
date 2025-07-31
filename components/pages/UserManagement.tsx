import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AdminLayout } from "../layout/AdminLayout";
import { 
  Users, 
  Search, 
  Plus, 
  Edit, 
  Shield,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MoreHorizontal
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "admin" | "nurse" | "doctor" | "receptionist";
  department: string;
  status: "active" | "inactive" | "pending";
  lastLogin: string;
  joinDate: string;
  avatar?: string;
  location: string;
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Dr. Sarah Wilson",
    email: "sarah.wilson@clinic.com",
    phone: "+1-555-0123",
    role: "doctor",
    department: "Pediatrics",
    status: "active",
    lastLogin: "2024-08-01 09:30",
    joinDate: "2023-03-15",
    location: "Main Clinic",
    avatar: "SW"
  },
  {
    id: "2",
    name: "Nurse Maria Rodriguez",
    email: "maria.rodriguez@clinic.com",
    phone: "+1-555-0124",
    role: "nurse",
    department: "Immunization",
    status: "active",
    lastLogin: "2024-08-01 08:45",
    joinDate: "2022-08-20",
    location: "Vaccination Center",
    avatar: "MR"
  },
  {
    id: "3",
    name: "Dr. Michael Chen",
    email: "michael.chen@clinic.com",
    phone: "+1-555-0125",
    role: "doctor",
    department: "Family Medicine",
    status: "active",
    lastLogin: "2024-07-31 16:20",
    joinDate: "2021-11-10",
    location: "Main Clinic",
    avatar: "MC"
  },
  {
    id: "4",
    name: "Admin John Smith",
    email: "john.smith@clinic.com",
    phone: "+1-555-0126",
    role: "admin",
    department: "Administration",
    status: "active",
    lastLogin: "2024-08-01 07:15",
    joinDate: "2020-01-05",
    location: "Main Office",
    avatar: "JS"
  },
  {
    id: "5",
    name: "Receptionist Lisa Park",
    email: "lisa.park@clinic.com",
    phone: "+1-555-0127",
    role: "receptionist",
    department: "Front Desk",
    status: "inactive",
    lastLogin: "2024-07-25 17:30",
    joinDate: "2023-09-12",
    location: "Main Clinic",
    avatar: "LP"
  },
  {
    id: "6",
    name: "Nurse James Thompson",
    email: "james.thompson@clinic.com",
    phone: "+1-555-0128",
    role: "nurse",
    department: "Immunization",
    status: "pending",
    lastLogin: "Never",
    joinDate: "2024-08-01",
    location: "Vaccination Center",
    avatar: "JT"
  }
];

export function UserManagement() {
  const [users] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin": return "bg-purple-100 text-purple-800";
      case "doctor": return "bg-blue-100 text-blue-800";
      case "nurse": return "bg-green-100 text-green-800";
      case "receptionist": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-red-100 text-red-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const summaryStats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === "active").length,
    admins: users.filter(u => u.role === "admin").length,
    doctors: users.filter(u => u.role === "doctor").length,
    nurses: users.filter(u => u.role === "nurse").length,
    pending: users.filter(u => u.status === "pending").length
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600">Manage staff accounts and permissions</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">Import Users</Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New User
            </Button>
          </div>
        </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{summaryStats.totalUsers}</div>
            <div className="text-sm text-gray-500">Total Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{summaryStats.activeUsers}</div>
            <div className="text-sm text-gray-500">Active Users</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-purple-600">{summaryStats.admins}</div>
            <div className="text-sm text-gray-500">Admins</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{summaryStats.doctors}</div>
            <div className="text-sm text-gray-500">Doctors</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{summaryStats.nurses}</div>
            <div className="text-sm text-gray-500">Nurses</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.pending}</div>
            <div className="text-sm text-gray-500">Pending</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search users by name, email, department, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter by Role</Button>
            <Button variant="outline">Filter by Status</Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardContent>
      </Card>

      {/* Users List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Staff Members
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={`/placeholder-avatar-${user.id}.jpg`} alt={user.name} />
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      {user.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <Mail className="h-3 w-3 mr-1" />
                        {user.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {user.phone}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {user.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        Joined: {user.joinDate}
                      </span>
                      <span>Last login: {user.lastLogin}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">{user.department}</div>
                    <Badge className={getRoleColor(user.role)}>
                      <Shield className="h-3 w-3 mr-1" />
                      {user.role}
                    </Badge>
                  </div>
                  
                  <Badge className={getStatusColor(user.status)}>
                    {user.status}
                  </Badge>
                  
                  <div className="flex items-center space-x-1">
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      </div>
    </AdminLayout>
  );
}
