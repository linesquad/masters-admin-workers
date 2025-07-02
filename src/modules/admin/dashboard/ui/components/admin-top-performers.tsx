import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { Star } from "lucide-react";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { DashboardData } from "../../types/dashboard";

interface AdminTopPerformersProps {
  data: DashboardData;
}

export function AdminTopPerformers({ data }: AdminTopPerformersProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Top Masters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {data.topPerformers.topMasters
                  .slice(0, 5)
                  .map((master, index: number) => (
                    <div
                      key={master.masterId}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-medium">{master.masterName}</p>
                          <p className="text-sm text-gray-600">
                            {master.completedJobs} jobs • $
                            {master.totalEarnings}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">
                          {master.totalPoints} pts
                        </p>
                        {master.avgRating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span className="text-sm">
                              {parseFloat(master.avgRating).toFixed(1)}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Geographic Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Masters by City</h4>
                  <div className="space-y-2">
                    {data.geographicalData.mastersByCity.map((city) => (
                      <div
                        key={city.cityId}
                        className="flex justify-between items-center p-2 bg-gray-50 rounded"
                      >
                        <span className="text-sm">{city.cityName}</span>
                        <div className="text-right">
                          <span className="font-semibold">
                            {city.masterCount}
                          </span>
                          <span className="text-xs text-gray-500 ml-1">
                            ({city.activeMasters} active)
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Service Locations</h4>
                  {data.geographicalData.servicesByLocation.map((location) => (
                    <div
                      key={location.location}
                      className="p-2 bg-blue-50 rounded"
                    >
                      <p className="font-medium text-sm">{location.location}</p>
                      <p className="text-xs text-gray-600">
                        {location.requestCount} requests • $
                        {location.totalValue} total
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                  <p className="text-sm text-gray-600">Coverage</p>
                  <p className="font-semibold">
                    {data.geographicalData.insights.locationCoverage}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}
