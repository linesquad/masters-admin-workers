import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNewApply } from "../api/new-applies";
import { toast } from "react-hot-toast";

export const useDeleteNewApply = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => deleteNewApply(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["new-applies"] });
      toast.success("New apply deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete new apply");
    },
  });

  return {
    mutate,
    isPending,
  };
};
