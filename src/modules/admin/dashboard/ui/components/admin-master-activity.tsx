import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminMasterActivityProps {
  data: DashboardData;
}

export function AdminMasterActivity({ data }: AdminMasterActivityProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>
            {t("adminDashboard.masterActivityDetails.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.userAnalytics.masterActivity.slice(0, 3).map((master) => (
              <div key={master.masterId} className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-sm">{master.masterName}</p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-600">
                  <span>
                    {t("adminDashboard.masterActivityDetails.leads")}:{" "}
                    {master.totalLeads}
                  </span>
                  <span>
                    {t("adminDashboard.masterActivityDetails.completed")}:{" "}
                    {master.completedLeads}
                  </span>
                  <span>
                    {t("adminDashboard.masterActivityDetails.points")}:{" "}
                    {master.currentPoints}
                  </span>
                  <span>
                    {t("adminDashboard.masterActivityDetails.status")}:{" "}
                    {master.availability}
                  </span>
                  <span>
                    {t("adminDashboard.masterActivityDetails.earnings")}: $
                    {master.totalEarnings}
                  </span>
                  <span>
                    {t("adminDashboard.masterActivityDetails.avgRating")}:{" "}
                    {master.avgRating
                      ? parseFloat(master.avgRating).toFixed(1)
                      : "N/A"}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {t("adminDashboard.masterActivityDetails.joined")}:{" "}
                  {new Date(master.joinedAt).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("adminDashboard.topClients.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.topPerformers.topClients.map((client, index: number) => (
              <div
                key={client.clientId}
                className="flex items-center justify-between p-3 bg-blue-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{client.clientName}</p>
                    <p className="text-xs text-gray-600">
                      {client.totalOrders}{" "}
                      {t("adminDashboard.topClients.orders")} (
                      {client.completedOrders}{" "}
                      {t("adminDashboard.topClients.completed")})
                    </p>
                    <p className="text-xs text-gray-500">
                      {t("adminDashboard.topClients.joined")}:{" "}
                      {new Date(client.joinedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-blue-600">
                    ₾{client.totalSpent}
                  </p>
                  <p className="text-xs text-gray-500">
                    avg ₾{parseFloat(client.avgOrderValue).toFixed(0)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t("adminDashboard.systemCategories.title")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">
                  {data.overview.system.totalCategories}
                </p>
                <p className="text-sm text-gray-600">
                  {t("adminDashboard.systemCategories.totalCategories")}
                </p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <p className="text-2xl font-bold text-orange-600">
                  {data.overview.system.totalJobs}
                </p>
                <p className="text-sm text-gray-600">
                  {t("adminDashboard.systemCategories.totalJobs")}
                </p>
              </div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t("adminDashboard.systemCategories.serviceUtilization")}
              </p>
              <p className="text-xl font-bold text-green-600">
                {data.overview.system.serviceUtilization}%
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t("adminDashboard.systemCategories.activeOfferings")}
              </p>
              <p className="text-xl font-bold text-blue-600">
                {data.overview.system.activeJobOfferings}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
