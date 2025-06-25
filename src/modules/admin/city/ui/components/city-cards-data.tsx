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
import { Button } from "@/components/ui/button";
import { DrawerSheet } from "@/components/DrawerSheet";
import { MapPin, Plus, Trash2 } from "lucide-react";
import { CreateCityPartForm } from "./create-city-part-form";
import type { City } from "../../types/city";
import type { CreateCityPartFormData } from "../../schema/citySchema";

export function CityCardsData({
  city,
  isAddCityPartOpen,
  setIsAddCityPartOpen,
  selectedCityId,
  setSelectedCityId,
  handleCreateCityPart,
  isCreatingCityPart,
  deleteCity,
  isDeletingCity,
}: {
  city: City;
  isAddCityPartOpen: boolean;
  setIsAddCityPartOpen: (open: boolean) => void;
  selectedCityId: string | null;
  setSelectedCityId: (id: string | null) => void;
  handleCreateCityPart: (data: CreateCityPartFormData) => void;
  isCreatingCityPart: boolean;
  deleteCity: (id: string) => void;
  isDeletingCity: boolean;
}) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 shadow-sm
      hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
        <MapPin className="w-12 h-12 text-blue-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {city.name}
          </h3>

          <div className="flex gap-2">
            <DrawerSheet
              trigger={
                <Button
                  variant="outline"
                  size="sm"
                  className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-blue-200 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              }
              title="Add City Part"
              description={`Add a new part to ${city.name}`}
              open={isAddCityPartOpen && selectedCityId === city.id}
              onOpenChange={(open) => {
                setIsAddCityPartOpen(open);
                if (open) {
                  setSelectedCityId(city.id);
                } else {
                  setSelectedCityId(null);
                }
              }}
            >
              <CreateCityPartForm
                key={`city-part-form-${city.id}`}
                cityId={city.id}
                cityName={city.name}
                onSubmit={handleCreateCityPart}
                isPending={isCreatingCityPart}
              />
            </DrawerSheet>

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
                  <AlertDialogTitle>Delete City</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete "{city.name}"? This action
                    cannot be undone and will remove the city from the system
                    permanently.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="cursor-pointer">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                    onClick={() => {
                      deleteCity(city.id);
                    }}
                    disabled={isDeletingCity}
                  >
                    {isDeletingCity ? "Deleting..." : "Delete"}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
