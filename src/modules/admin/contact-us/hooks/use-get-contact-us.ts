import { useQuery } from "@tanstack/react-query";
import { getContactUs } from "../api/contact-get";

export const useGetContactUs = (page: number, limit: number) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["contact-us", page, limit],
    queryFn: () => getContactUs({ page, limit }),
  });

  return { data, isLoading, isError, error };
};
