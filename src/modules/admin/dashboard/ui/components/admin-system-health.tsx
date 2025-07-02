import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, AlertCircle, Star } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";

interface AdminSystemHealthProps {
  data: DashboardData;
}

export function AdminSystemHealth({ data }: AdminSystemHealthProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            System Health & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm">Total Notifications</span>
              <span className="font-semibold">
                {data.systemHealth.system.totalNotifications}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Unread Notifications</span>
              <span className="font-semibold text-orange-600">
                {data.systemHealth.system.unreadNotifications}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Urgent Notifications</span>
              <span className="font-semibold text-red-600">
                {data.systemHealth.system.urgentNotifications}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Overdue Notifications</span>
              <span className="font-semibold text-red-600">
                {data.systemHealth.system.overdueNotifications}
              </span>
            </div>
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Overall Health Score</p>
              <p className="text-2xl font-bold text-green-600">
                {data.systemHealth.healthScore}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Master Performance Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.performanceMetrics.masterPerformance.map((master) => (
              <div key={master.masterId} className="p-3 bg-gray-50 rounded-lg">
                <p className="font-medium text-sm">{master.masterName}</p>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs text-gray-600">
                  <span>Leads Received: {master.leadsReceived}</span>
                  <span>Completed: {master.leadsCompleted}</span>
                  <span>Completion Rate: {master.completionRate}%</span>
                  <span>Response Rate: {master.responseRate || "N/A"}</span>
                </div>
                <div className="mt-2 p-2 bg-blue-50 rounded text-xs">
                  <p>
                    <strong>Key Metrics:</strong>
                  </p>
                  <p>
                    Master Response Rate:{" "}
                    {data.performanceMetrics.keyMetrics.masterResponseRate}%
                  </p>
                  <p>
                    Avg Response Time:{" "}
                    {data.performanceMetrics.keyMetrics.avgResponseTimeHours}h
                  </p>
                  <p>
                    Lead Conversion:{" "}
                    {data.performanceMetrics.keyMetrics.leadConversionRate}%
                  </p>
                  <p>
                    Funnel Response Time:{" "}
                    {data.performanceMetrics.conversionFunnel.avgResponseTime ||
                      "N/A"}
                  </p>
                </div>
                {master.avgRating && (
                  <div className="flex items-center gap-1 mt-1">
                    <Star className="h-3 w-3 text-yellow-500" />
                    <span className="text-xs">
                      {parseFloat(master.avgRating).toFixed(1)} rating
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
