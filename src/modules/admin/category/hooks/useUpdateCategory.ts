import { useMutation } from "@tanstack/react-query";
import { updateCategory } from "../services/category";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useUpdateCategory = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      name,
    }: {
      id: string;
      name: {
        en: string;
        ka: string;
        ru: string;
      };
    }) => updateCategory(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      toast.success("Category updated successfully");
    },
    onError: () => {
      toast.error("Failed to update category");
    },
  });
};
