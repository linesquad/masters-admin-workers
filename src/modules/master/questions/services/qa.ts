import instance from "@/lib/axios";

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

export const getQuestions = async (
  masterId: string,
  filters: QuestionsFilters = {}
) => {
  const {
    page = 1,
    limit = 20,
    status,
    category,
    search,
    includeAnswered,
    includeUnanswered,
    sortBy = "createdAt",
    sortOrder = "desc",
    isPublic,
  } = filters;

  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    includeAnswered: (includeAnswered !== undefined ? includeAnswered : true).toString(),
    includeUnanswered: (includeUnanswered !== undefined ? includeUnanswered : true).toString(),
    sortBy,
    sortOrder,
  });

  if (status) params.append("status", status);
  if (category && category.trim()) params.append("category", category.trim());
  if (search && search.trim() && search.trim().length >= 1) params.append("search", search.trim());
  if (isPublic !== undefined) params.append("isPublic", isPublic.toString());

  try {
    const response = await instance.get(
      `/api/master/qa/questions/${masterId}?${params.toString()}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
