import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminDashboard } from "./components/pages/AdminDashboard";
import { ParentPortal } from "./components/parent/ParentPortal";
import { VaccineInventory } from "./components/pages/VaccineInventory";
import { UserManagement } from "./components/pages/UserManagement";
import { PatientManagement } from "./components/pages/PatientManagement";

export default function App() {
  return (
    <Router basename="/Hospital-Admin-Health-Management-Dashboard">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/parent" element={<ParentPortal />} />
        <Route path="/inventory" element={<VaccineInventory />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/patients" element={<PatientManagement />} />
      </Routes>
    </Router>
  );
}