import { useMutation } from "@tanstack/react-query";
import { unlockCity } from "../services/city";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useUnlockCity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      locationId,
      cityId,
      cityPartId,
    }: {
      locationId: string;
      cityId: string;
      cityPartId: string;
    }) => unlockCity(locationId, cityId, cityPartId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      queryClient.invalidateQueries({ queryKey: ["unlocked-master-locations"] });
      toast.success("City unlocked successfully");
    },
    onError: () => {
      toast.error("Failed to unlock city");
    },
  });
};
