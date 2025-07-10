import type { CityPart } from "@/modules/master/unlock-cities/types/unlock";
import { Button } from "@/components/ui/button";
import { Crown, Lock, MapPin, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { City } from "@/modules/master/unlock-cities/types/unlock";
export function UnlockLocationParts({
  cityParts,
  handleUnlockCityPart,
  unlockingPartId,
  isCityPartLoading,
  isCityPartError,
  selectedCity,
}: {
  cityParts: CityPart[];

  handleUnlockCityPart: (part: CityPart) => void;
  unlockingPartId: string | null;
  isUnlockingCity: boolean;
  isCityPartLoading: boolean;
  isCityPartError: boolean;
  selectedCity: City;
}) {
  if (isCityPartLoading) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Skeleton className="h-10 w-64 mx-auto" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg border border-slate-200 p-6"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-9 w-full rounded-md" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (isCityPartError) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="size-12 text-red-500" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            Error Loading Areas
          </h3>
          <p className="text-slate-600 mb-6">
            Failed to load areas for {selectedCity.name}. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cityParts.map((part) => (
        <div
          key={part.id}
          className="relative bg-white rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl overflow-hidden border-slate-200 hover:border-blue-300"
        >
          <div className="p-6">
            {/* Area Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-lg bg-blue-100">
                  <MapPin className="size-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {part.name}
                </h3>
              </div>

              {/* Unlock Cost */}
              <div className="flex items-center gap-2 mb-2">
                <Crown className="size-4 text-amber-500" />
                <span className="text-sm text-slate-600">
                  {part.unlockCost} points required
                </span>
              </div>
            </div>

            {/* Action Button */}
            <Button
              onClick={() => handleUnlockCityPart(part)}
              disabled={unlockingPartId === part.id}
              variant="default"
              className="w-full transition-all duration-200 bg-blue-600 hover:bg-blue-700 text-white"
            >
              {unlockingPartId === part.id ? (
                <div className="flex items-center gap-2">
                  <div className="size-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  Unlocking...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Lock className="size-4" />
                  Unlock ({part.unlockCost} pts)
                </div>
              )}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
