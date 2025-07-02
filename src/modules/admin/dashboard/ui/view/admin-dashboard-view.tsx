import { useGetAdminDashboard } from "@/modules/admin/dashboard/hooks/useGetAdminDashboard";
import { AdminRecentActivities } from "../components/admin-recent-activities";
import type { DashboardResponse, DashboardData } from "../../types/dashboard";
import { AdminLocationUtil } from "../components/admin-location-util";
import { AdminBillingPoint } from "../components/admin-billing.point";
import { AdminMasterActivity } from "../components/admin-master-activity";
import { AdminSystemHealth } from "../components/admin-system-health";
import { AdminAddationalAnalytics } from "../components/admin-addational-analytics";
import { AdminTopPerformers } from "../components/admin-top-performers";
import { AdminPerformance } from "../components/admin-performance";
import { AdminDetailedSection } from "../components/admin-detailed.section";
import { AdminMetricsOverview } from "../components/admin-metrics-overview";
import { AdminNoData } from "../components/loaders/admin-no-data";
import { AdminError } from "../components/loaders/admin-error";
import { AdminLoader } from "../components/loaders/admin-loader";

export function AdminDashboardView() {
  const {
    data: dashboardData,
    isLoading,
    isError,
    error,
  } = useGetAdminDashboard();

  if (isLoading) {
    return <AdminLoader />;
  }

  if (isError) {
    return <AdminError error={error} />;
  }

  const typedDashboardData = dashboardData as DashboardResponse;

  if (!typedDashboardData?.data) {
    return <AdminNoData />;
  }

  const data: DashboardData = typedDashboardData.data;
  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 break-words">
            Last updated: {new Date(data.metadata.generatedAt).toLocaleString()}{" "}
            • Health Score:{" "}
            <span className="font-semibold text-green-600">
              {data.systemHealth.healthScore}%
            </span>
          </p>
          <p className="text-xs sm:text-sm text-gray-500 break-words">
            Timeframe: {data.metadata.timeframe} • Data:{" "}
            {data.metadata.dataFreshness} • Requested:{" "}
            {new Date(typedDashboardData.metadata.requestedAt).toLocaleString()}{" "}
            • By: {typedDashboardData.metadata.requestedBy?.slice(0, 8)}...
          </p>
        </div>

        {/* Key Metrics Overview */}
        <AdminMetricsOverview data={data} />

        {/* Detailed Sections */}
        <AdminDetailedSection data={data} />

        {/* Performance Metrics */}
        <AdminPerformance data={data} />

        {/* Top Performers */}
        <AdminTopPerformers data={data} />

        {/* Additional Analytics Sections */}
        <AdminAddationalAnalytics data={data} />

        {/* System Health & Notifications */}
        <AdminSystemHealth data={data} />

        {/* Master Activity & Performance */}
        <AdminMasterActivity data={data} />

        {/* Billing & Points System */}
        <AdminBillingPoint data={data} />

        {/* Location Utilization */}
        <AdminLocationUtil data={data} />

        {/* Recent Activities */}
        <AdminRecentActivities data={data} />
      </div>
    </div>
  );
}
