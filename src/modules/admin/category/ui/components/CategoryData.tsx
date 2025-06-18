import { CheckCircle, Edit, Loader2, Trash2 } from "lucide-react";
import type { Category } from "../../types/category";

function CategoryData({
  category,
  handleDelete,
  isDeleting,
}: {
  category: Category;
  handleDelete: (id: string) => void;
  isDeleting: boolean;
}) {
  return (
    <div key={category.id} className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">
                {category.name.en.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                <CheckCircle className="w-3 h-3 cursor-pointer" />
                {category.jobCount} jobs
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-lg text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {category.name.en}
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 text-xs font-semibold">🇬🇪</span>
              </div>
              <span className="text-gray-600 font-medium">
                {category.name.ka}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-5 h-5 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-red-600 text-xs font-semibold">🇷🇺</span>
              </div>
              <span className="text-gray-600 font-medium">
                {category.name.ru}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            className="cursor-pointer flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium group/btn"
          >
            <Edit className="w-4 h-4  group-hover/btn:scale-110 transition-transform" />
            <span className="text-sm">Edit</span>
          </button>
          <button
            type="button"
            className="cursor-pointer flex items-center justify-center w-11 h-11 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl transition-all duration-200 group/btn"
            onClick={() => handleDelete(category.id)}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Trash2 className="w-4 h-4  group-hover/btn:scale-110 transition-transform" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryData;
