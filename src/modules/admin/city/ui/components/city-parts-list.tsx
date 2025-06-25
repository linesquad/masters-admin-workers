import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Trash2, MapPin, DollarSign } from "lucide-react";
import { useDeleteCityPart } from "../../hooks/useDeleteCityPart";

interface CityPart {
  id: string;
  name: string;
  unlockCost: number;
  lat?: number;
  lng?: number;
}

interface CityPartsListProps {
  cityParts: CityPart[];
  isLoading: boolean;
  cityName: string;
}

export function CityPartsList({ cityParts, isLoading, cityName }: CityPartsListProps) {
  const { mutate: deleteCityPart, isPending: isDeletingCityPart } = useDeleteCityPart();
  if (isLoading) {
    return (
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">
            City Parts for {cityName}
          </h3>
          <p className="text-sm text-gray-600">Loading city parts...</p>
        </div>
        <div className="space-y-3">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 animate-pulse"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!cityParts || cityParts.length === 0) {
    return (
      <div className="p-6 text-center">
        <div className="space-y-2 mb-6">
          <h3 className="text-lg font-semibold text-gray-900">
            City Parts for {cityName}
          </h3>
          <p className="text-sm text-gray-600">Manage parts of this city</p>
        </div>
        <div className="py-12">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h4 className="text-lg font-medium text-gray-900 mb-2">
            No city parts yet
          </h4>
          <p className="text-gray-500">Add the first part to this city</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          City Parts for {cityName}
        </h3>
        <p className="text-sm text-gray-600">
          {cityParts.length} {cityParts.length === 1 ? "part" : "parts"} found
        </p>
      </div>

      <div className="space-y-3">
        {cityParts.map((cityPart) => (
          <div
            key={cityPart.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1 space-y-1">
                <h4 className="font-medium text-gray-900">{cityPart.name}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <span>{cityPart.unlockCost} cost</span>
                  </div>
                  {cityPart.lat && cityPart.lng && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>
                        {cityPart.lat.toFixed(2)}, {cityPart.lng.toFixed(2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="bg-white">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete City Part</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete "{cityPart.name}"? This action
                      cannot be undone and will remove this part from {cityName} permanently.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="cursor-pointer">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                      onClick={() => {
                        deleteCityPart(cityPart.id);
                      }}
                      disabled={isDeletingCityPart}
                    >
                      {isDeletingCityPart ? "Deleting..." : "Delete"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 