import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export function SettingsFormInputs({
  errors,
  resetTrigger,
}: {
  errors: {
    city?: string;
    bio?: string;
    image?: string;
  };
  resetTrigger?: number;
}) {
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [bioLength, setBioLength] = useState(0);

  // Reset local state when resetTrigger changes
  useEffect(() => {
    if (resetTrigger !== undefined && resetTrigger > 0) {
      setSelectedFile("");
      setBioLength(0);
    }
  }, [resetTrigger]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedFile(file ? file.name : "");
  };

  const handleBioChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBioLength(e.target.value.length);
  };

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
              name="city"
              placeholder="Enter your city"
              className="pl-10 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text"
            />
          </div>
          {errors.city && (
            <p className="text-sm text-red-600">{errors.city}</p>
          )}
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
          <FileText className="size-5 text-blue-600" />
          Profile Picture
        </h2>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 cursor-pointer">
            Upload Profile Picture
          </label>
          <div className="flex items-center gap-3">
            <label className="cursor-pointer">
              <input
                name="image"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleFileChange}
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
                <FileText className="size-4" />
                Choose File
              </div>
            </label>
            <span className="text-sm text-slate-500">
              {selectedFile || "JPG, PNG up to 5MB"}
            </span>
          </div>
          {errors.image && (
            <p className="text-sm text-red-600">{errors.image}</p>
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
            name="bio"
            placeholder="Tell potential clients about yourself, your experience, and what makes you unique..."
            className="min-h-32 focus-visible:border-blue-500 focus-visible:ring-blue-500/20 cursor-text resize-none"
            onChange={handleBioChange}
          />
          {errors.bio && (
            <p className="text-sm text-red-600">{errors.bio}</p>
          )}
          <p className="text-xs text-slate-500">
            {bioLength}/500 characters
          </p>
        </div>
      </div>
    </>
  );
}
