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
import { CityPartsList } from "./city-parts-list";
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
  isCityPartsOpen,
  setIsCityPartsOpen,
  cityPartsSelectedId,
  setCityPartsSelectedId,
  cityParts,
  isLoadingCityParts,
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
  isCityPartsOpen: boolean;
  setIsCityPartsOpen: (open: boolean) => void;
  cityPartsSelectedId: string | null;
  setCityPartsSelectedId: (id: string | null) => void;
  cityParts: any;
  isLoadingCityParts: boolean;
}) {
  return (
    <div
      className="bg-white rounded-lg border border-gray-200 shadow-sm
      hover:shadow-md transition-shadow duration-200 overflow-hidden"
    >
      <div
        className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={() => {
          setIsCityPartsOpen(true);
          setCityPartsSelectedId(city.id);
        }}
      >
        {city.imageUrl ? (
          <img
            src={city.imageUrl}
            alt={city.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <MapPin className="w-12 h-12 text-blue-500" />
        )}
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

            {/* City Parts Drawer */}
            <DrawerSheet
              trigger={<span />}
              title={`${city.name} Parts`}
              description={`View and manage parts of ${city.name}`}
              open={isCityPartsOpen && cityPartsSelectedId === city.id}
              onOpenChange={(open) => {
                setIsCityPartsOpen(open);
                if (!open) {
                  setCityPartsSelectedId(null);
                }
              }}
            >
              <CityPartsList
                cityParts={cityParts?.data || cityParts || []}
                isLoading={isLoadingCityParts}
                cityName={city.name}
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
