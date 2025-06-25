import { useState } from "react";
import { MapPin } from "lucide-react";
import type { City } from "../../types/city";
import { useDeleteCity } from "../../hooks/useDeleteCity";
import type { CreateCityPartFormData } from "../../schema/citySchema";
import { useCreateCityParts } from "../../hooks/useCreateCityParts";
import { CityCardsData } from "./city-cards-data";

export function CityCards({
  cities,
  isLoadingCities,
}: {
  cities: City[];
  isLoadingCities: boolean;
}) {
  const { mutate: deleteCity, isPending: isDeletingCity } = useDeleteCity();
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [isAddCityPartOpen, setIsAddCityPartOpen] = useState(false);
  const { mutate: createCityPart, isPending: isCreatingCityPart } =
    useCreateCityParts();

  const handleCreateCityPart = (data: CreateCityPartFormData) => {
    createCityPart(data, {
      onSuccess: () => {
        setIsAddCityPartOpen(false);
        setSelectedCityId(null);
      },
    });
  };

  if (isLoadingCities) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden animate-pulse"
          >
            <div className="w-full h-48 bg-gray-200"></div>
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (cities.length === 0) {
    return (
      <div className="text-center py-12">
        <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No cities yet
        </h3>
        <p className="text-gray-500">Create your first city to get started</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cities.map((city: City) => (
        <CityCardsData
          key={city.id}
          city={city}
          isAddCityPartOpen={isAddCityPartOpen}
          setIsAddCityPartOpen={setIsAddCityPartOpen}
          selectedCityId={selectedCityId}
          setSelectedCityId={setSelectedCityId}
          handleCreateCityPart={handleCreateCityPart}
          isCreatingCityPart={isCreatingCityPart}
          deleteCity={deleteCity}
          isDeletingCity={isDeletingCity}
        />
      ))}
    </div>
  );
}
