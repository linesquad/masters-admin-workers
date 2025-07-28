import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminLocationUtilProps {
  data: DashboardData;
}

export function AdminLocationUtil({ data }: AdminLocationUtilProps) {
  const { t } = useTranslation();
  return (
    <div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            {t("adminDashboard.locationUtilizationDemographics.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">
                {t(
                  "adminDashboard.locationUtilizationDemographics.cityPartsOverview"
                )}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {data.geographicalData.locationUtilization
                  .slice(0, 6)
                  .map((location) => (
                    <div
                      key={location.cityPartId}
                      className="p-2 sm:p-3 border rounded-lg"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-xs sm:text-sm truncate">
                            {location.cityPartName}
                          </p>
                          <p className="text-xs text-gray-600 truncate">
                            {location.cityName}
                          </p>
                        </div>
                        <Badge
                          variant={location.isActive ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {location.isActive ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>
                            {t(
                              "adminDashboard.locationUtilizationDemographics.unlockCost"
                            )}
                            :
                          </span>
                          <span className="font-semibold">
                            ${location.unlockCost}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>
                            {t(
                              "adminDashboard.locationUtilizationDemographics.masters"
                            )}
                            :
                          </span>
                          <span className="font-semibold">
                            {location.mastersUnlocked}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <Separator />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div>
                <h4 className="font-medium mb-2">
                  {t(
                    "adminDashboard.locationUtilizationDemographics.demographics"
                  )}
                </h4>
                <div className="space-y-2">
                  <div className="p-2 bg-blue-50 rounded">
                    <p className="text-sm font-medium">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.mastersbyAvailability"
                      )}
                    </p>
                    {data.userAnalytics.demographics.mastersByAvailability.map(
                      (avail) => (
                        <p
                          key={avail.availability}
                          className="text-xs text-gray-600"
                        >
                          {avail.availability}: {avail.count} masters
                        </p>
                      )
                    )}
                  </div>
                  <div className="p-2 bg-green-50 rounded">
                    <p className="text-sm font-medium">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.mastersByCity"
                      )}
                    </p>
                    {data.userAnalytics.demographics.mastersByCity.map(
                      (city) => (
                        <p key={city.city} className="text-xs text-gray-600">
                          {city.city}: {city.count} masters
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  {t(
                    "adminDashboard.locationUtilizationDemographics.clientEngagement"
                  )}
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.totalClients"
                      )}
                    </span>
                    <span className="font-semibold">
                      {data.userAnalytics.clientEngagement.totalClients}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.activeClients"
                      )}
                    </span>
                    <span className="font-semibold text-green-600">
                      {data.userAnalytics.clientEngagement.activeClients}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.repeatClients"
                      )}
                    </span>
                    <span className="font-semibold text-blue-600">
                      {data.userAnalytics.clientEngagement.repeatClients}
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">
                  {t(
                    "adminDashboard.locationUtilizationDemographics.geographicInsights"
                  )}
                </h4>
                <div className="space-y-2">
                  <div className="p-2 bg-purple-50 rounded">
                    <p className="text-xs text-gray-600">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.mostPopularCities"
                      )}
                    </p>
                    <p className="font-semibold">
                      {data.geographicalData.insights.mostPopularCity}
                    </p>
                  </div>
                  <div className="p-2 bg-orange-50 rounded">
                    <p className="text-xs text-gray-600">
                      {t(
                        "adminDashboard.locationUtilizationDemographics.topLocations"
                      )}
                    </p>
                    <p className="font-semibold">
                      {data.geographicalData.insights.mostRequestedLocation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
