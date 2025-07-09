import { Skeleton } from "@/components/ui/skeleton";

export function MasterPageLoadingSkeleton() {
  return (
    <div className="px-5">
      <div className="flex flex-col gap-4 mb-6">
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-5 w-1/2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="mt-10 border-blue-200 bg-blue-50 rounded-lg">
            <div className="p-6 border-b border-blue-100">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <div className="flex flex-col gap-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="bg-blue-100 p-3 rounded-lg">
                  <Skeleton className="h-4 w-1/2 mb-1" />
                  <Skeleton className="h-5 w-1/3" />
                </div>
              ))}
            </div>
            <div className="p-4">
              <Skeleton className="h-8 w-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
