import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { useAuth, AuthProvider } from "./context/AuthContext";

// Layout components
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

// Pages
import Dashboard from "./pages/Dashboard";
import PatientManagement from "./pages/PatientManagement";
import Appointments from "./pages/Appointments";
import MedicalRecords from "./pages/MedicalRecords";
import Outpatient from "./pages/Outpatient";
import InpatientPage from "./pages/Inpatient";
import Pharmacy from "./pages/Pharmacy";
import Laboratory from "./pages/Laboratory";
import Radiology from "./pages/Radiology";
import Billing from "./pages/Billing";
// Finance & Accounting Pages
import Accounting from "./pages/Accounting";
import Procurement from "./pages/Procurement";
import Inventory from "./pages/Inventory";
// HR Pages
import HR from "./pages/HR";
import Payroll from "./pages/Payroll";
// Reports & System
import Reports from "./pages/Reports";
import SystemIntegration from "./pages/SystemIntegration";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // If we had a login page, we'd return it here
    // For the demo, we're always authenticated
  }

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Switch>
            <Route path="/" component={Dashboard} />
            {/* Clinical modules */}
            <Route path="/patients" component={PatientManagement} />
            <Route path="/appointments" component={Appointments} />
            <Route path="/medical-records" component={MedicalRecords} />
            <Route path="/outpatient" component={Outpatient} />
            <Route path="/inpatient" component={InpatientPage} />
            <Route path="/pharmacy" component={Pharmacy} />
            <Route path="/laboratory" component={Laboratory} />
            <Route path="/radiology" component={Radiology} />
            <Route path="/billing" component={Billing} />
            {/* Finance modules */}
            <Route path="/accounting" component={Accounting} />
            <Route path="/procurement" component={Procurement} />
            <Route path="/inventory" component={Inventory} />
            {/* HR modules */}
            <Route path="/hr" component={HR} />
            <Route path="/payroll" component={Payroll} />
            {/* Reports & System */}
            <Route path="/reports" component={Reports} />
            <Route path="/system-integration" component={SystemIntegration} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
