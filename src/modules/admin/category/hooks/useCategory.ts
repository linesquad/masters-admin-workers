import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/category";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });
};
