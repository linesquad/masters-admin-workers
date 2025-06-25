import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCityPart } from "../services/city";
import type { CreateCityPartFormData } from "../schema/citySchema";
import toast from "react-hot-toast";

export const useCreateCityParts = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      cityId,
      name,
      unlockCost,
      lng,
      lat,
    }: CreateCityPartFormData) =>
      createCityPart(cityId, name, unlockCost, lng, lat),
    onSuccess: () => {
      toast.success("City part created successfully");
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: () => {
      toast.error("Failed to create city part");
    },
  });
};
