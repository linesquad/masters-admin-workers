import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import { DollarSign } from "lucide-react";
import { Activity } from "lucide-react";
import { Star } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminMetricsOverviewProps {
  data: DashboardData;
}

export function AdminMetricsOverview({ data }: AdminMetricsOverviewProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-6 sm:mb-8">
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-xs sm:text-sm font-medium">
                {t("adminDashboard.statsCardsHeader.totalUsers")}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                {parseInt(data.overview.users.totalClients) +
                  parseInt(data.overview.users.totalMasters) +
                  parseInt(data.overview.users.totalAdmins)}
              </p>
              <p className="text-blue-100 text-xs">
                {data.overview.users.totalClients}{" "}
                {t("adminDashboard.statsCardsHeader.clients")} •{" "}
                {data.overview.users.totalMasters}{" "}
                {t("adminDashboard.statsCardsHeader.masters")}
              </p>
            </div>
            <Users className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-blue-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-xs sm:text-sm font-medium">
                {t("adminDashboard.statsCardsHeader.totalRevenue")}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                ${data.overview.leads.totalRevenue}
              </p>
              <p className="text-green-100 text-xs">
                {data.overview.leads.completedLeads}{" "}
                {t("adminDashboard.statsCardsHeader.completedJobs")}
              </p>
            </div>
            <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-green-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-xs sm:text-sm font-medium">
                {t("adminDashboard.statsCardsHeader.totalLeads")}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                {data.overview.leads.totalLeads}
              </p>
              <p className="text-purple-100 text-xs">
                {data.overview.leads.conversionRate}%{" "}
                {t("adminDashboard.statsCardsHeader.conversionRate")}
              </p>
            </div>
            <Activity className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-purple-200" />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <CardContent className="p-3 sm:p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-100 text-xs sm:text-sm font-medium">
                {t("adminDashboard.statsCardsHeader.avgRating")}
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">
                {data.overview.reviews.normalizedRating}
              </p>
              <p className="text-yellow-100 text-xs">
                {data.overview.reviews.totalReviews}{" "}
                {t("adminDashboard.statsCardsHeader.totalReviews")}
              </p>
            </div>
            <Star className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-yellow-200" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
