import { useMutation } from "@tanstack/react-query";
import { deleteCityPart } from "../services/city";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteCityPart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCityPart(id),
    onSuccess: () => {
      toast.success("City part deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["city-part"] });
      queryClient.invalidateQueries({ queryKey: ["cities"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
