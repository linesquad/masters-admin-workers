import { AlertCircle, MapPin } from "lucide-react";

export function UnlockLocationNoData() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="mb-6">
            <div className="mx-auto w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center">
              <MapPin className="size-12 text-slate-400" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-2">
            No Cities Available
          </h3>
          <p className="text-slate-600 mb-6">
            There are currently no cities available. Please check back later or
            contact support if you believe this is an error.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="size-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-left">
              <p className="text-sm font-medium text-blue-800">Need Help?</p>
              <p className="text-sm text-blue-700">
                Contact our support team if you need assistance with city
                management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
