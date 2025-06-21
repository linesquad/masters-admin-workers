import { CategorySkeleton } from "./category-skeleton";
import type { Category } from "@/modules/admin/category/types/category";
import { CheckCircle, ChevronRight } from "lucide-react";

export function MasterJobCategorySelect({
  categoriesLoading,
  categoriesError,
  categoriesData,
  handleCategorySelect,
}: {
  categoriesLoading: boolean;
  categoriesError: boolean;
  categoriesData: { data: Category[] } | undefined;
  handleCategorySelect: (category: Category) => void;
}) {
  // Loading state
  if (categoriesLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  // Error state
  if (categoriesError) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-600">
            Failed to load categories. Please try again.
          </p>
        </div>
      </div>
    );
  }

  // No data received
  if (!categoriesData || !categoriesData.data) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
          <p className="text-yellow-600 text-lg font-medium mb-2">
            No data received
          </p>
          <p className="text-yellow-500">
            The API call completed but returned no data
          </p>
        </div>
      </div>
    );
  }

  // Empty data (no categories)
  if (categoriesData.data.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">📂</span>
          </div>
          <p className="text-gray-600 text-lg font-medium mb-2">
            No categories available
          </p>
          <p className="text-gray-500">
            Please contact an administrator to add job categories
          </p>
        </div>
      </div>
    );
  }

  // Success state - render categories
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {categoriesData.data.map((category: Category) => (
        <div
          key={category.id}
          onClick={() => handleCategorySelect(category)}
          className="group cursor-pointer relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          <div className="relative bg-white rounded-lg p-4 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold">
                  {category.name.en.charAt(0).toUpperCase()}
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            </div>

            <div className="mb-3">
              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.name.en}
              </h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-green-600">🇬🇪</span>
                  <span className="text-gray-600">{category.name.ka}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-red-600">🇷🇺</span>
                  <span className="text-gray-600">{category.name.ru}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3" />
                {category.jobCount} jobs
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
