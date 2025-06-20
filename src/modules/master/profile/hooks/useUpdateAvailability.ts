import { useMutation } from "@tanstack/react-query";
import { updateMastersAvaliability } from "../services/profile";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useUpdateAvailability = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, availability }: { id: string; availability: string }) =>
      updateMastersAvaliability(id, availability),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["master-profile"] });
      toast.success("Availability updated successfully");
    },
    onError: () => {
      toast.error("Failed to update availability");
    },
  });
};
