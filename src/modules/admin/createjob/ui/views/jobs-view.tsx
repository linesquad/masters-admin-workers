import { useCategories } from "@/modules/admin/category/hooks/useCategory";
import { JobCategoryCards } from "../components/job-category-cards";
import { JobCategoryHeader } from "../components/job-category-header";

export function DisplayJobs() {
  const { data: categoriesResponse, isLoading, isError, error } = useCategories();

  const categories = categoriesResponse?.data || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <JobCategoryHeader categories={categories} />
      <JobCategoryCards
        categories={categories}
        isLoading={isLoading}
        error={isError ? error : null}
      />
    </div>
  );
}
