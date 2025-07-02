import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { DashboardData } from "../../types/dashboard";

interface AdminPerformanceProps {
  data: DashboardData;
}

export function AdminPerformance({ data }: AdminPerformanceProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Lead Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Total Leads</span>
              <span className="font-semibold">
                {data.overview.leads.totalLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Pending</span>
              <span className="font-semibold text-yellow-600">
                {data.overview.leads.pendingLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Accepted</span>
              <span className="font-semibold text-blue-600">
                {data.overview.leads.acceptedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Completed</span>
              <span className="font-semibold text-green-600">
                {data.overview.leads.completedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Declined</span>
              <span className="font-semibold text-red-600">
                {data.overview.leads.declinedLeads}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Cancelled</span>
              <span className="font-semibold text-gray-600">
                {data.overview.leads.cancelledLeads}
              </span>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-green-600">
                {data.overview.leads.conversionRate}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quality Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Avg Quality</span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgQualityRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Avg Price</span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgPriceRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Punctuality</span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgPunctualityRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Experience</span>
              <span className="font-semibold">
                {parseFloat(
                  data.performanceMetrics.qualityMetrics.avgExperienceRating
                ).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Review Volume</span>
              <span className="font-semibold">
                {data.performanceMetrics.qualityMetrics.reviewVolume}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Low Rating Count</span>
              <span className="font-semibold text-red-600">
                {data.performanceMetrics.qualityMetrics.lowRatingCount}
              </span>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">Service Quality Score</p>
              <p className="text-2xl font-bold text-yellow-600">
                {data.performanceMetrics.keyMetrics.serviceQualityScore}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Reviews & Ratings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Total Reviews</span>
              <span className="font-semibold">
                {data.overview.reviews.totalReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Pending Reviews</span>
              <span className="font-semibold text-yellow-600">
                {data.overview.reviews.pendingReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Approved Reviews</span>
              <span className="font-semibold text-green-600">
                {data.overview.reviews.approvedReviews}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Average Rating</span>
              <span className="font-semibold text-blue-600">
                {parseFloat(data.overview.reviews.averageRating).toFixed(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Approval Rate</span>
              <span className="font-semibold text-purple-600">
                {data.overview.reviews.approvalRate}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Reviews This Period</span>
              <span className="font-semibold text-blue-600">
                {data.overview.reviews.reviewsThisPeriod}
              </span>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-600">Normalized Rating</p>
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
