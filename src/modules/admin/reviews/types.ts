export interface ReviewClient {
  fullName: string;
}

export interface Review {
  id: string;
  leadId: string;
  masterId: string;
  clientId: string;
  ratingPrice: number;
  ratingQuality: number;
  ratingPunctuality: number;
  ratingExperience: number;
  comment: string;
  masterReply: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
  client: ReviewClient;
  averageRating: number;
  normalizedRating: number;
}

export interface ReviewsPagination {
  page: string;
  limit: string;
  total: number;
  pages: number;
}

export interface GetAllReviewsResponse {
  success: boolean;
  data: Review[];
  pagination: ReviewsPagination;
}

export enum ReviewStatus {
  UNDEFINED = "",
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}
