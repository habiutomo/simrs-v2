import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { 
  Home, 
  Users, 
  Calendar, 
  FileText, 
  BookOpen, 
  Building2, 
  FlaskRound, 
  ScrollText,
  Activity, 
  CreditCard, 
  BarChart, 
  Zap,
  Stethoscope,
  DollarSign,
  ShoppingCart,
  Briefcase,
  Building,
  UserCog
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  active: boolean;
}

const SidebarLink = ({ href, icon, children, active }: SidebarLinkProps) => {
  return (
    <Link href={href}>
      <div 
        className={cn(
          "flex items-center px-4 py-2 text-gray-600 rounded-md group transition-colors cursor-pointer",
          active ? "bg-blue-50 text-blue-600 border-l-2 border-blue-600" : "hover:bg-gray-50"
        )}
      >
        <span className="w-5 h-5 mr-3">{icon}</span>
        {children}
      </div>
    </Link>
  );
};

const Sidebar = () => {
  const [location] = useLocation();
  const { user } = useAuth();
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  const navItems = [
    { label: "Dashboard", href: "/", icon: <Home className="w-5 h-5" /> },
    { label: "Manajemen Pasien", href: "/patients", icon: <Users className="w-5 h-5" /> },
    { label: "Jadwal & Appointment", href: "/appointments", icon: <Calendar className="w-5 h-5" /> },
    { label: "Rekam Medis", href: "/medical-records", icon: <FileText className="w-5 h-5" /> },
    { label: "Rawat Jalan", href: "/outpatient", icon: <BookOpen className="w-5 h-5" /> },
    { label: "Rawat Inap", href: "/inpatient", icon: <Building2 className="w-5 h-5" /> },
    { label: "Farmasi", href: "/pharmacy", icon: <FlaskRound className="w-5 h-5" /> },
    { label: "Laboratorium", href: "/laboratory", icon: <Stethoscope className="w-5 h-5" /> },
    { label: "Radiologi", href: "/radiology", icon: <Activity className="w-5 h-5" /> },
    { label: "Billing", href: "/billing", icon: <CreditCard className="w-5 h-5" /> },
    // Finance & Accounting
    { label: "Akuntansi Umum", href: "/accounting", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Pembelian & Pengadaan", href: "/procurement", icon: <ShoppingCart className="w-5 h-5" /> },
    { label: "Inventaris & Aset", href: "/inventory", icon: <Building className="w-5 h-5" /> },
    // HR Modules
    { label: "Kepegawaian (HRD)", href: "/hr", icon: <UserCog className="w-5 h-5" /> },
    { label: "Payroll", href: "/payroll", icon: <Briefcase className="w-5 h-5" /> },
    // Reports & System
    { label: "Laporan & Analitik", href: "/reports", icon: <BarChart className="w-5 h-5" /> },
    { label: "Integrasi Sistem", href: "/system-integration", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
      <div className="flex items-center justify-center h-16 border-b border-gray-200 px-4">
        <div className="flex items-center space-x-2">
          <ScrollText className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">SIMRS</span>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow overflow-y-auto">
        <div className="flex flex-col py-4">
          <div className="px-4 py-2">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 bg-gray-200 text-gray-600">
                <AvatarFallback>
                  {user ? getInitials(user.fullName) : "DR"}
                </AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium">{user?.fullName || "Dr. Sutono"}</p>
                <p className="text-xs text-gray-400">{user?.role === "admin" ? "Admin" : user?.role || "Admin"}</p>
              </div>
            </div>
          </div>
        </div>
        
        <nav className="flex-1 px-2 py-4 space-y-1 text-sm">
          {navItems.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              icon={item.icon}
              active={location === item.href}
            >
              {item.label}
            </SidebarLink>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
