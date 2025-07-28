import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminDetailedSectionProps {
  data: DashboardData;
}

export function AdminDetailedSection({ data }: AdminDetailedSectionProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
      {/* User Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            {t("adminDashboard.userAnalytics.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <div className="text-center p-2 sm:p-3 bg-blue-50 rounded-lg">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">
                  {data.overview.users.activeMasters}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("adminDashboard.userAnalytics.activeMasters")}
                </p>
              </div>
              <div className="text-center p-2 sm:p-3 bg-green-50 rounded-lg">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                  {data.userAnalytics.clientEngagement.activeClients}
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t("adminDashboard.userAnalytics.activeClients")}
                </p>
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">
                {t("adminDashboard.userAnalytics.growthRates")}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t("adminDashboard.userAnalytics.clientGrowth")}
                  </span>
                  <Badge variant="secondary">
                    {data.overview.users.clientGrowthRate}%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t("adminDashboard.userAnalytics.masterGrowth")}
                  </span>
                  <Badge variant="secondary">
                    {data.overview.users.masterGrowthRate}%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    {t("adminDashboard.userAnalytics.masterActivation")}
                  </span>
                  <Badge variant="secondary">
                    {data.overview.users.masterActivationRate}%
                  </Badge>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">
                {t("adminDashboard.userAnalytics.newUsersThisPeriod")}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-2 bg-blue-50 rounded">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-blue-600">
                    {data.overview.users.newClientsThisPeriod}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t("adminDashboard.userAnalytics.newClients")}
                  </p>
                </div>
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-sm sm:text-base md:text-lg font-bold text-green-600">
                    {data.overview.users.newMastersThisPeriod}
                  </p>
                  <p className="text-xs text-gray-600">
                    {t("adminDashboard.userAnalytics.newMasters")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ₾ {t("adminDashboard.financialOverview.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium">
                  {t("adminDashboard.financialOverview.platformRevenue")}
                </span>
                <span className="text-lg font-bold text-green-600">
                  ₾{data.financialMetrics.summary.totalPlatformRevenue}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="text-sm font-medium">
                  {t("adminDashboard.financialOverview.averageJobValue")}
                </span>
                <span className="text-lg font-bold text-blue-600">
                  ₾{data.financialMetrics.summary.avgJobValue}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                <span className="text-sm font-medium">
                  {t("adminDashboard.financialOverview.adminFees")}
                </span>
                <span className="text-lg font-bold text-purple-600">
                  ₾{data.financialMetrics.summary.totalAdminFees}
                </span>
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">
                {t("adminDashboard.financialOverview.leadAnalytics")}
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    {t("adminDashboard.financialOverview.averageLeadValue")}
                  </span>
                  <span className="font-semibold">
                    ₾
                    {data.overview.leads.averageLeadValue
                      ? parseFloat(
                          data.overview.leads.averageLeadValue
                        ).toFixed(2)
                      : "0.00"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>
                    {t("adminDashboard.financialOverview.acceptanceRate")}
                  </span>
                  <span className="font-semibold text-green-600">
                    {data.overview.leads.acceptanceRate}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>
                    {t("adminDashboard.financialOverview.leadsThisPeriod")}
                  </span>
                  <span className="font-semibold">
                    {data.overview.leads.leadsThisPeriod}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>
                    {t("adminDashboard.financialOverview.completedThisPeriod")}
                  </span>
                  <span className="font-semibold text-green-600">
                    {data.overview.leads.completedThisPeriod}
                  </span>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h4 className="font-medium mb-2">
                {t("adminDashboard.financialOverview.topCategories")}
              </h4>
              {data.financialMetrics.topCategories[0] && (
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">
                    {data.financialMetrics.topCategories[0].categoryName.en}
                  </p>
                  <p className="text-xs text-gray-500">
                    KA: {data.financialMetrics.topCategories[0].categoryName.ka}
                  </p>
                  <p className="text-xs text-gray-500">
                    RU: {data.financialMetrics.topCategories[0].categoryName.ru}
                  </p>
                  <p className="text-sm text-gray-600">
                    ₾{data.financialMetrics.topCategories[0].totalRevenue} •{" "}
                    {data.financialMetrics.topCategories[0].jobCount} jobs
                  </p>
                  <p className="text-xs text-gray-600">
                    Avg: ₾
                    {parseFloat(
                      data.financialMetrics.topCategories[0].avgPrice
                    ).toFixed(2)}{" "}
                    • {data.financialMetrics.topCategories[0].masterCount}{" "}
                    masters
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
