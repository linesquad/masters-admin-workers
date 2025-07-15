import { useMutation } from "@tanstack/react-query";
import { adminUpdateStatus } from "../api/reviews";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateStatusByAdmin = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: adminUpdateStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      toast.success("Review status updated successfully");
    },
    onError: () => {
      toast.error("Failed to update review status");
    },
  });

  return {
    updateStatus: mutate,
    isPending,
  };
};
