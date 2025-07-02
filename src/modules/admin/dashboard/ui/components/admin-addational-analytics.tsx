import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import { DollarSign } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";

interface AdminAddationalAnalyticsProps {
  data: DashboardData;
}

export function AdminAddationalAnalytics({ data }: AdminAddationalAnalyticsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Registration Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Registration Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.userAnalytics.registrationTrends.map((trend) => (
              <div
                key={trend.date}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <span className="text-sm font-medium">
                  {new Date(trend.date).toLocaleDateString()}
                </span>
                <div className="flex gap-4 text-sm">
                  <span className="text-blue-600">{trend.clients} clients</span>
                  <span className="text-green-600">
                    {trend.masters} masters
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Revenue Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.financialMetrics.revenueTrends.map((revenue) => (
              <div
                key={revenue.date}
                className="flex justify-between items-center p-2 bg-green-50 rounded"
              >
                <span className="text-sm font-medium">
                  {new Date(revenue.date).toLocaleDateString()}
                </span>
                <div className="text-right">
                  <p className="font-semibold text-green-600">
                    ${revenue.totalRevenue}
                  </p>
                  <p className="text-xs text-gray-600">
                    {revenue.jobCount} jobs
                  </p>
                  <p className="text-xs text-gray-500">
                    avg ${parseFloat(revenue.avgJobValue).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm font-medium">Fee Collection</p>
              <p className="text-xs text-gray-600">
                {data.financialMetrics.feeCollection.length === 0
                  ? "No fee collection data available"
                  : `${data.financialMetrics.feeCollection.length} fee records`}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
