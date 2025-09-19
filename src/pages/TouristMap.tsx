import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Users, AlertTriangle } from "lucide-react";

const TouristMap = () => {
  const mapRegions = [
    {
      name: "Red Fort Area",
      city: "Delhi",
      touristCount: 45,
      alertLevel: "low",
      coordinates: "28.6562° N, 77.2410° E",
    },
    {
      name: "Gateway of India",
      city: "Mumbai",
      touristCount: 67,
      alertLevel: "medium",
      coordinates: "18.9220° N, 72.8347° E",
    },
    {
      name: "City Palace",
      city: "Jaipur",
      touristCount: 32,
      alertLevel: "high",
      coordinates: "26.9255° N, 75.8237° E",
    },
    {
      name: "Hawa Mahal",
      city: "Jaipur",
      touristCount: 28,
      alertLevel: "low",
      coordinates: "26.9239° N, 75.8267° E",
    },
  ];

  const getAlertColor = (level: string) => {
    switch (level) {
      case "high":
        return "text-red-600 bg-red-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "low":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Tourist Heat Map</h2>
          <p className="text-muted-foreground mt-2">
            Real-time visualization of tourist distribution and risk zones
          </p>
        </div>

        {/* Map Overview Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Regions</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Tourists</p>
                  <p className="text-2xl font-bold">172</p>
                </div>
                <Users className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">High Risk Zones</p>
                  <p className="text-2xl font-bold">1</p>
                </div>
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Safe Zones</p>
                  <p className="text-2xl font-bold">23</p>
                </div>
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card>
          <CardHeader>
            <CardTitle>Interactive Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium text-muted-foreground">
                  Interactive Map View
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Real-time tourist locations and heat zones would be displayed here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Regional Data */}
        <Card>
          <CardHeader>
            <CardTitle>Regional Tourist Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mapRegions.map((region, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{region.name}</span>
                      <Badge variant="outline">{region.city}</Badge>
                      <Badge
                        className={getAlertColor(region.alertLevel)}
                        variant="secondary"
                      >
                        {region.alertLevel} risk
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {region.coordinates}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{region.touristCount}</p>
                    <p className="text-sm text-muted-foreground">tourists</p>
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

export default TouristMap;