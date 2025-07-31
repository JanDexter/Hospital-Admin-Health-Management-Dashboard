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
  MoreHorizontal,
  UserPlus,
  Baby,
  Stethoscope
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "city-admin" | "health-worker" | "parent" | "system-admin";
  department: string;
  assignedBarangay?: string; // For health workers
  childrenLinked?: number; // For parents
  status: "active" | "inactive" | "pending";
  lastLogin: string;
  joinDate: string;
  avatar?: string;
  location: string;
  accountType: "staff" | "parent";
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Dr. Maria Santos",
    email: "maria.santos@davaocity.gov.ph",
    phone: "+63-917-123-4567",
    role: "health-worker",
    department: "Pediatric Immunization",
    assignedBarangay: "Poblacion District",
    status: "active",
    lastLogin: "2024-08-01 09:30",
    joinDate: "2022-03-15",
    location: "Poblacion Health Center",
    avatar: "MS",
    accountType: "staff"
  },
  {
    id: "2", 
    name: "Nurse Carmen Reyes",
    email: "carmen.reyes@davaocity.gov.ph",
    phone: "+63-918-234-5678",
    role: "health-worker",
    department: "Immunization Services",
    assignedBarangay: "Buhangin",
    status: "active",
    lastLogin: "2024-08-01 08:45",
    joinDate: "2021-07-20",
    location: "Buhangin Health Center",
    avatar: "CR",
    accountType: "staff"
  },
  {
    id: "3",
    name: "Dr. Juan Dela Cruz",
    email: "juan.delacruz@davaocity.gov.ph", 
    phone: "+63-919-345-6789",
    role: "health-worker",
    department: "Public Health",
    assignedBarangay: "Talomo",
    status: "active",
    lastLogin: "2024-07-31 16:20",
    joinDate: "2020-11-08",
    location: "Talomo Health Center",
    avatar: "JD",
    accountType: "staff"
  },
  {
    id: "4",
    name: "City Admin Jane Smith",
    email: "jane.smith@davaocity.gov.ph",
    phone: "+63-920-456-7890",
    role: "city-admin",
    department: "City Health Office",
    status: "active",
    lastLogin: "2024-08-01 07:15",
    joinDate: "2020-01-05",
    location: "City Health Office",
    avatar: "JS",
    accountType: "staff"
  },
  {
    id: "5",
    name: "Ana Santos (Parent)",
    email: "ana.santos@email.com",
    phone: "+63-917-123-4567",
    role: "parent",
    department: "Parent Account",
    childrenLinked: 1,
    status: "active",
    lastLogin: "2024-07-30 19:45",
    joinDate: "2023-03-15",
    location: "Poblacion District",
    avatar: "AS",
    accountType: "parent"
  },
  {
    id: "6",
    name: "Rosa Dela Cruz (Parent)",
    email: "rosa.delacruz@email.com",
    phone: "+63-918-234-5678",
    role: "parent",
    department: "Parent Account",
    childrenLinked: 2,
    status: "active",
    lastLogin: "2024-07-28 14:20",
    joinDate: "2024-01-20",
    location: "Buhangin",
    avatar: "RD",
    accountType: "parent"
  }
];

export function UserManagement() {
  const [users] = useState<User[]>(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const getRoleColor = (role: string) => {
    switch (role) {
      case "city-admin": return "bg-purple-100 text-purple-800";
      case "health-worker": return "bg-blue-100 text-blue-800";
      case "parent": return "bg-green-100 text-green-800";
      case "system-admin": return "bg-red-100 text-red-800";
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
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (user.assignedBarangay && user.assignedBarangay.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const summaryStats = {
    totalUsers: users.length,
    activeUsers: users.filter(u => u.status === "active").length,
    healthWorkers: users.filter(u => u.role === "health-worker").length,
    parents: users.filter(u => u.role === "parent").length,
    cityAdmins: users.filter(u => u.role === "city-admin").length,
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
            <Button variant="outline">
              <UserPlus className="h-4 w-4 mr-2" />
              Create Health Worker
            </Button>
            <Button variant="outline">
              <Baby className="h-4 w-4 mr-2" />
              Create Parent Account
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Bulk Import
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
            <div className="text-2xl font-bold text-purple-600">{summaryStats.cityAdmins}</div>
            <div className="text-sm text-gray-500">City Admins</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{summaryStats.healthWorkers}</div>
            <div className="text-sm text-gray-500">Health Workers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{summaryStats.parents}</div>
            <div className="text-sm text-gray-500">Parents</div>
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
                      {user.assignedBarangay && (
                        <span className="flex items-center">
                          <Stethoscope className="h-3 w-3 mr-1" />
                          Barangay: {user.assignedBarangay}
                        </span>
                      )}
                      {user.childrenLinked && (
                        <span className="flex items-center">
                          <Baby className="h-3 w-3 mr-1" />
                          {user.childrenLinked} {user.childrenLinked === 1 ? 'Child' : 'Children'} Linked
                        </span>
                      )}
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
