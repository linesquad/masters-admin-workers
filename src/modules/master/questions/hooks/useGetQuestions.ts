import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../services/qa";
import type { QuestionFilters } from "../types/filters";

export const useGetQuestions = (masterId: string, filters: QuestionFilters = {}) => {
  return useQuery({
    queryKey: ["questions", masterId, filters],
    queryFn: () => getQuestions(masterId, filters),
    enabled: !!masterId,
  });
};
