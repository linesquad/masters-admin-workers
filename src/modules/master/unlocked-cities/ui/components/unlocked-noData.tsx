import { MapPin } from "lucide-react";
export function UnlockedNoData() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
              <MapPin className="size-8 text-green-600" />
              My Unlocked Cities
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Manage your unlocked service areas. You can remove cities you no
              longer want to service.
            </p>
          </div>
        </div>
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
                <MapPin className="size-12 text-slate-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              No Unlocked Cities
            </h3>
            <p className="text-slate-600 mb-6">
              You haven't unlocked any cities yet. Start by unlocking some
              cities to expand your service area.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
