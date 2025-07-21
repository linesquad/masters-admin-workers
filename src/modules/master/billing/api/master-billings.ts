import instance from "@/lib/axios";
import type { MasterBillingResponse } from "../types";
import type { MasterBillingInput } from "../schemas";

export type MasterBillingProps = {
  page: number;
  limit: number;
};

export const getMasterBillings = async ({
  page,
  limit,
}: MasterBillingProps) => {
  const response = await instance.get<MasterBillingResponse>(
    "/api/billing/my-billing",
    {
      params: {
        page,
        limit,
      },
    }
  );

  if (!response.data.success) {
    throw new Error("Failed to fetch master billings");
  }

  return response.data;
};

export const uploadMasterProof = async (data: MasterBillingInput) => {
  const response = await instance.post(`/api/billing/upload-proof`, data);

  if (!response.data) {
    throw new Error("Failed to upload master proof");
  }

  return response.data;
};
