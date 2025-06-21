import { Skeleton } from "@/components/ui/skeleton";

export const SettingsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 md:p-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header Skeleton */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-4 left-6">
              <div className="flex items-center gap-3">
                <Skeleton className="size-8 rounded bg-white/20" />
                <div className="space-y-2">
                  <Skeleton className="h-6 w-40 bg-white/20" />
                  <Skeleton className="h-4 w-56 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* City Information Skeleton */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <div className="mb-6 flex items-center gap-2">
            <Skeleton className="size-5 rounded" />
            <Skeleton className="h-6 w-20" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-12" />
            <div className="relative">
              <Skeleton className="h-10 w-full rounded-md" />
            </div>
          </div>
        </div>

        {/* Bio Section Skeleton */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <div className="mb-6 flex items-center gap-2">
            <Skeleton className="size-5 rounded" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-32 w-full rounded-md" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        {/* Action Buttons Skeleton */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <Skeleton className="h-10 w-full sm:w-32 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};
