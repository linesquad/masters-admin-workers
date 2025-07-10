import { useQuery } from "@tanstack/react-query";
import { getMasterById } from "../services/profile";
import type { MasterProfile } from "../types";

export const useMasterProfileById = (id: string) => {
  return useQuery<MasterProfile, Error>({
    queryKey: ["master-profile", id],
    queryFn: () => getMasterById(id),
    enabled: !!id,
  });
};
