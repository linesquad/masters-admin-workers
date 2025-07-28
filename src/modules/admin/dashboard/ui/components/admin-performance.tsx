import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardData } from "../../types/dashboard";
import { useTranslation } from "react-i18next";

interface AdminPerformanceProps {
  data: DashboardData;
}

export function AdminPerformance({ data }: AdminPerformanceProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {t("adminDashboard.leadsStatusBreakdown.totalLeads")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.totalLeads")}
              </span>
              <span className="font-semibold">
                {data.overview.leads.totalLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.pending")}
              </span>
              <span className="font-semibold text-yellow-600">
                {data.overview.leads.pendingLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.accepted")}
              </span>
              <span className="font-semibold text-blue-600">
                {data.overview.leads.acceptedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.completed")}
              </span>
              <span className="font-semibold text-green-600">
                {data.overview.leads.completedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.declined")}
              </span>
              <span className="font-semibold text-red-600">
                {data.overview.leads.declinedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.leadsStatusBreakdown.cancelled")}
              </span>
              <span className="font-semibold text-gray-600">
                {data.overview.leads.cancelledLeads}
              </span>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t("adminDashboard.leadsStatusBreakdown.conversionRate")}
              </p>
              <p className="text-2xl font-bold text-green-600">
                {data.overview.leads.conversionRate}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {t("adminDashboard.qualityMetrics.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.avgQuality")}
              </span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgQualityRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.avgPrice")}
              </span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgPriceRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.avgPunctuality")}
              </span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgPunctualityRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.avgExperience")}
              </span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgExperienceRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.reviewVolume")}
              </span>
              <span className="font-semibold">
                {data.performanceMetrics.qualityMetrics.reviewVolume}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.qualityMetrics.lowRatingCount")}
              </span>
              <span className="font-semibold text-red-600">
                {data.performanceMetrics.qualityMetrics.lowRatingCount}
              </span>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t("adminDashboard.qualityMetrics.serviceQualityScore")}
              </p>
              <p className="text-2xl font-bold text-yellow-600">
                {data.performanceMetrics.keyMetrics.serviceQualityScore}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">
            {t("adminDashboard.reviewsRatings.title")}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.totalReviews")}
              </span>
              <span className="font-semibold">
                {data.overview.reviews.totalReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.pendingReviews")}
              </span>
              <span className="font-semibold text-yellow-600">
                {data.overview.reviews.pendingReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.approvedReviews")}
              </span>
              <span className="font-semibold text-green-600">
                {data.overview.reviews.approvedReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.averadgeRating")}
              </span>
              <span className="font-semibold text-blue-600">
                {parseFloat(data.overview.reviews.averageRating).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.approvalRate")}
              </span>
              <span className="font-semibold text-purple-600">
                {data.overview.reviews.approvalRate}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">
                {t("adminDashboard.reviewsRatings.reviewsThisPeriod")}
              </span>
              <span className="font-semibold text-blue-600">
                {data.overview.reviews.reviewsThisPeriod}
              </span>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">
                {t("adminDashboard.reviewsRatings.normalizedRating")}
              </p>
              <p className="text-2xl font-bold text-yellow-600">
                {data.overview.reviews.normalizedRating}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
