import { useQuery } from "@tanstack/react-query";
import { getAdminDashboard } from "../services/dash";

export const useGetAdminDashboard = () => {
  return useQuery({
    queryKey: ["admin-dashboard"],
    queryFn: getAdminDashboard,
  });
};
