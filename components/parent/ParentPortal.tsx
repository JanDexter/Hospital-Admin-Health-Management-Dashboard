import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Syringe
} from "lucide-react";

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
    name: "Robert Agipa",
    dateOfBirth: "2022-09-20",
    age: "2 years",
    avatar: "RA"
  },
  {
    id: "2",
    name: "Japeth Agipa",
    dateOfBirth: "2023-04-11",
    age: "1 year",
    avatar: "JA"
  },
  {
    id: "3",
    name: "Kent Agipa",
    dateOfBirth: "2024-02-17",
    age: "1 year",
    avatar: "KA"
  },
  {
    id: "4",
    name: "Elrond Agipa",
    dateOfBirth: "2023-11-08",
    age: "1 year",
    avatar: "EA"
  }
];

const mockVaccinations: { [key: string]: Vaccination[] } = {
  "1": [
    {
      id: "1",
      vaccineName: "BCG",
      date: "2022-10-20",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "2",
      vaccineName: "Hepatitis B",
      date: "2022-10-20",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "3",
      vaccineName: "DPT (Diphtheria, Pertussis, Tetanus)",
      date: "2023-01-20",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    }
  ],
  "2": [
    {
      id: "4",
      vaccineName: "BCG",
      date: "2023-05-11",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "5",
      vaccineName: "Hepatitis B",
      date: "",
      nextDue: "2024-09-15",
      status: "due",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    }
  ],
  "3": [
    {
      id: "6",
      vaccineName: "BCG",
      date: "",
      nextDue: "2024-08-15",
      status: "due",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "7",
      vaccineName: "Pentavalent",
      date: "",
      nextDue: "2024-09-09",
      status: "due",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "8",
      vaccineName: "Oral Polio Vaccine (OPV)",
      date: "",
      nextDue: "2024-10-26",
      status: "due",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    }
  ],
  "4": [
    {
      id: "9",
      vaccineName: "Hepatitis B",
      date: "2023-11-15",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    },
    {
      id: "10",
      vaccineName: "BCG",
      date: "2023-12-08",
      status: "completed",
      provider: "Barangay Health Center",
      location: "Thunderbolts Health Station"
    }
  ]
};

export function ParentPortal() {
  const [selectedChild, setSelectedChild] = useState<string>(mockChildren[0].id);
  
  const currentChild = mockChildren.find(child => child.id === selectedChild);
  const vaccinations = mockVaccinations[selectedChild] || [];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-600";
      case "due": return "text-orange-500";
      case "overdue": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed": return "Completed";
      case "due": return "Due Soon";
      case "overdue": return "Overdue";
      default: return "Scheduled";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-blue-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Admin Portal
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded">
                <Syringe className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">BTVP</h1>
                <p className="text-sm text-blue-100">Barangay Thunderbolts Vaccination Program</p>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            className="bg-red-500 border-red-500 text-white hover:bg-red-600"
          >
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="bg-white rounded-lg p-6 mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome, Mr/Mrs Agipa!</h2>
            <p className="text-gray-600">
              Your child's health is our priority. Review their immunization records below to stay informed and on 
              track. You're doing great, and we're here to support you every step of the way!
            </p>
          </div>

          {/* Children Cards */}
          <div className="grid gap-4 mb-6">
            {mockChildren.map((child) => {
              const childVaccinations = mockVaccinations[child.id] || [];
              const dueCount = childVaccinations.filter(v => v.status === "due" || v.status === "overdue").length;
              
              return (
                <Card 
                  key={child.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedChild === child.id ? 'ring-2 ring-blue-500 bg-blue-50' : ''
                  }`}
                  onClick={() => setSelectedChild(child.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-l-4 border-blue-500">
                          <span className="text-lg font-bold text-blue-600">{child.avatar}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{child.name}</h3>
                          <p className="text-sm text-gray-500">Birthdate: {child.dateOfBirth}</p>
                          <p className="text-sm">
                            <span className={getStatusColor(dueCount > 0 ? "due" : "completed")}>
                              Status: {dueCount > 0 ? "Due Soon" : "Completed"}
                            </span>
                          </p>
                        </div>
                      </div>
                      {selectedChild === child.id && (
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">QR Code</div>
                          <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-0.5">
                              {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-white rounded-sm"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Vaccination Schedule for Selected Child */}
          {currentChild && (
            <Card className="bg-white">
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-l-4 border-blue-500">
                      <span className="text-lg font-bold text-blue-600">{currentChild.avatar}</span>
                    </div>
                    <div>
                      <CardTitle className="text-xl">{currentChild.name}</CardTitle>
                      <p className="text-sm text-gray-500">Birthdate: {currentChild.dateOfBirth}</p>
                      <p className="text-sm">
                        <span className={getStatusColor(vaccinations.some(v => v.status === "due" || v.status === "overdue") ? "due" : "completed")}>
                          Status: {vaccinations.some(v => v.status === "due" || v.status === "overdue") ? "Due Soon" : "Completed"}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500 mb-1">QR Code</div>
                    <div className="w-16 h-16 bg-gray-900 rounded flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-0.5">
                        {[...Array(16)].map((_, i) => (
                          <div key={i} className="w-1 h-1 bg-white rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-blue-600">Vaccination Schedule</h3>
                  <div className="space-y-3">
                    {vaccinations.map((vaccination) => (
                      <div key={vaccination.id} className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{vaccination.vaccineName}</h4>
                          <p className="text-sm text-gray-600">
                            {vaccination.date ? `Took last ${vaccination.date}` : `Scheduled for ${vaccination.nextDue}`}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className={`text-sm font-medium ${getStatusColor(vaccination.status)}`}>
                            {getStatusText(vaccination.status)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
}
