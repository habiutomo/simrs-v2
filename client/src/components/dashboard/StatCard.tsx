import { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  bgColor?: string;
  textColor?: string;
}

const StatCard = ({ title, value, icon, bgColor = "bg-blue-50", textColor = "text-blue-600" }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
      <div className={`rounded-full p-3 ${bgColor} ${textColor}`}>
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
