import { Package } from "lucide-react";

export function EmptyCategory() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl"></div>
      <div className="relative text-center py-20 px-8">
        <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Package className="w-10 h-10 text-gray-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          No categories created yet
        </h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Get started by creating your first category. Categories help organize
          and structure your job listings.
        </p>
      </div>
    </div>
  );
}

export default EmptyCategory;
