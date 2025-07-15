import instance from "@/lib/axios";

export interface GetAllReviewsParams {
  page: number;
  limit: number;
  status?: string;
  masterId?: string;
  clientId?: string;
  minRating?: number;
  maxRating?: number;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
  hasReply?: boolean;
}

export const getAllRewies = async (params: GetAllReviewsParams) => {
  const response = await instance.get("/api/reviews", {
    params,
  });

  if (response.status !== 200) {
    throw new Error("Failed to get all reviews");
  }

  return response.data;
};

export enum ReviewStatus {
  APPROVED = "approved",
  REJECTED = "rejected",
}

interface AdminUpdateStatusParams {
  reviewId: string;
  status: ReviewStatus;
  adminNote?: string;
}

export const adminUpdateStatus = async (params: AdminUpdateStatusParams) => {
  const response = await instance.patch(`/api/reviews/status`, params);

  if (response.status !== 200) {
    throw new Error("Failed to update review status");
  }

  return response.data;
};
