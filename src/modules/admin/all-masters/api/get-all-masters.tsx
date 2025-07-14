import instance from "@/lib/axios";

export const getAllMasters = async (page: number, limit: number) => {
  const response = await instance.get(
    `/api/public/all?page=${page}&limit=${limit}`
  );

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export const getSingleMaster = async (id: string) => {
  const response = await instance.get(`/api/public/${id}`);

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export interface GetMasterLeadsParams {
  page: number;
  limit: number;
  status: "pending" | "accepted" | "completed" | "declined" | "cancelled" | "";
}

export const getMasterLeads = async (
  id: string,
  params: GetMasterLeadsParams
) => {
  const response = await instance.get(`/api/leads/master/${id}`, {
    params,
  });

  if (response.status === 200) {
    return response.data;
  }

  return null;
};

export interface AwardMasterPointsParams {
  leadId: string;
  masterId: string;
}

export const awardMasterPoints = async (params: AwardMasterPointsParams) => {
  const response = await instance.post(
    "/api/leads/leads/complete/award",
    params
  );

  if (response.status === 200) {
    return response.data;
  }

  return null;
};
