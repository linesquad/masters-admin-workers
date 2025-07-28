import type { UnlockedCity } from "../../types/unlocked";
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
import { MapPin, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
export function UnlockedCards({
  city,
  isPending,
  deleteUnlockedLocation,
  unlockedDate,
}: {
  city: UnlockedCity;
  isPending: boolean;
  deleteUnlockedLocation: (cityPartId: string) => void;
  unlockedDate: string;
}) {
  const { t } = useTranslation();
  return (
    <div
      key={city.cityPartId}
      className={`bg-white rounded-xl shadow-lg border p-6 hover:shadow-xl transition-all duration-300 ${
        city.isActive
          ? "border-green-300 bg-gradient-to-br from-green-50 to-white"
          : "border-slate-200"
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-lg ${city.isActive ? "bg-green-100" : "bg-slate-100"}`}
          >
            <MapPin
              className={`size-5 ${city.isActive ? "text-green-600" : "text-slate-600"}`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              {city.cityName}
            </h3>
            <p className="text-sm text-slate-600">{city.cityPartName}</p>
          </div>
        </div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 cursor-pointer"
              disabled={isPending}
            >
              <Trash2 className="size-4" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>{t("unlockCity.removeCity")}</AlertDialogTitle>
              <AlertDialogDescription>
                {t("unlockCity.removeCitySubtitle", {
                  Tbilisi: city.cityName,
                })}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="cursor-pointer">
                {t("unlockCity.cancel")}
              </AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                onClick={() => deleteUnlockedLocation(city.cityPartId)}
                disabled={isPending}
              >
                {isPending ? t("unlockCity.removing") : t("unlockCity.remove")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="font-medium">{t("unlockCity.unlockCost")}:</span>
          <span>{city.unlockCost} points</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <span className="font-medium">{t("unlockCity.unlocked")}:</span>
          <span>{unlockedDate}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-medium">{t("unlockCity.status")}:</span>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${
              city.isActive
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            {city.isActive ? t("unlockCity.active") : t("unlockCity.inactive")}
          </span>
        </div>
      </div>
    </div>
  );
}
