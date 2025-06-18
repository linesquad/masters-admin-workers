import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../services/category";
import toast from "react-hot-toast";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (name: { en: string; ka: string; ru: string }) =>
      createCategory(name),
    onSuccess: () => {
      toast.success("Category created successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      toast.error("Failed to create category");
    },
  });
};
