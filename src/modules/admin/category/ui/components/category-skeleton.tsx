export function CategorySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="group relative">
          <div className="relative bg-white rounded-2xl p-6 border border-gray-200 animate-pulse">
            {/* Header section with avatar and job count */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-xl"></div>
                <div className="text-right">
                  <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Title section */}
            <div className="mb-6">
              <div className="w-32 h-6 bg-gray-200 rounded mb-3"></div>
              <div className="space-y-2">
                {/* Georgian name */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                </div>
                {/* Russian name */}
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-gray-200 rounded-lg"></div>
                  <div className="w-28 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2">
              <div className="flex-1 h-11 bg-gray-200 rounded-xl"></div>
              <div className="w-11 h-11 bg-gray-200 rounded-xl"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

