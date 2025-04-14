import { useQuery } from "@tanstack/react-query";
import StatCard from "@/components/dashboard/StatCard";
import DepartmentVisitsChart from "@/components/dashboard/DepartmentVisitsChart";
import ActivityTimeline from "@/components/dashboard/ActivityTimeline";
import { DashboardStats, DepartmentVisit, ActivityItem } from "@/types";
import { Users, Calendar, Building2, FileText } from "lucide-react";

const Dashboard = () => {
  // Fetch dashboard stats
  const { data: stats, isLoading: isLoadingStats } = useQuery<DashboardStats>({
    queryKey: ["/api/dashboard/stats"],
  });

  // Fetch department visits
  const { data: departmentVisits, isLoading: isLoadingVisits } = useQuery<DepartmentVisit[]>({
    queryKey: ["/api/department-visits"],
  });

  // Fetch recent activities
  const { data: activities, isLoading: isLoadingActivities } = useQuery<ActivityItem[]>({
    queryKey: ["/api/activities/recent"],
  });

  return (
    <div className="py-6">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="text-sm text-gray-500">
            <span>Ringkasan keseluruhan operasional rumah sakit</span>
          </div>
        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard 
            title="Total Pasien" 
            value={isLoadingStats ? 0 : (stats?.totalPatients || 0)} 
            icon={<Users className="h-6 w-6" />}
            bgColor="bg-blue-50"
            textColor="text-blue-600"
          />
          
          <StatCard 
            title="Janji Temu Hari Ini" 
            value={isLoadingStats ? 0 : (stats?.todayAppointments || 0)} 
            icon={<Calendar className="h-6 w-6" />}
            bgColor="bg-indigo-50"
            textColor="text-indigo-600"
          />
          
          <StatCard 
            title="Rawat Inap" 
            value={isLoadingStats ? 0 : (stats?.activeInpatients || 12)} 
            icon={<Building2 className="h-6 w-6" />}
            bgColor="bg-yellow-50"
            textColor="text-yellow-600"
          />
          
          <StatCard 
            title="Dokter Bertugas" 
            value={isLoadingStats ? 0 : (stats?.activeDoctors || 28)} 
            icon={<FileText className="h-6 w-6" />}
            bgColor="bg-green-50"
            textColor="text-green-600"
          />
        </div>
        
        {/* Charts and Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Department Visits Chart */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Kunjungan per Departemen</h2>
              <div className="text-sm text-gray-500">
                <span>Jumlah kunjungan dalam 30 hari terakhir</span>
              </div>
            </div>
            <DepartmentVisitsChart 
              data={departmentVisits || []} 
              isLoading={isLoadingVisits} 
            />
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Aktivitas Terkini</h2>
              <div className="text-sm text-gray-500">
                <span>Aktivitas sistem dalam 24 jam terakhir</span>
              </div>
            </div>
            <ActivityTimeline 
              activities={activities || []} 
              isLoading={isLoadingActivities}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
