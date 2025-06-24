import { MapPin } from "lucide-react";
import type { City } from "@/modules/master/unlock-cities/types/unlock";

export function UnlockLocationCities({
  cities,
  handleCityClick,
}: {
  cities: City[];
  handleCityClick: (cityId: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cities.map((city) => (
        <div
          key={city.id}
          className={`relative bg-white rounded-xl shadow-lg border transition-all duration-300 hover:shadow-xl overflow-hidden cursor-pointer ${
            city.isActive
              ? "border-green-300 bg-gradient-to-br from-green-50 to-white shadow-green-100"
              : "border-slate-200 hover:border-blue-300"
          }`}
          onClick={() => handleCityClick(city.id)}
        >
          <div className="p-6">
            {/* City Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`p-2 rounded-lg ${
                    city.isActive ? "bg-green-100" : "bg-blue-100"
                  }`}
                >
                  <MapPin
                    className={`size-5 ${
                      city.isActive ? "text-green-600" : "text-blue-600"
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {city.name}
                </h3>
              </div>
            </div>

            {/* Click hint */}
            <div className="text-center">
              <div
                className={`font-medium flex items-center justify-center gap-2 transition-colors ${
                  city.isActive ? "text-green-600" : "text-blue-600"
                }`}
              >
                <MapPin className="size-4" />
                View areas
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
