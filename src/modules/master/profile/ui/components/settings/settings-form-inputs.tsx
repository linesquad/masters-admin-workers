import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, MapPin } from "lucide-react";
import type { ProfileSettingsData } from "../../../schema/settings";
import type {
  FieldErrors,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

export function SettingsFormInputs({
  register,
  errors,
  watch,
}: {
  register: UseFormRegister<ProfileSettingsData>;
  errors: FieldErrors<ProfileSettingsData>;
  watch: UseFormWatch<ProfileSettingsData>;
}) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <MapPin className="size-5 text-blue-600" />
          Location
        </h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 cursor-pointer">
            City
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 size-4 pointer-events-none" />
            <Input
              placeholder="Enter your city"
              className="pl-10 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text"
              {...register("city")}
            />
          </div>
          {errors.city?.message && (
            <p className="text-sm text-red-600">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <FileText className="size-5 text-blue-600" />
          About Me
        </h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 cursor-pointer">
            Professional Bio
          </label>
          <Textarea
            placeholder="Tell potential clients about yourself, your experience, and what makes you unique..."
            className="min-h-32 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text resize-none"
            {...register("bio")}
          />
          {errors.bio?.message && (
            <p className="text-sm text-red-600">{errors.bio.message}</p>
          )}
          <p className="text-xs text-slate-500">
            {watch("bio")?.length || 0}/500 characters
          </p>
        </div>
      </div>
    </>
  );
}
