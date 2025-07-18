import instance from "@/lib/axios";

export interface GetAllMasterRewiesParams {
  masterId: string;
  page: number;
  limit: number;
  status?: string;
  sortBy?: string;
  sortOrder?: "createdAt" | "averageRating" | "ratingPrice";
  includeReplies?: boolean;
}

export const getAllMasterReviews = async (params: GetAllMasterRewiesParams) => {
  const response = await instance.get(
    `/api/reviews/master/${params.masterId}`,
    {
      params,
    }
  );

  if (response.status !== 200) {
    throw new Error("Failed to get all master reviews");
  }

  return response.data;
};

export interface CreateMasterReplyBody {
  reviewId: string;
  masterReply: string;
}

export const createMasterReply = async (body: CreateMasterReplyBody) => {
  const response = await instance.patch("/api/reviews/reply", body);

  if (response.status !== 200) {
    throw new Error("Failed to create master reply");
  }

  return response.data;
};
