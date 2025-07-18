import { useQuery } from "@tanstack/react-query";
import {
  getAllMasterReviews,
  type GetAllMasterRewiesParams,
} from "../api/master-reviews";
import type { MasterReviewsResponse } from "../types";

export const useGetMasterReviews = (params: GetAllMasterRewiesParams) => {
  const { data, isLoading, error, isError } = useQuery<MasterReviewsResponse>({
    queryKey: ["master-reviews", params],
    queryFn: () => getAllMasterReviews(params),
  });

  return {
    data,
    isLoading,
    error,
    isError,
  };
};
