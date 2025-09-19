import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Users, MapPin, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageProvider";

export const DashboardOverview = () => {
  const { t } = useLanguage();
  
  const stats = [
    {
      title: "Active Tourists",
      value: "1,247",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "-25%",
      icon: AlertTriangle,
      color: "text-red-600",
    },
    {
      title: "Safe Zones",
      value: "156",
      change: "+2%",
      icon: MapPin,
      color: "text-green-600",
    },
    {
      title: "System Status",
      value: "Online",
      change: "100%",
      icon: Shield,
      color: "text-green-600",
    },
  ];

  const recentAlerts = [
    {
      id: "ALT001",
      tourist: "Arjun Sharma",
      location: "Red Fort, Delhi",
      type: "Panic Button",
      time: "2 minutes ago",
      severity: "high",
    },
    {
      id: "ALT002",
      tourist: "Priya Patel",
      location: "Gateway of India, Mumbai",
      type: "Geo-fence Violation",
      time: "15 minutes ago",
      severity: "medium",
    },
    {
      id: "ALT003",
      tourist: "Rajesh Gupta",
      location: "Jaipur City Palace",
      type: "Inactivity Alert",
      time: "1 hour ago",
      severity: "low",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-foreground">{t("dashboard.overview")}</h2>
        <p className="text-muted-foreground mt-2">
          {t("dashboard.monitoring")}
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5" />
            <span>Recent Alerts</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{alert.tourist}</span>
                    <Badge
                      variant={
                        alert.severity === "high"
                          ? "destructive"
                          : alert.severity === "medium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {alert.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.location} • {alert.time}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">#{alert.id}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {alert.severity} priority
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};