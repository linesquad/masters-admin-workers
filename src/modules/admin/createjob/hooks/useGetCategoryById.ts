import { useQuery } from "@tanstack/react-query";
import { getJobsByCategoryId } from "../services/jobs";

export const useGetCategoryById = (categoryId: string) => {
  return useQuery({
    queryKey: ["jobByCategoryId", categoryId],
    queryFn: () => getJobsByCategoryId(categoryId),
  });
};
