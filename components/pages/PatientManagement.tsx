import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AdminLayout } from "../layout/AdminLayout";
import { 
  Users, 
  Search, 
  Plus, 
  Edit,
  QrCode,
  Calendar,
  Syringe,
  FileText,
  MapPin,
  Baby,
  Phone,
  Mail
} from "lucide-react";

interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  age: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  barangay: string;
  address: string;
  qrCode: string;
  nextAppointment?: string;
  lastVisit: string;
  vaccinesCompleted: number;
  vaccinesTotal: number;
  status: "up-to-date" | "due" | "overdue" | "new";
}

const mockPatients: Patient[] = [
  {
    id: "PAT001",
    name: "Maria Santos",
    dateOfBirth: "2023-03-15",
    age: "1 year 5 months",
    parentName: "Ana Santos",
    parentPhone: "+63-917-123-4567",
    parentEmail: "ana.santos@email.com",
    barangay: "Poblacion District",
    address: "123 Rizal Street, Poblacion, Davao City",
    qrCode: "QR_PAT001_MARIA_SANTOS",
    nextAppointment: "2024-08-15",
    lastVisit: "2024-07-15",
    vaccinesCompleted: 8,
    vaccinesTotal: 12,
    status: "due"
  },
  {
    id: "PAT002", 
    name: "Juan Dela Cruz",
    dateOfBirth: "2024-01-20",
    age: "6 months",
    parentName: "Rosa Dela Cruz",
    parentPhone: "+63-918-234-5678",
    parentEmail: "rosa.delacruz@email.com",
    barangay: "Buhangin",
    address: "456 Mabini Avenue, Buhangin, Davao City",
    qrCode: "QR_PAT002_JUAN_DELACRUZ",
    nextAppointment: "2024-08-05",
    lastVisit: "2024-07-20",
    vaccinesCompleted: 4,
    vaccinesTotal: 6,
    status: "up-to-date"
  },
  {
    id: "PAT003",
    name: "Sofia Reyes",
    dateOfBirth: "2022-11-10",
    age: "1 year 9 months", 
    parentName: "Carmen Reyes",
    parentPhone: "+63-919-345-6789",
    parentEmail: "carmen.reyes@email.com",
    barangay: "Talomo",
    address: "789 Bonifacio Street, Talomo, Davao City",
    qrCode: "QR_PAT003_SOFIA_REYES",
    lastVisit: "2024-05-10",
    vaccinesCompleted: 6,
    vaccinesTotal: 10,
    status: "overdue"
  },
  {
    id: "PAT004",
    name: "Carlos Miguel",
    dateOfBirth: "2024-07-01",
    age: "1 month",
    parentName: "Lisa Miguel",
    parentPhone: "+63-920-456-7890",
    parentEmail: "lisa.miguel@email.com",
    barangay: "Panacan",
    address: "321 Quezon Boulevard, Panacan, Davao City",
    qrCode: "QR_PAT004_CARLOS_MIGUEL",
    nextAppointment: "2024-08-10",
    lastVisit: "2024-07-25",
    vaccinesCompleted: 1,
    vaccinesTotal: 2,
    status: "new"
  }
];

export function PatientManagement() {
  const [patients] = useState<Patient[]>(mockPatients);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "up-to-date": return "bg-green-100 text-green-800";
      case "due": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      case "new": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.parentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.barangay.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const summaryStats = {
    totalPatients: patients.length,
    upToDate: patients.filter(p => p.status === "up-to-date").length,
    due: patients.filter(p => p.status === "due").length,
    overdue: patients.filter(p => p.status === "overdue").length,
    newPatients: patients.filter(p => p.status === "new").length
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Patient Management</h1>
            <p className="text-gray-600">Manage patient records and vaccination schedules</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <QrCode className="h-4 w-4 mr-2" />
              Scan QR Code
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Patient
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Patients</p>
                  <p className="text-2xl font-bold text-gray-900">{summaryStats.totalPatients}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Syringe className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Up to Date</p>
                  <p className="text-2xl font-bold text-green-600">{summaryStats.upToDate}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Due for Vaccines</p>
                  <p className="text-2xl font-bold text-yellow-600">{summaryStats.due}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Baby className="h-8 w-8 text-red-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Overdue</p>
                  <p className="text-2xl font-bold text-red-600">{summaryStats.overdue}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Patient Records</CardTitle>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search patients, parents, or barangay..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8 w-80"
                  />
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredPatients.map((patient) => (
                <div key={patient.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-blue-100 text-blue-600">
                        {patient.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{patient.name}</h3>
                        <Badge className={getStatusColor(patient.status)}>
                          {patient.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {patient.age} • Born: {new Date(patient.dateOfBirth).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-gray-500">
                        Parent: {patient.parentName} • {patient.barangay}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">
                        Vaccines: {patient.vaccinesCompleted}/{patient.vaccinesTotal}
                      </p>
                      <p className="text-sm text-gray-500">
                        {patient.nextAppointment ? `Next: ${new Date(patient.nextAppointment).toLocaleDateString()}` : 'No upcoming appointment'}
                      </p>
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedPatient(patient)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        <QrCode className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                      >
                        <Syringe className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Patient Detail Modal/Panel would go here */}
        {selectedPatient && (
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-blue-900">Patient Details: {selectedPatient.name}</CardTitle>
                <Button variant="outline" onClick={() => setSelectedPatient(null)}>
                  Close
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Patient Information</h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Age:</span> {selectedPatient.age}</p>
                    <p><span className="font-medium">Date of Birth:</span> {new Date(selectedPatient.dateOfBirth).toLocaleDateString()}</p>
                    <p><span className="font-medium">Patient ID:</span> {selectedPatient.id}</p>
                    <p><span className="font-medium">QR Code:</span> {selectedPatient.qrCode}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parent/Guardian Information</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center"><Phone className="h-4 w-4 mr-2" />{selectedPatient.parentPhone}</p>
                    <p className="flex items-center"><Mail className="h-4 w-4 mr-2" />{selectedPatient.parentEmail}</p>
                    <p className="flex items-center"><MapPin className="h-4 w-4 mr-2" />{selectedPatient.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex space-x-2">
                <Button>
                  <Syringe className="h-4 w-4 mr-2" />
                  Administer Vaccine
                </Button>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Patient
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}
