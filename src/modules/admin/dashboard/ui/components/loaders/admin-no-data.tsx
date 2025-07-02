import { FileText } from "lucide-react";

export function AdminNoData() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          No Data Available
        </h2>
        <p className="text-gray-600">
          Dashboard data is not available at the moment.
        </p>
      </div>
    </div>
  );
}
