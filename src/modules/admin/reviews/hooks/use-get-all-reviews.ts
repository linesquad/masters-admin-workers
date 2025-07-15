import { useQuery } from "@tanstack/react-query";
import { getAllRewies, type GetAllReviewsParams } from "../api/reviews";
import type { GetAllReviewsResponse } from "../types";

export const useGetAllReviews = (params: GetAllReviewsParams) => {
  const {
    page,
    limit,
    status,
    masterId,
    clientId,
    minRating,
    maxRating,
    dateFrom,
    dateTo,
    search,
    sortBy,
    sortOrder,
    hasReply,
  } = params;
  const { data, isLoading, error, isError } = useQuery<GetAllReviewsResponse>({
    queryKey: [
      "reviews",
      page,
      limit,
      status,
      masterId,
      clientId,
      minRating,
      maxRating,
      dateFrom,
      dateTo,
      search,
      sortBy,
      sortOrder,
      hasReply,
    ],
    queryFn: () =>
      getAllRewies({
        page,
        limit,
        status,
        masterId,
        clientId,
        minRating,
        maxRating,
        dateFrom,
        dateTo,
        search,
        sortBy,
        sortOrder,
        hasReply,
      }),
  });

  return { data, isLoading, error, isError };
};
