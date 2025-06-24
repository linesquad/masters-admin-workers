import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function UnlockedError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="mb-6">
              <div className="mx-auto w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="size-12 text-red-500" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Error Loading Cities
            </h3>
            <p className="text-slate-600 mb-6">
              {error?.message ||
                "Failed to load your unlocked cities. Please try again."}
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="cursor-pointer"
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
