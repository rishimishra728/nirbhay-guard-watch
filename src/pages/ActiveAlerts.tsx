import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, MapPin, User } from "lucide-react";

const ActiveAlerts = () => {
  const alerts = [
    {
      id: "ALT001",
      type: "Panic Button",
      tourist: "Arjun Sharma",
      location: "Red Fort, Delhi",
      coordinates: "28.6562° N, 77.2410° E",
      time: "2 minutes ago",
      severity: "high",
      status: "active",
      description: "Tourist activated panic button. Immediate response required.",
    },
    {
      id: "ALT002",
      type: "Geo-fence Violation",
      tourist: "Priya Patel",
      location: "Gateway of India, Mumbai",
      coordinates: "18.9220° N, 72.8347° E",
      time: "15 minutes ago",
      severity: "medium",
      status: "investigating",
      description: "Tourist entered restricted zone. Monitoring situation.",
    },
    {
      id: "ALT003",
      type: "Inactivity Alert",
      tourist: "Rajesh Gupta",
      location: "Jaipur City Palace",
      coordinates: "26.9255° N, 75.8237° E",
      time: "1 hour ago",
      severity: "low",
      status: "pending",
      description: "No activity detected for extended period. Welfare check needed.",
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-blue-600 bg-blue-50 border-blue-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Active Alerts</h2>
          <p className="text-muted-foreground mt-2">
            Monitor and respond to active security alerts and incidents
          </p>
        </div>

        {/* Alert Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">High Priority</p>
                  <p className="text-2xl font-bold text-red-600">1</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Medium Priority</p>
                  <p className="text-2xl font-bold text-yellow-600">1</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Low Priority</p>
                  <p className="text-2xl font-bold text-blue-600">1</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className={`border-l-4 ${getSeverityColor(alert.severity)}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`h-5 w-5 ${alert.severity === 'high' ? 'text-red-600' : alert.severity === 'medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                    <div>
                      <CardTitle className="text-lg">{alert.type}</CardTitle>
                      <p className="text-sm text-muted-foreground">Alert ID: {alert.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge
                      variant={
                        alert.severity === "high"
                          ? "destructive"
                          : alert.severity === "medium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{alert.status}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm">{alert.description}</p>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Tourist:</span>
                        <span>{alert.tourist}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Location:</span>
                        <span>{alert.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>Coordinates: {alert.coordinates}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Time:</span>
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button size="sm" variant={alert.severity === 'high' ? 'destructive' : 'default'}>
                      Respond
                    </Button>
                    <Button size="sm" variant="outline">
                      View on Map
                    </Button>
                    <Button size="sm" variant="outline">
                      Contact Tourist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ActiveAlerts;