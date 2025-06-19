import { AlertCircle } from "lucide-react";

export function JobCategoryCardsError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-full mb-4">
            <AlertCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Error Loading Categories
          </h2>
          <p className="text-gray-600 mb-4">
            {error.message || "Something went wrong while fetching categories"}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-medium hover:from-red-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
