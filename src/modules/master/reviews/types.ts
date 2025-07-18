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
  masterReply?: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  client: {
    fullName: string;
  };
  lead: {
    jobTitle: {
      en: string;
      ka: string;
      ru: string;
    };
    price: string;
  };
  averageRating: number;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface MasterReviewsResponse {
  success: boolean;
  data: {
    reviews: Review[];
    pagination: Pagination;
  };
}
