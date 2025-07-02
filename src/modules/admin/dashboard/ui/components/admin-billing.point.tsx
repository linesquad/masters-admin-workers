import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Star } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";

interface AdminBillingPointProps {
  data: DashboardData;
}

export function AdminBillingPoint({ data }: AdminBillingPointProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Billing Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-yellow-50 rounded-lg text-center">
                <p className="text-lg font-bold text-yellow-600">
                  ${data.overview.billing.totalPendingFees}
                </p>
                <p className="text-xs text-gray-600">Pending Fees</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">
                  ${data.overview.billing.totalPaidFees}
                </p>
                <p className="text-xs text-gray-600">Paid Fees</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-red-50 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">
                  ${data.overview.billing.totalRejectedFees}
                </p>
                <p className="text-xs text-gray-600">Rejected Fees</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg text-center">
                <p className="text-lg font-bold text-orange-600">
                  {data.overview.billing.overdueBills}
                </p>
                <p className="text-xs text-gray-600">Overdue Bills</p>
              </div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="flex justify-between">
                <span className="text-sm">Fees This Period</span>
                <span className="font-semibold">
                  ${data.overview.billing.feesThisPeriod}
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm">Overdue Rate</span>
                <span className="font-semibold">
                  {data.overview.billing.overdueRate}%
                </span>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-sm">Collection Rate</span>
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
            Points & Engagement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-green-50 rounded-lg text-center">
                <p className="text-lg font-bold text-green-600">
                  {data.systemHealth.pointSystem.totalPointsAwarded}
                </p>
                <p className="text-xs text-gray-600">Points Awarded</p>
              </div>
              <div className="p-3 bg-red-50 rounded-lg text-center">
                <p className="text-lg font-bold text-red-600">
                  {data.systemHealth.pointSystem.totalPointsDeducted}
                </p>
                <p className="text-xs text-gray-600">Points Deducted</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Masters with Certificates</span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.mastersWithCertificates}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Certificates</span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.totalCertificates}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Total Questions</span>
                <Badge variant="secondary">
                  {data.systemHealth.engagement.totalQuestions}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Negative Points Masters</span>
                <Badge variant="outline">
                  {data.systemHealth.pointSystem.mastersWithNegativePoints}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Masters Over Point Cap</span>
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
