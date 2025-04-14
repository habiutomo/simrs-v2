import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Menu, Bell, Settings, ChevronRight, Home } from "lucide-react";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [location] = useLocation();
  const { user } = useAuth();
  
  const getPageTitle = () => {
    const path = location.split("/")[1];
    switch (location) {
      case "/":
        return "Dashboard";
      case "/patients":
        return "Manajemen Pasien";
      case "/appointments":
        return "Jadwal & Appointment";
      case "/medical-records":
        return "Rekam Medis";
      case "/outpatient":
        return "Rawat Jalan";
      case "/inpatient":
        return "Rawat Inap";
      case "/pharmacy":
        return "Farmasi";
      case "/laboratory":
        return "Laboratorium";
      case "/radiology":
        return "Radiologi";
      case "/billing":
        return "Billing";
      case "/reports":
        return "Laporan & Analitik";
      case "/system-integration":
        return "Integrasi Sistem";
      default:
        return path.charAt(0).toUpperCase() + path.slice(1);
    }
  };
  
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              type="button"
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" />
            </button>
            
            <div className="hidden md:block">
              <div className="flex items-center">
                <Link href="/">
                  <a className="text-gray-600 hover:text-gray-900">
                    <Home className="h-5 w-5" />
                  </a>
                </Link>
                <span className="mx-2 text-gray-300">
                  <ChevronRight className="h-4 w-4" />
                </span>
                <span className="text-gray-600">{getPageTitle()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            
            <button type="button" className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <span className="sr-only">Settings</span>
              <Settings className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <button
                type="button"
                className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                id="user-menu-button"
              >
                <span className="sr-only">Open user menu</span>
                <Avatar className="h-8 w-8 bg-blue-600 text-white">
                  <AvatarFallback>
                    {user ? getInitials(user.fullName) : "DS"}
                  </AvatarFallback>
                </Avatar>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
