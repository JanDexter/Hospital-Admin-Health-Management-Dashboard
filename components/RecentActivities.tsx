import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, User, UserPlus, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

interface Activity {
  id: string;
  type: 'admission' | 'discharge' | 'appointment' | 'alert' | 'staff';
  title: string;
  description: string;
  time: string;
  severity?: 'high' | 'medium' | 'low';
  user?: {
    name: string;
    avatar?: string;
  };
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'alert',
    title: 'Critical Patient Alert',
    description: 'Patient John Doe (Room 205) requires immediate attention',
    time: '5 min ago',
    severity: 'high',
    user: { name: 'Dr. Smith' }
  },
  {
    id: '2',
    type: 'admission',
    title: 'New Patient Admission',
    description: 'Emergency admission to Cardiology department',
    time: '12 min ago',
    severity: 'medium',
    user: { name: 'Nurse Johnson' }
  },
  {
    id: '3',
    type: 'discharge',
    title: 'Patient Discharge',
    description: 'Sarah Wilson discharged from Orthopedics',
    time: '25 min ago',
    severity: 'low',
    user: { name: 'Dr. Brown' }
  },
  {
    id: '4',
    type: 'staff',
    title: 'New Staff Member',
    description: 'Dr. Alice Chen joined Neurology department',
    time: '1 hour ago',
    severity: 'low'
  },
  {
    id: '5',
    type: 'appointment',
    title: 'Appointment Scheduled',
    description: 'Surgery scheduled for tomorrow 9:00 AM',
    time: '2 hours ago',
    severity: 'medium',
    user: { name: 'Dr. Martinez' }
  }
];

const alerts = [
  {
    id: '1',
    title: 'ICU Bed Shortage',
    description: 'Only 2 ICU beds remaining',
    severity: 'high' as const,
    time: '10 min ago'
  },
  {
    id: '2',
    title: 'Equipment Maintenance',
    description: 'MRI Machine #2 scheduled for maintenance',
    severity: 'medium' as const,
    time: '1 hour ago'
  },
  {
    id: '3',
    title: 'Staff Overtime Alert',
    description: 'Night shift exceeding recommended hours',
    severity: 'medium' as const,
    time: '3 hours ago'
  }
];

function getActivityIcon(type: Activity['type']) {
  switch (type) {
    case 'admission':
      return <UserPlus className="h-4 w-4" />;
    case 'discharge':
      return <CheckCircle className="h-4 w-4" />;
    case 'appointment':
      return <Calendar className="h-4 w-4" />;
    case 'alert':
      return <AlertTriangle className="h-4 w-4" />;
    case 'staff':
      return <User className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
}

function getSeverityColor(severity?: string) {
  switch (severity) {
    case 'high':
      return 'destructive';
    case 'medium':
      return 'secondary';
    case 'low':
      return 'outline';
    default:
      return 'outline';
  }
}

export function RecentActivities() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            Latest updates and changes in the system
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`flex-shrink-0 p-2 rounded-full ${
                activity.severity === 'high' ? 'bg-red-100 text-red-600' :
                activity.severity === 'medium' ? 'bg-yellow-100 text-yellow-600' :
                'bg-green-100 text-green-600'
              }`}>
                {getActivityIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                  <Badge variant={getSeverityColor(activity.severity)}>
                    {activity.severity || 'normal'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <div className="flex items-center mt-1 space-x-2">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-400">{activity.time}</span>
                  {activity.user && (
                    <>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{activity.user.name}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            View All Activities
          </Button>
        </CardContent>
      </Card>

      {/* Critical Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Critical Alerts</CardTitle>
          <CardDescription>
            Urgent issues requiring immediate attention
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg border border-red-200 bg-red-50">
              <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                alert.severity === 'high' ? 'text-red-600' : 'text-yellow-600'
              }`} />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-gray-900">{alert.title}</h4>
                  <Badge variant={alert.severity === 'high' ? 'destructive' : 'secondary'}>
                    {alert.severity}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                <div className="flex items-center mt-2 space-x-2">
                  <Clock className="h-3 w-3 text-gray-400" />
                  <span className="text-xs text-gray-500">{alert.time}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex space-x-2">
            <Button variant="destructive" size="sm" className="flex-1">
              Resolve Alerts
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              View All
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}