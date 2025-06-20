export function MasterSkeletonLoader() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section Skeleton */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Cover Image Skeleton */}
          <div className="h-48 bg-gradient-to-r from-slate-200 to-slate-300 animate-pulse relative">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* Profile Info Skeleton */}
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between -mt-16 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                {/* Profile Picture Skeleton */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl border-4 border-white shadow-xl bg-slate-200 animate-pulse"></div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-slate-300 animate-pulse"></div>
                </div>

                {/* Basic Info Skeleton */}
                <div className="space-y-2 mt-4 md:mt-0">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-48 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-6 w-20 bg-slate-200 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div>
                    <div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
                  </div>

                  <div className="h-4 w-36 bg-slate-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div>
                  <div className="h-8 w-16 bg-slate-200 rounded animate-pulse"></div>
                </div>
                <div className="w-12 h-12 bg-slate-200 rounded-lg animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid Skeleton */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="h-6 w-16 bg-slate-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-3/4 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Reviews Section Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="h-6 w-20 bg-slate-200 rounded animate-pulse"></div>
                <div className="h-5 w-24 bg-slate-200 rounded animate-pulse"></div>
              </div>
              
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-slate-200 rounded-full mx-auto mb-4 animate-pulse"></div>
                <div className="h-5 w-32 bg-slate-200 rounded mx-auto mb-2 animate-pulse"></div>
                <div className="h-4 w-64 bg-slate-200 rounded mx-auto mb-4 animate-pulse"></div>
                <div className="h-8 w-24 bg-slate-200 rounded mx-auto animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Column Skeleton */}
          <div className="space-y-6">
            {/* Contact Information Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="h-6 w-36 bg-slate-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-4">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-200 rounded-lg animate-pulse"></div>
                    <div className="space-y-1">
                      <div className="h-3 w-12 bg-slate-200 rounded animate-pulse"></div>
                      <div className="h-4 w-28 bg-slate-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Skeleton */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
              <div className="h-6 w-28 bg-slate-200 rounded animate-pulse mb-4"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="h-10 w-full bg-slate-200 rounded animate-pulse"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
