export function SettingsError({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 p-4 md:p-6 flex items-center justify-center">
      <div className="text-center max-w-md mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-red-200 p-8">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-slate-600 mb-6 leading-relaxed">
            We encountered an error while loading your profile settings. This
            might be a temporary issue.
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-700 font-medium mb-1">
              Error Details:
            </p>
            <p className="text-sm text-red-600">
              {error?.message || "An unexpected error occurred"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
