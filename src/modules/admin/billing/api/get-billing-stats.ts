import instance from "@/lib/axios";
import type {
  BillingStatsResponse,
  BillingSummaryResponse,
  BillingTriggerResponse,
} from "../types";

export interface GetBillingStatsProps {
  page: number;
  limit: number;
}

export const getBillingStats = async ({
  page,
  limit,
}: GetBillingStatsProps): Promise<BillingStatsResponse> => {
  const response = await instance.get("/api/billing", {
    params: { page, limit },
  });

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export const getBillingSummary = async (): Promise<BillingSummaryResponse> => {
  const response = await instance.get("/api/billing/stats");

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export const billingTrigger = async (): Promise<BillingTriggerResponse> => {
  const response = await instance.post("/api/billing/trigger-weekly");

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export interface ReviewBillingProps {
  billingId: string;
  status: "approve" | "reject";
  adminNote?: string;
}

export const reviewBilling = async ({
  billingId,
  status,
  adminNote,
}: ReviewBillingProps) => {
  const response = await instance.post(
    `/api/billing/review/${billingId}/review`,
    {
      status,
      adminNote,
    }
  );

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};

export const sendReminder = async (billingId: string) => {
  const response = await instance.post(`/api/billing/${billingId}/remind`);

  if (!response.data.success) {
    throw new Error(response.data.message);
  }

  return response.data;
};
