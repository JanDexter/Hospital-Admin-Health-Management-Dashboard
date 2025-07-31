import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { 
  ArrowLeft, 
  User, 
  Calendar, 
  Download, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Syringe,
  Baby,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

interface ParentPortalProps {
  onSwitchToAdmin: () => void;
}

interface Child {
  id: string;
  name: string;
  dateOfBirth: string;
  age: string;
  avatar: string;
}

interface Vaccination {
  id: string;
  vaccineName: string;
  date: string;
  nextDue?: string;
  status: "completed" | "due" | "overdue";
  provider: string;
  location: string;
}

const mockChildren: Child[] = [
  {
    id: "1",
    name: "Emma Johnson",
    dateOfBirth: "2020-03-15",
    age: "4 years",
    avatar: "EJ"
  },
  {
    id: "2",
    name: "Liam Johnson",
    dateOfBirth: "2022-08-22",
    age: "2 years",
    avatar: "LJ"
  }
];

const mockVaccinations: { [key: string]: Vaccination[] } = {
  "1": [
    {
      id: "1",
      vaccineName: "DTaP (Diphtheria, Tetanus, Pertussis)",
      date: "2024-03-15",
      status: "completed",
      provider: "Dr. Sarah Wilson",
      location: "Pediatric Clinic - Downtown"
    },
    {
      id: "2",
      vaccineName: "MMR (Measles, Mumps, Rubella)",
      date: "2024-03-15",
      status: "completed",
      provider: "Dr. Sarah Wilson",
      location: "Pediatric Clinic - Downtown"
    },
    {
      id: "3",
      vaccineName: "Varicella (Chickenpox)",
      date: "",
      nextDue: "2024-12-15",
      status: "due",
      provider: "Dr. Sarah Wilson",
      location: "Pediatric Clinic - Downtown"
    }
  ],
  "2": [
    {
      id: "4",
      vaccineName: "Hepatitis B",
      date: "2024-01-22",
      status: "completed",
      provider: "Dr. Michael Chen",
      location: "Children's Health Center"
    },
    {
      id: "5",
      vaccineName: "DTaP (Diphtheria, Tetanus, Pertussis)",
      date: "",
      nextDue: "2024-10-22",
      status: "due",
      provider: "Dr. Michael Chen",
      location: "Children's Health Center"
    },
    {
      id: "6",
      vaccineName: "Polio (IPV)",
      date: "",
      nextDue: "2024-09-15",
      status: "overdue",
      provider: "Dr. Michael Chen",
      location: "Children's Health Center"
    }
  ]
};

export function ParentPortal({ onSwitchToAdmin }: ParentPortalProps) {
  const [selectedChild, setSelectedChild] = useState<string>(mockChildren[0].id);
  
  const currentChild = mockChildren.find(child => child.id === selectedChild);
  const vaccinations = mockVaccinations[selectedChild] || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-100 text-green-800";
      case "due": return "bg-yellow-100 text-yellow-800";
      case "overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "due": return <Clock className="h-4 w-4" />;
      case "overdue": return <AlertCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSwitchToAdmin}
              className="text-gray-600"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Admin Portal
            </Button>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Syringe className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold">ImmunizeTrack</h1>
                <p className="text-sm text-gray-500">Parent Portal</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Parent Account</p>
            </div>
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-sm text-white font-medium">SJ</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Child Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Baby className="h-5 w-5 mr-2" />
                My Children
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4">
                {mockChildren.map((child) => (
                  <Button
                    key={child.id}
                    variant={selectedChild === child.id ? "default" : "outline"}
                    onClick={() => setSelectedChild(child.id)}
                    className="h-auto p-4 flex flex-col items-center"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-lg font-medium text-blue-600">{child.avatar}</span>
                    </div>
                    <span className="text-sm font-medium">{child.name}</span>
                    <span className="text-xs text-gray-500">{child.age}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Child Details and Vaccinations */}
          {currentChild && (
            <Tabs defaultValue="vaccinations" className="space-y-6">
              <TabsList>
                <TabsTrigger value="vaccinations">Vaccination Records</TabsTrigger>
                <TabsTrigger value="schedule">Upcoming Schedule</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
              </TabsList>

              <TabsContent value="vaccinations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      {currentChild.name} - Vaccination History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {vaccinations.map((vaccination) => (
                        <div
                          key={vaccination.id}
                          className="flex items-center justify-between p-4 border rounded-lg"
                        >
                          <div className="flex items-center space-x-4">
                            {getStatusIcon(vaccination.status)}
                            <div>
                              <h3 className="font-medium">{vaccination.vaccineName}</h3>
                              <p className="text-sm text-gray-500">
                                {vaccination.date ? `Administered: ${vaccination.date}` : `Next due: ${vaccination.nextDue}`}
                              </p>
                              <p className="text-sm text-gray-500">
                                <MapPin className="h-3 w-3 inline mr-1" />
                                {vaccination.location}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge className={getStatusColor(vaccination.status)}>
                              {vaccination.status}
                            </Badge>
                            <p className="text-sm text-gray-500 mt-1">{vaccination.provider}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      Upcoming Vaccinations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {vaccinations
                        .filter(v => v.status === "due" || v.status === "overdue")
                        .map((vaccination) => (
                          <div
                            key={vaccination.id}
                            className="flex items-center justify-between p-4 border rounded-lg"
                          >
                            <div className="flex items-center space-x-4">
                              {getStatusIcon(vaccination.status)}
                              <div>
                                <h3 className="font-medium">{vaccination.vaccineName}</h3>
                                <p className="text-sm text-gray-500">Due: {vaccination.nextDue}</p>
                                <p className="text-sm text-gray-500">
                                  <MapPin className="h-3 w-3 inline mr-1" />
                                  {vaccination.location}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge className={getStatusColor(vaccination.status)}>
                                {vaccination.status}
                              </Badge>
                              <Button size="sm" className="mt-2">
                                Schedule Appointment
                              </Button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Download className="h-5 w-5 mr-2" />
                      Vaccination Certificates
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">Complete Vaccination Record</h3>
                          <p className="text-sm text-gray-500">All vaccination history for {currentChild.name}</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h3 className="font-medium">School Entry Certificate</h3>
                          <p className="text-sm text-gray-500">Certificate for school enrollment</p>
                        </div>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-500">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-gray-500">support@immunizetrack.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Find Clinics</p>
                    <p className="text-sm text-gray-500">Locate nearby vaccination sites</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
