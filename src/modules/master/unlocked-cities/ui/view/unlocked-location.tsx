import { useGetUnlockedMasterLocations } from "@/modules/master/unlocked-cities/hooks/useGetUnlockedMasterLocations";
import { MapPin } from "lucide-react";

import { useDeleteUnlockedLocation } from "@/modules/master/unlocked-cities/hooks/useDeleteUnlockedLocation";
import type { UnlockedCity } from "../../types/unlocked";
import { UnlockedSkeleton } from "../components/unlocked-skeleton";
import { UnlockedError } from "../components/unlocked-error";
import { UnlockedNoData } from "../components/unlocked-noData";
import { UnlockedCards } from "../components/unlocked-cards";
import { useTranslation } from "react-i18next";

export function UnlockedLocation() {
  const { t } = useTranslation();
  const { data, isLoading, isError, error } = useGetUnlockedMasterLocations();
  const { mutate: deleteUnlockedLocation, isPending } =
    useDeleteUnlockedLocation();

  const unlockedCities: UnlockedCity[] = data?.data || [];
  if (isLoading) {
    return <UnlockedSkeleton />;
  }

  if (isError) {
    return <UnlockedError error={error as Error} />;
  }

  if (unlockedCities.length === 0) {
    return <UnlockedNoData />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
              <MapPin className="size-8 text-green-600" />
              {t("unlockCity.title")}
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t("unlockCity.subtitle")}
            </p>
          </div>

          <div className="text-center mb-6">
            <p className="text-lg text-slate-600">
              <span className="font-semibold text-slate-800 mr-2">
                {unlockedCities.length}
              </span>
              {unlockedCities.length === 1
                ? t("unlockCity.cityUnlocked")
                : t("unlockCity.citiesUnlocked")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {unlockedCities.map((city) => {
            const unlockedDate = new Date(city.unlockedAt).toLocaleDateString();
            return (
              <UnlockedCards
                key={city.cityPartId}
                city={city}
                isPending={isPending}
                deleteUnlockedLocation={deleteUnlockedLocation}
                unlockedDate={unlockedDate}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
