import { useQuery } from "@tanstack/react-query";
import { getMasterById } from "../services/profile";

export const useMasterProfileById = (id: string) => {
  return useQuery({
    queryKey: ["master-profile", id],
    queryFn: () => getMasterById(id),
    enabled: !!id,
  });
};
