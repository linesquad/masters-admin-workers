import { Skeleton } from "@/components/ui/skeleton";

export function CategorySkeleton() {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0" />
      <div className="relative bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <Skeleton className="w-10 h-10 rounded-lg" />
          <Skeleton className="w-5 h-5" />
        </div>

        <div className="mb-3">
          <Skeleton className="h-6 w-3/4 mb-2" />
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="h-4 w-20" />
            </div>
            <div className="flex items-center gap-2">
              <Skeleton className="w-4 h-4 rounded" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
} 