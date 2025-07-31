import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { AdminLayout } from "../layout/AdminLayout";
import { 
  Package, 
  Search, 
  Plus, 
  Edit, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Thermometer
} from "lucide-react";

interface Vaccine {
  id: string;
  name: string;
  manufacturer: string;
  batchNumber: string;
  quantity: number;
  minStockLevel: number;
  expiryDate: string;
  temperature: string;
  status: "in-stock" | "low-stock" | "expired" | "out-of-stock";
  location: string;
  lastUpdated: string;
}

const mockVaccines: Vaccine[] = [
  {
    id: "1",
    name: "BCG Vaccine",
    manufacturer: "Serum Institute",
    batchNumber: "BCG2024-001",
    quantity: 245,
    minStockLevel: 50,
    expiryDate: "2025-03-15",
    temperature: "2-8°C",
    status: "in-stock",
    location: "Refrigerator A1",
    lastUpdated: "2024-08-01"
  },
  {
    id: "2",
    name: "Hepatitis B",
    manufacturer: "GSK",
    batchNumber: "HEP2024-045",
    quantity: 25,
    minStockLevel: 30,
    expiryDate: "2025-01-20",
    temperature: "2-8°C",
    status: "low-stock",
    location: "Refrigerator A2",
    lastUpdated: "2024-07-30"
  },
  {
    id: "3",
    name: "Pentavalent",
    manufacturer: "Pfizer",
    batchNumber: "PEN2024-089",
    quantity: 150,
    minStockLevel: 40,
    expiryDate: "2025-06-10",
    temperature: "2-8°C",
    status: "in-stock",
    location: "Refrigerator B1",
    lastUpdated: "2024-08-01"
  },
  {
    id: "4",
    name: "Oral Polio Vaccine",
    manufacturer: "Sanofi",
    batchNumber: "OPV2024-156",
    quantity: 0,
    minStockLevel: 25,
    expiryDate: "2024-12-05",
    temperature: "2-8°C",
    status: "out-of-stock",
    location: "Refrigerator C1",
    lastUpdated: "2024-07-28"
  },
  {
    id: "5",
    name: "MMR Vaccine",
    manufacturer: "Merck",
    batchNumber: "MMR2024-078",
    quantity: 45,
    minStockLevel: 20,
    expiryDate: "2024-09-15",
    temperature: "-15°C",
    status: "expired",
    location: "Freezer F1",
    lastUpdated: "2024-07-25"
  },
  {
    id: "6",
    name: "DPT Vaccine",
    manufacturer: "Bharat Biotech",
    batchNumber: "DPT2024-203",
    quantity: 320,
    minStockLevel: 60,
    expiryDate: "2025-08-30",
    temperature: "2-8°C",
    status: "in-stock",
    location: "Refrigerator A3",
    lastUpdated: "2024-08-01"
  }
];

export function VaccineInventory() {
  const [vaccines] = useState<Vaccine[]>(mockVaccines);
  const [searchTerm, setSearchTerm] = useState("");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "in-stock": return "bg-green-100 text-green-800";
      case "low-stock": return "bg-yellow-100 text-yellow-800";
      case "out-of-stock": return "bg-red-100 text-red-800";
      case "expired": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-stock": return <CheckCircle className="h-4 w-4" />;
      case "low-stock": return <AlertTriangle className="h-4 w-4" />;
      case "out-of-stock": return <AlertTriangle className="h-4 w-4" />;
      case "expired": return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  const filteredVaccines = vaccines.filter(vaccine =>
    vaccine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaccine.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaccine.batchNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const summaryStats = {
    totalVaccines: vaccines.length,
    inStock: vaccines.filter(v => v.status === "in-stock").length,
    lowStock: vaccines.filter(v => v.status === "low-stock").length,
    outOfStock: vaccines.filter(v => v.status === "out-of-stock").length,
    expired: vaccines.filter(v => v.status === "expired").length,
    totalDoses: vaccines.reduce((sum, v) => sum + v.quantity, 0)
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Vaccine Inventory</h1>
            <p className="text-gray-600">Manage vaccine stock levels and storage</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add New Vaccine
          </Button>
        </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{summaryStats.totalVaccines}</div>
            <div className="text-sm text-gray-500">Total Vaccines</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{summaryStats.inStock}</div>
            <div className="text-sm text-gray-500">In Stock</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{summaryStats.lowStock}</div>
            <div className="text-sm text-gray-500">Low Stock</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{summaryStats.outOfStock}</div>
            <div className="text-sm text-gray-500">Out of Stock</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-gray-600">{summaryStats.expired}</div>
            <div className="text-sm text-gray-500">Expired</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{summaryStats.totalDoses}</div>
            <div className="text-sm text-gray-500">Total Doses</div>
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
                placeholder="Search vaccines, manufacturers, or batch numbers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
            <Button variant="outline">Export</Button>
          </div>
        </CardContent>
      </Card>

      {/* Vaccine Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Vaccine Stock
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredVaccines.map((vaccine) => (
              <div
                key={vaccine.id}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{vaccine.name}</h3>
                    <p className="text-sm text-gray-500">
                      {vaccine.manufacturer} • Batch: {vaccine.batchNumber}
                    </p>
                    <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Thermometer className="h-3 w-3 mr-1" />
                        {vaccine.temperature}
                      </span>
                      <span>Location: {vaccine.location}</span>
                      <span>Expires: {vaccine.expiryDate}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-lg font-bold">
                      {vaccine.quantity} doses
                    </div>
                    <div className="text-sm text-gray-500">
                      Min: {vaccine.minStockLevel}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(vaccine.status)}
                    <Badge className={getStatusColor(vaccine.status)}>
                      {vaccine.status.replace("-", " ")}
                    </Badge>
                  </div>
                  
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
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
