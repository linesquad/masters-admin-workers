import { Button } from "@/components/ui/button";
import type { BillingItem } from "../../types";
import { ResponsiveModal } from "@/components/responsive-modal";
import { BillingReviewForm } from "./billing-review-form";
import { useState } from "react";
import { useSendReminder } from "../../hooks/use-send-reminder";

interface BillingStatsCardProps {
  billing: BillingItem;
}

export const BillingStatsCard = ({ billing }: BillingStatsCardProps) => {
  const [open, setOpen] = useState(false);
  const [openProof, setOpenProof] = useState(false);
  const { mutate, isPending } = useSendReminder();
  const close = () => setOpen(false);
  const sendReminder = () => {
    mutate(billing.id);
  };
  console.log(billing);
  return (
    <div className="border rounded-lg p-6 shadow-sm bg-white">
      <ResponsiveModal open={open} onOpenChange={setOpen}>
        <BillingReviewForm billingId={billing.id} onClose={close} />
      </ResponsiveModal>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{billing.masterName}</h3>
          <p className="text-sm text-gray-500">{billing.masterEmail}</p>
          <p className="text-sm text-gray-500">{billing.masterPhone}</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            billing.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {billing.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg w-full">
          <p className="text-sm text-gray-500">Total Jobs</p>
          <p className="font-medium">{billing.totalJobs}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Total Amount</p>
          <p className="font-medium">${billing.totalAmount}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Admin Fee</p>
          <p className="font-medium">${billing.adminFee}</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>
          Week: {new Date(billing.weekStart).toLocaleDateString()} -{" "}
          {new Date(billing.weekEnd).toLocaleDateString()}
        </span>
        <span>Due: {new Date(billing.dueDate).toLocaleDateString()}</span>
      </div>

      <div className="pt-4 border-t">
        <p className="text-sm text-gray-500">
          Reminders sent: {billing.remindersSent}
        </p>
      </div>

      <div className="flex items-center justify-between">
        <Button className="mt-10" onClick={() => setOpen(true)}>
          Review
        </Button>
        <Button className="mt-10" onClick={sendReminder} disabled={isPending}>
          Send Reminder
        </Button>
      </div>

      {billing.proofUrl && (
        <div className="mt-4">
          <ResponsiveModal open={openProof} onOpenChange={setOpenProof}>
            <div className="flex items-center justify-center">
              <img
                src={billing.proofUrl}
                alt="Proof"
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
          </ResponsiveModal>
          <Button className="mt-4" onClick={() => setOpenProof(true)}>
            View Proof
          </Button>
        </div>
      )}
    </div>
  );
};
