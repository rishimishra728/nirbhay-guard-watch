import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Eye, MapPin } from "lucide-react";

const TouristManagement = () => {
  const tourists = [
    {
      id: "T001",
      name: "Arjun Sharma",
      nationality: "USA",
      location: "Red Fort, Delhi",
      safetyScore: 85,
      status: "active",
      lastSeen: "2 min ago",
    },
    {
      id: "T002",
      name: "Priya Patel",
      nationality: "UK",
      location: "Gateway of India, Mumbai",
      safetyScore: 92,
      status: "active",
      lastSeen: "5 min ago",
    },
    {
      id: "T003",
      name: "Rajesh Gupta",
      nationality: "Canada",
      location: "Jaipur City Palace",
      safetyScore: 76,
      status: "inactive",
      lastSeen: "1 hour ago",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Tourist Management</h2>
          <p className="text-muted-foreground mt-2">
            Monitor and manage registered tourists in the system
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex items-center space-x-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search tourists..." className="pl-10" />
          </div>
          <Button variant="outline">Filter</Button>
        </div>

        {/* Tourists Table */}
        <Card>
          <CardHeader>
            <CardTitle>Registered Tourists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tourists.map((tourist) => (
                <div
                  key={tourist.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{tourist.name}</span>
                      <Badge variant="outline">{tourist.nationality}</Badge>
                      <Badge
                        variant={tourist.status === "active" ? "default" : "secondary"}
                      >
                        {tourist.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{tourist.location}</span>
                      </div>
                      <span>Last seen: {tourist.lastSeen}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium">Safety Score</p>
                      <p
                        className={`text-lg font-bold ${
                          tourist.safetyScore >= 80
                            ? "text-green-600"
                            : tourist.safetyScore >= 60
                            ? "text-yellow-600"
                            : "text-red-600"
                        }`}
                      >
                        {tourist.safetyScore}%
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default TouristManagement;