import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import type { DashboardData } from "../../types/dashboard";

interface AdminRecentActivitiesProps {
  data: DashboardData;
}

export function AdminRecentActivities({ data }: AdminRecentActivitiesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div>
            <h4 className="font-medium mb-3">Latest Users</h4>
            <div className="space-y-2">
              {data.recentActivities.latestUsers
                .slice(0, 3)
                .map((user) => (
                  <div key={user.id} className="p-2 bg-gray-50 rounded text-sm">
                    <p className="font-medium">{user.fullName}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {user.role}
                      </Badge>
                      <span className="text-xs text-gray-500">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Latest Leads</h4>
            <div className="space-y-2">
              {data.recentActivities.latestLeads.map((lead) => (
                <div key={lead.id} className="p-2 bg-gray-50 rounded text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs">
                      {lead.status}
                    </Badge>
                    <span className="font-medium">${lead.price}</span>
                  </div>
                  <p className="text-xs text-gray-600">{lead.location}</p>
                  <p className="text-xs text-gray-500">
                    {lead.client_name} → {lead.master_name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Latest Reviews</h4>
            <div className="space-y-2">
              {data.recentActivities.latestReviews.map((review) => (
                <div key={review.id} className="p-2 bg-gray-50 rounded text-sm">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500" />
                      <span className="font-medium">
                        {parseFloat(review.avgRating).toFixed(1)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {review.status}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-600 truncate">
                    {review.comment}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    by {review.clientName}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Latest Questions</h4>
            <div className="space-y-2">
              {data.recentActivities.latestQuestions
                .slice(0, 3)
                .map((question) => (
                  <div
                    key={question.id}
                    className="p-2 bg-gray-50 rounded text-sm"
                  >
                    <p className="font-medium text-xs truncate">
                      {question.question}
                    </p>
                    <div className="mt-1">
                      {question.answer ? (
                        <Badge variant="secondary" className="text-xs">
                          Answered
                        </Badge>
                      ) : (
                        <Badge variant="destructive" className="text-xs">
                          Pending
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {question.askedByName} → {question.masterName}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
