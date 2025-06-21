

export function MasterJobProgress({
  currentStep,
}: {
  currentStep: "category" | "job" | "details" | "confirm";
}) {
  return (
    <div className="flex items-center gap-1 sm:gap-2 mb-6 px-2 sm:px-0">
    <div
      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
        currentStep === "category"
          ? "bg-blue-600 text-white"
          : "bg-green-600 text-white"
      }`}
    >
      1
    </div>
    <div
      className={`flex-1 h-1 rounded ${
        currentStep === "category" ? "bg-gray-200" : "bg-green-600"
      }`}
    />
    <div
      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
        currentStep === "job"
          ? "bg-blue-600 text-white"
          : currentStep === "details" || currentStep === "confirm"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-500"
      }`}
    >
      2
    </div>
    <div
      className={`flex-1 h-1 rounded ${
        currentStep === "job" || currentStep === "category"
          ? "bg-gray-200"
          : "bg-green-600"
      }`}
    />
    <div
      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
        currentStep === "details"
          ? "bg-blue-600 text-white"
          : currentStep === "confirm"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-500"
      }`}
    >
      3
    </div>
    <div
      className={`flex-1 h-1 rounded ${
        currentStep === "confirm" ? "bg-green-600" : "bg-gray-200"
      }`}
    />
    <div
      className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
        currentStep === "confirm"
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-500"
      }`}
    >
      4
    </div>
    </div>
  );
}
