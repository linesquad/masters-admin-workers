import { Button } from "@/components/ui/button";
import type { MasterBillingItem } from "../../types";
import { useState } from "react";
import { ResponsiveModal } from "@/components/responsive-modal";
import { BillingProofForm } from "./billing-proof-form";
import { useTranslation } from "react-i18next";

interface MasterBillingCardProps {
  billing: MasterBillingItem;
}

export const MasterBillingCard = ({ billing }: MasterBillingCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="border rounded-lg p-6 shadow-sm bg-white">
      <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
        <BillingProofForm billingId={billing.id} onClose={handleClose} />
      </ResponsiveModal>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">
            {t("billingMaster.billingCard.title")} #{billing.id.slice(0, 8)}
          </h3>
          <p className="text-sm text-gray-500">
            {t("billingMaster.billingCard.createdAt")}:{" "}
            {new Date(billing.createdAt).toLocaleDateString()}
          </p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            billing.status === "pending"
              ? "bg-yellow-100 text-yellow-800"
              : billing.status === "approved"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {billing.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">
            {t("billingMaster.billingCard.totalJobs")}
          </p>
          <p className="font-medium">{billing.totalJobs}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">
            {t("billingMaster.billingCard.totalAmount")}
          </p>
          <p className="font-medium">{billing.totalAmount}₾</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">
            {t("billingMaster.billingCard.adminFee")}
          </p>
          <p className="font-medium">{billing.adminFee}₾</p>
        </div>
      </div>

      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>
          {t("billingMaster.billingCard.week")}:{" "}
          {new Date(billing.weekStart).toLocaleDateString()} -{" "}
          {new Date(billing.weekEnd).toLocaleDateString()}
        </span>
        <span>
          {t("billingMaster.billingCard.duration")}:{" "}
          {new Date(billing.dueDate).toLocaleDateString()}
        </span>
      </div>

      {billing.adminNote && (
        <div className="pt-4 border-t">
          <p className="text-sm text-gray-500">
            {t("billingMaster.billingCard.adminNote")}: {billing.adminNote}
          </p>
        </div>
      )}

      <div className="pt-4 border-t">
        <p className="text-sm text-gray-500">
          {t("billingMaster.billingCard.remindersSent")}:{" "}
          {billing.remindersSent}
        </p>
      </div>

      <div className="flex justify-end mt-6">
        <Button onClick={() => setIsOpen(true)}>
          {t("billingMaster.uploadProof.title")}
        </Button>
      </div>
    </div>
  );
};
