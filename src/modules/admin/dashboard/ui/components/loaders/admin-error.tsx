import { AlertCircle } from 'lucide-react';


export function AdminError({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="text-center p-6 bg-red-50 rounded-lg">
      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h2 className="text-xl font-semibold text-red-700 mb-2">
        Error Loading Dashboard
      </h2>
      <p className="text-red-600">
        {error?.message || "Something went wrong"}
      </p>
    </div>
  </div>
  );
}
