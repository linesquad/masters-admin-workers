import { Briefcase, Grid } from "lucide-react";
import type { Category } from "@/modules/admin/category/types/category";

export function JobCategoryFooter({ categories }: { categories: Category[] }) {
  return (
    <div>
      {categories.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {categories.length}
              </h3>
              <p className="text-gray-600">Categories Available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {categories.reduce(
                  (total: number, cat: Category) => total + cat.jobCount,
                  0
                )}
              </h3>
              <p className="text-gray-600">Total Jobs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Grid className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
              <p className="text-gray-600">Languages Supported</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
