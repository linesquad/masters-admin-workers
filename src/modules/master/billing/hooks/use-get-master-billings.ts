import { useQuery } from "@tanstack/react-query";
import {
  getMasterBillings,
  type MasterBillingProps,
} from "../api/master-billings";

export const useGetMasterBillings = ({ page, limit }: MasterBillingProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["master-billings", page, limit],
    queryFn: () => getMasterBillings({ page, limit }),
  });

  return { data, isLoading, error };
};
