import { Settings } from "lucide-react";

export function SettingsHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      <div className="h-32 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-4 left-6 text-white">
          <div className="flex items-center gap-3">
            <Settings className="size-8" />
            <div>
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="text-blue-100">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
