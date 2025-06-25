import { useMutation } from "@tanstack/react-query";
import { deleteCity } from "../services/city";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

export const useDeleteCity = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCity(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cities"] });
      toast.success("City deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete city");
    },
  });
};
