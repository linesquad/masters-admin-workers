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
import { Link, useLocation } from "@tanstack/react-router";
import { useCompleteLead } from "../../hooks/use-complete-lead";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ResponsiveModal } from "@/components/responsive-modal";
import { CompleteLeadForm } from "./complete-lead-form";
import { useUser } from "@/modules/auth/hooks/useUser";
import { useAwardMasterPoints } from "@/modules/admin/all-masters/hooks/use-award-master";

interface LeadsCardProps {
  lead: Lead;
}

export function LeadsCard({ lead }: LeadsCardProps) {
  const pathname = useLocation().pathname;
  const { completeLeadMutate, isPending } = useCompleteLead();
  const { mutate: awardMasterPoints, isPending: isAwardingPointsPending } =
    useAwardMasterPoints();
  const { data: user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const handleCompleteLead = () => {
    if (price === 0 || isNaN(price) || price < 1) {
      toast.error("Price is not set");
      return;
    }
    completeLeadMutate({ leadId: lead.id, price });
    setIsOpen(false);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleAwardMasterPoints = () => {
    awardMasterPoints({
      leadId: lead.id,
      masterId: lead.masterInfo?.masterId || "",
    });
    setIsOpen(false);
  };

  return (
    <Card className="w-[350px] bg-blue-50 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
      <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
        <CompleteLeadForm
          leadId={lead.id}
          price={price}
          setPrice={setPrice}
          mutate={handleCompleteLead}
          onCancel={handleCloseModal}
        />
      </ResponsiveModal>
      <CardHeader className="flex flex-col items-center justify-center gap-2 bg-blue-100 rounded-t-lg p-4">
        <CardTitle className="text-blue-800">{lead.client.fullName}</CardTitle>
        <CardDescription className="text-center text-blue-600">
          {lead.jobTitle.en} ({lead.categoryName.en})
        </CardDescription>
        {pathname.includes("get-masters") && (
          <CardDescription className="text-center text-black">
            <img
              src={lead.masterInfo.imageUrl}
              alt={lead.masterInfo.masterName}
              className="w-10 h-10 rounded-full"
            />
          </CardDescription>
        )}
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
            {lead.price ? `${lead.price} ₾` : "Not set"}
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
        {pathname.includes("get-masters") ? (
          <Button
            onClick={handleAwardMasterPoints}
            variant={"default"}
            disabled={isAwardingPointsPending}
          >
            {isAwardingPointsPending ? "Awarding..." : "Award Points"}
          </Button>
        ) : (
          <Button
            asChild
            variant={"outline"}
            disabled={user?.role !== "master"}
            className="cursor-not-allowed"
          >
            <Link to="/master/leads/$id" params={{ id: lead.id }}>
              View Lead
            </Link>
          </Button>
        )}
        <Button
          onClick={() => setIsOpen(true)}
          variant={"default"}
          disabled={user?.role !== "master" || pathname.includes("get-masters")}
          className={`cursor-not-allowed ${
            pathname.includes("get-masters") ? "cursor-pointer" : ""
          }`}
        >
          {isPending ? "Completing..." : "Complete Lead"}
        </Button>
      </CardContent>
    </Card>
  );
}
