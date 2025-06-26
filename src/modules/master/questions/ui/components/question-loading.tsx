export function QuestionLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="animate-pulse">
          {/* Header skeleton */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-300 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-gradient-to-r from-blue-200 to-purple-300 rounded-lg w-64 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
          </div>

          {/* Filter section skeleton */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg">
            <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
            <div className="h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mb-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                  <div className="h-9 bg-gray-100 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-28 bg-gradient-to-br from-blue-200 to-purple-300 rounded-xl"
              ></div>
            ))}
          </div>

          {/* Questions skeleton */}
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-yellow-200 rounded-full w-16"></div>
                    <div className="h-6 bg-blue-200 rounded-full w-20"></div>
                    <div className="h-6 bg-green-200 rounded-full w-18"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                  <div className="flex gap-4 mt-4">
                    <div className="h-8 bg-gray-100 rounded-full w-20"></div>
                    <div className="h-8 bg-gray-100 rounded-full w-24"></div>
                    <div className="h-8 bg-gray-100 rounded-full w-32"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
