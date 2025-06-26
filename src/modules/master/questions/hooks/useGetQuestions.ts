import { useQuery } from "@tanstack/react-query";
import { getQuestions } from "../services/qa";

interface QuestionsFilters {
  page?: number;
  limit?: number;
  status?: "pending" | "answered" | "hidden" | "deleted";
  category?: string;
  search?: string;
  includeAnswered?: boolean;
  includeUnanswered?: boolean;
  sortBy?: "createdAt" | "answeredAt" | "viewCount" | "helpfulCount" | "priority";
  sortOrder?: "asc" | "desc";
  isPublic?: boolean;
}

export const useGetQuestions = (masterId: string, filters: QuestionsFilters = {}) => {
  return useQuery({
    queryKey: ["questions", masterId, filters],
    queryFn: () => getQuestions(masterId, filters),
    enabled: !!masterId,
  });
};
