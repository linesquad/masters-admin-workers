import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Star } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminBillingPointProps {
  data: DashboardData;
}

export function AdminBillingPoint({ data }: AdminBillingPointProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            {t("adminDashboard.billingOverview.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-yellow-50 rounded-lg text-center">
                <p className="text-lg font-bold text-yellow-600">
                  ${data.overview.billing.totalPendingFees}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.billingOverview.pendingFees")}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">
                  ${data.overview.billing.totalPaidFees}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.billingOverview.paidFees")}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-50 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">
                  ${data.overview.billing.totalRejectedFees}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.billingOverview.rejectedFees")}
                </p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg text-center">
                <p className="text-lg font-bold text-orange-600">
                  {data.overview.billing.overdueBills}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.billingOverview.overdueBills")}
                </p>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex justify-between">
                <span className="text-sm">
                  {t("adminDashboard.billingOverview.feesThisPeriod")}
                </span>
                <span className="font-semibold">
                  ${data.overview.billing.feesThisPeriod}
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm">
                  {t("adminDashboard.billingOverview.overdueRate")}
                </span>
                <span className="font-semibold">
                  {data.overview.billing.overdueRate}%
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm">
                  {t("adminDashboard.billingOverview.collectionRate")}
                </span>
                <span className="font-semibold">
                  {data.overview.billing.collectionRate === "NaN"
                    ? "N/A"
                    : data.overview.billing.collectionRate + "%"}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5" />
            {t("adminDashboard.pointsEngagement.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">
                  {data.systemHealth.pointSystem.totalPointsAwarded}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.pointsEngagement.pointsAwarded")}
                </p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">
                  {data.systemHealth.pointSystem.totalPointsDeducted}
                </p>
                <p className="text-xs text-gray-600">
                  {t("adminDashboard.pointsEngagement.pointsDeducted")}
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {t("adminDashboard.pointsEngagement.masterWithCertificates")}
                </span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.mastersWithCertificates}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {t("adminDashboard.pointsEngagement.totalCertificates")}
                </span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.totalCertificates}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {t("adminDashboard.pointsEngagement.totalQuestions")}
                </span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.totalQuestions}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {t("adminDashboard.pointsEngagement.negativePointsMasters")}
                </span>
                <Badge variant="outline">
                  {data.systemHealth.pointSystem.mastersWithNegativePoints}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">
                  {t("adminDashboard.pointsEngagement.mastersOverPointCap")}
                </span>
                <Badge variant="outline">
                  {data.systemHealth.pointSystem.mastersOverPointCap}
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
