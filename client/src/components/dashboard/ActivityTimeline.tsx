import { formatDistanceToNow } from "date-fns";
import { ActivityItem } from "@/types";

interface ActivityTimelineProps {
  activities: ActivityItem[];
  isLoading: boolean;
}

const ActivityTimeline = ({ activities, isLoading }: ActivityTimelineProps) => {
  const formatTime = (dateString: string) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  const getUserName = (activity: ActivityItem) => {
    if (activity.user) {
      return activity.user.fullName;
    }
    
    if (activity.details === 'Sistem') {
      return 'Sistem';
    }
    
    return 'Admin';
  };

  if (isLoading) {
    return (
      <div className="space-y-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-2 bg-gray-200 rounded w-1/5"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {activities.map((activity) => (
        <div key={activity.id} className="relative">
          <div className="flex items-start">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-gray-900">
                {getUserName(activity)}
              </div>
              <div className="mt-1 text-sm text-gray-500">
                <p>{activity.action}</p>
              </div>
              <div className="mt-2 text-xs text-gray-400">
                {formatTime(activity.timestamp)}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityTimeline;
