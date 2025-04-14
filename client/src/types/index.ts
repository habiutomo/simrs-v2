export interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  activeInpatients: number;
  activeDoctors: number;
}

export interface DepartmentVisit {
  name: string;
  count: number;
}

export interface ActivityItem {
  id: number;
  userId: number | null;
  action: string;
  details: string;
  timestamp: string;
  user: {
    id: number;
    fullName: string;
    role: string;
  } | null;
}

export interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}
