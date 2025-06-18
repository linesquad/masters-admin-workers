import { useMutation } from "@tanstack/react-query";
import { createCategory } from "../services/category";
import toast from "react-hot-toast";

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: (name: { en: string; ka: string; ru: string }) =>
      createCategory(name),
    onSuccess: () => {
      toast.success("Category created successfully");
    },
    onError: () => {
      toast.error("Failed to create category");
    },
  });
};
