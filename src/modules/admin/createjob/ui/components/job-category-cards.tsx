import type { Category } from "@/modules/admin/category/types/category";
import { Link } from "@tanstack/react-router";
import { Briefcase, ChevronRight } from "lucide-react";
import { JobCategoryFooter } from "./job-category-footer";
import { CategorySkeleton } from "@/modules/admin/category/ui/components/category-skeleton";
import { JobCategoryCardsError } from "./job-category-cards-error";

export function JobCategoryCards({ categories, isLoading, error }: { categories: Category[], isLoading: boolean, error: Error | null }) {
  if (isLoading) {
    return <CategorySkeleton />;
  }
  if (error) {
    return <JobCategoryCardsError error={error} />;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      {categories.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Briefcase className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Categories Found
          </h3>
          <p className="text-gray-600 mb-6">
            There are currently no job categories available.
          </p>
          <Link
            to="/create-category"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Briefcase className="w-4 h-4" />
            Create First Category
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category: Category) => (
            <Link
              key={category.id}
              to="/create-jobs/$id"
              params={{ id: category.id }}
              className="group block transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                {/* Category icon and job count */}
                <div className="relative flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-lg">
                      {category.name.en.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {category.jobCount} jobs
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>

                {/* Category name in English */}
                <div className="relative mb-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                    {category.name.en}
                  </h3>

                  {/* Multi-language names */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center">
                        <span className="text-xs">🇬🇪</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {category.name.ka}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center">
                        <span className="text-xs">🇷🇺</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {category.name.ru}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom action indicator */}
                <div className="relative flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    View Jobs
                  </span>
                  <div className="w-8 h-8 bg-blue-50 group-hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors duration-200">
                    <ChevronRight className="w-4 h-4 text-blue-600 transform group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Statistics Footer */}
      <JobCategoryFooter categories={categories} />
    </div>
  );
}
