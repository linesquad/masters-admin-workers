import { useQuery } from "@tanstack/react-query";
import { getJobsByCategoryId } from "../services/jobs";

export const useGetJobByCategoryId = (categoryId: string) => {
  return useQuery({
    queryKey: ["jobByCategoryId", categoryId],
    queryFn: () => getJobsByCategoryId(categoryId),
    enabled: !!categoryId,
  });
};
