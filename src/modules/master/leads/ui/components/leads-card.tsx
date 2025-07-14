import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Lead } from "@/modules/master/leads/types";
import { Link } from "@tanstack/react-router";

interface LeadsCardProps {
  lead: Lead;
}

export function LeadsCard({ lead }: LeadsCardProps) {
  return (
    <Card className="w-[350px] bg-blue-50 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-col items-center justify-center gap-2 bg-blue-100 rounded-t-lg p-4">
        <CardTitle className="text-blue-800">{lead.client.fullName}</CardTitle>
        <CardDescription className="text-center text-blue-600">
          {lead.jobTitle.en} ({lead.categoryName.en})
        </CardDescription>
      </CardHeader>
      <DottedSeparator className="mb-2 border-blue-200" />
      <CardContent className="space-y-4 p-6">
        <div className="flex justify-between">
          <span className="font-medium text-blue-700">Status:</span>
          <span className="capitalize text-blue-900 font-semibold">
            {lead.status}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-blue-700">Location:</span>
          <span className="text-blue-800">{lead.location}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-blue-700">Requested Time:</span>
          <span className="text-blue-800">
            {new Date(lead.requestedTime).toLocaleString()}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-blue-700">Price:</span>
          <span className="text-blue-800 font-medium">
            {lead.price ? `$${lead.price}` : "Not set"}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium text-blue-700">Contact:</span>
          <span className="text-blue-800">{lead.client.phone}</span>
        </div>
        <div className="pt-4 border-t border-blue-100">
          <p className="font-medium text-blue-700">Message:</p>
          <p className="text-sm text-blue-600 mt-2 bg-blue-50 p-3 rounded-lg">
            {lead.message}
          </p>
        </div>
      </CardContent>
      <DottedSeparator className="mb-4 border-blue-200" />
      <CardContent className="flex justify-between">
        <Button asChild>
          <Link to="/master/leads/$id" params={{ id: lead.id }}>
            View Lead
          </Link>
        </Button>
        <Button variant={"secondary"}>Update Status</Button>
      </CardContent>
    </Card>
  );
}
