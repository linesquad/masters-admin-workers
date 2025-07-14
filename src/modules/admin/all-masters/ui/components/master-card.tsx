import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Master } from "@/modules/admin/all-masters/types";
import { Link } from "@tanstack/react-router";

interface MasterCardProps {
  master: Master;
}

export function MasterCard({ master }: MasterCardProps) {
  return (
    <Card className="mt-10 border-blue-200 bg-blue-50">
      <CardHeader className="border-b border-blue-100">
        <CardTitle className="text-blue-800">{master.fullName}</CardTitle>
        <CardDescription className="flex flex-col gap-1 text-blue-600">
          <span>{master.email}</span>
          <span>{master.phone}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 p-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-sm text-blue-600">Total Reviews</p>
          <p className="text-blue-800 font-medium">{master.totalReviews}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-sm text-blue-600">Total Score</p>
          <p className="text-blue-800 font-medium">{master.totalScore}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-sm text-blue-600">Avg Price</p>
          <p className="text-blue-800 font-medium">{master.avgPrice || "-"}</p>
        </div>
        <div className="bg-blue-100 p-3 rounded-lg">
          <p className="text-sm text-blue-600">Avg Quality</p>
          <p className="text-blue-800 font-medium">
            {master.avgQuality || "-"}
          </p>
        </div>
      </CardContent>
      <div className="py-4">
        <DottedSeparator />
      </div>
      <CardContent className="flex justify-between">
        <Button asChild variant="outline">
          <Link to="/get-masters/$id" params={{ id: master.id }}>
            View Details
          </Link>
        </Button>
        <Button asChild variant="default">
          <Link
            to="/get-masters/leads/$leadsId"
            params={{ leadsId: master.id }}
          >
            View Leads
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
