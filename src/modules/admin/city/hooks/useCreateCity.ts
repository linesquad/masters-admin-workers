import { useMutation } from "@tanstack/react-query";
import { createCity } from "../services/city";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useCreateCity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: { name: string; image: File | undefined }) =>
      createCity(data.name, data.image),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      toast.success("City created successfully");
    },
    onError: () => {
      toast.error("Failed to create city");
    },
  });
};
