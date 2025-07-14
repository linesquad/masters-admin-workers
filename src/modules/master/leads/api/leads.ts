import instance from "@/lib/axios";
import type { LeadsResponse, SingleLead } from "../types";

export interface GetLeadsForMasterParams {
  page: number;
  limit: number;
  status: LeadStatus;
  search: string;
}

export enum LeadStatus {
  PENDING = "pending",
  ACCEPTED = "accepted",
  COMPLETED = "completed",
  DECLINED = "declined",
  CANCELLED = "cancelled",
  UNDEFINED = "",
}

export const getLeadsForMaster = async ({
  page,
  limit,
  status,
  search,
}: GetLeadsForMasterParams) => {
  const response = await instance.get<LeadsResponse>(`/api/leads/master`, {
    params: {
      page,
      limit,
      status,
      search,
    },
  });

  if (response.status !== 200) {
    throw new Error(`Failed to fetch leads with status: ${response.status}`);
  }

  return response.data;
};

export const getLeadForMasterById = async (id: string) => {
  const response = await instance.get<SingleLead>(
    `/api/leads/master/lead/${id}`
  );

  if (response.status !== 200) {
    throw new Error(`Failed to fetch lead with status: ${response.status}`);
  }

  return response.data;
};

export const AcceptDeclineLead = async (id: string, status: LeadStatus) => {
  const response = await instance.patch(`/api/leads/${id}/status/master`, {
    status,
  });

  if (response.status !== 200) {
    throw new Error(
      `Failed to accept/decline lead with status: ${response.status}`
    );
  }

  return response.data;
};

export interface CompleteLeadParams {
  leadId: string;
  price: number;
}

export const completeLead = async ({ leadId, price }: CompleteLeadParams) => {
  const response = await instance.patch(`/api/leads/complete`, {
    leadId,
    price,
  });

  if (response.status !== 200) {
    throw new Error(`Failed to complete lead with status: ${response.status}`);
  }

  return response.data;
};
