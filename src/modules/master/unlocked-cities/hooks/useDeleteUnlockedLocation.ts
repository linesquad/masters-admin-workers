import { useMutation } from "@tanstack/react-query";
import { removeUnlockedMasterCity } from "../services/unlocked";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteUnlockedLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (cityPartId: string) => removeUnlockedMasterCity(cityPartId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["unlocked-master-locations"],
      });
      toast.success("Location removed successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
