import { useState } from "react";
import { useGetCities } from "@/modules/master/unlock-cities/hooks/useGetCities";
import { MapPin } from "lucide-react";
import { useGetCityPart } from "@/modules/master/unlock-cities/hooks/useGetCityPart";
import { useUnlockCity } from "@/modules/master/unlock-cities/hooks/useUnlockCity";
import { UnlockLocationSkeleton } from "../components/unlock-location-skeleton";
import { UnlockLocationError } from "../components/unlock-locaiton-error";
import { UnlockLocationNoData } from "../components/unlock-location-nodata";
import type {
  City,
  CityPart,
} from "@/modules/master/unlock-cities/types/unlock";
import { UnlockLocationCities } from "../components/unlock-location-cities";
import { UnlockLocationParts } from "../components/unlock-location-parts";
import { useTranslation } from "react-i18next";

export function UnlockCityView() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetCities();
  const { mutate: unlockCityMutation, isPending: isUnlockingCity } =
    useUnlockCity();
  const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
  const [unlockingPartId, setUnlockingPartId] = useState<string | null>(null);
  const {
    data: cityPartData,
    isLoading: isCityPartLoading,
    isError: isCityPartError,
  } = useGetCityPart(selectedCityId || "");

  const cities: City[] = data?.data || [];
  const cityParts: CityPart[] = cityPartData?.data || [];
  const selectedCity = selectedCityId
    ? cities.find((city) => city.id === selectedCityId)
    : null;
  const totalCities = cities.length;
  const totalParts = cityParts.length;

  const handleCityClick = (cityId: string) => {
    setSelectedCityId(cityId);
  };

  const handleBackToCities = () => {
    setSelectedCityId(null);
  };

  const handleUnlockCityPart = (part: CityPart) => {
    if (!selectedCityId) return;
    setUnlockingPartId(part.id);
    unlockCityMutation(
      {
        locationId: part.id,
        cityId: selectedCityId,
        cityPartId: part.id,
      },
      {
        onSuccess: () => {
          setUnlockingPartId(null);
        },
        onError: () => {
          setUnlockingPartId(null);
        },
      }
    );
  };

  if (isLoading) {
    return <UnlockLocationSkeleton />;
  }

  if (isError) {
    return <UnlockLocationError error={error} />;
  }

  // Empty State
  if (!cities || cities.length === 0) {
    return <UnlockLocationNoData />;
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {selectedCityId && selectedCity ? (
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleBackToCities}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium cursor-pointer"
            >
              ← {t("unlockCities.backToCities")}
            </button>
          </div>

          {!isCityPartLoading && !isCityPartError && (
            <>
              {/* City Parts Header */}
              <div className="mb-8">
                <div className="text-center mb-8">
                  <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
                    <MapPin className="size-8 text-blue-600" />
                    {selectedCity.name} {t("unlockCities.areas")}
                  </h1>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    {t("unlockCities.areaSubtitle", {
                      Tbilisi: selectedCity.name,
                    })}
                  </p>
                </div>

                {/* City Parts Stats */}
                <div className="text-center mb-6">
                  <p className="text-lg text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {totalParts}
                    </span>{" "}
                    {t("unlockCities.areas")} {selectedCity.name}
                  </p>
                </div>
              </div>

              {/* City Parts Grid */}
              {cityParts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="mb-6">
                      <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                        <MapPin className="size-12 text-slate-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">
                      No Areas Available
                    </h3>
                    <p className="text-slate-600 mb-6">
                      There are currently no areas available in{" "}
                      {selectedCity.name}.
                    </p>
                  </div>
                </div>
              ) : (
                <UnlockLocationParts
                  cityParts={cityParts}
                  handleUnlockCityPart={handleUnlockCityPart}
                  unlockingPartId={unlockingPartId}
                  isUnlockingCity={isUnlockingCity}
                  isCityPartLoading={isCityPartLoading}
                  isCityPartError={isCityPartError}
                  selectedCity={selectedCity}
                />
              )}
            </>
          )}
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
                <MapPin className="size-8 text-blue-600" />
                {t("unlockCities.title")}
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {t("unlockCities.subtitle")}
              </p>
            </div>
            <div className="text-center mb-6">
              <p className="text-lg text-slate-600">
                <span className="font-semibold text-slate-800">
                  {totalCities}
                </span>
                {t("unlockCities.availableCities")}
              </p>
            </div>
          </div>
          {/* Cities Grid */}
          <UnlockLocationCities
            cities={cities}
            handleCityClick={handleCityClick}
          />
        </div>
      )}
    </div>
  );
}
