import { Button } from "@/components/ui/button";
import { DrawerSheet } from "@/components/DrawerSheet";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, MapPin, Plus, Upload, X } from "lucide-react";
import {
  type UseFormRegister,
  type Control,
  type FieldErrors,
  type UseFormHandleSubmit,
} from "react-hook-form";
import { Controller } from "react-hook-form";
import { type CreateCityFormData } from "../../schema/citySchema";

export function CreateCityForm({
  isCreateCityOpen,
  setIsCreateCityOpen,
  register,
  control,
  errors,
  imagePreview,
  fileInputRef,
  handleImageChange,
  onSubmit,
  removeImage,
  isPending,
  handleSubmit,
}: {
  isCreateCityOpen: boolean;
  setIsCreateCityOpen: (open: boolean) => void;
  register: UseFormRegister<CreateCityFormData>;
  control: Control<CreateCityFormData>;
  errors: FieldErrors<CreateCityFormData>;
  imagePreview: string | null;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  handleImageChange: (
    files: FileList | null,
    onChange: (value: FileList) => void
  ) => void;
  onSubmit: (data: CreateCityFormData) => void;
  removeImage: (onChange: (value: FileList) => void) => void;
  isPending: boolean;
  handleSubmit: UseFormHandleSubmit<CreateCityFormData>;
}) {
  return (
    <div className="flex justify-center mb-8">
      <DrawerSheet
        trigger={
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Create New City
          </Button>
        }
        title="Create New City"
        description="Add a new city to the system with an image and details"
        open={isCreateCityOpen}
        onOpenChange={setIsCreateCityOpen}
      >
        <ScrollArea className="h-[70vh] sm:flex-1 sm:h-0">
          <div className="px-6 py-6 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Create New City
              </h3>
              <p className="text-sm text-slate-600">
                Add a new city to the system with an image and name
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* City Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">
                  City Name
                </label>
                <Input
                  placeholder="Enter city name"
                  {...register("name")}
                  className={`w-full ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">
                    {String(errors.name?.message)}
                  </p>
                )}
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-900">
                  City Image
                </label>

                <Controller
                  name="image"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <>
                      {!imagePreview ? (
                        <div className="relative">
                          <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/jpeg,image/jpg,image/png,image/webp"
                            onChange={(e) =>
                              handleImageChange(e.target.files, onChange)
                            }
                            className="hidden"
                          />
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-slate-400 transition-colors cursor-pointer"
                          >
                            <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                            <p className="text-sm text-slate-600 mb-2">
                              Click to upload an image
                            </p>
                            <p className="text-xs text-slate-500">
                              JPEG, PNG, WebP up to 5MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="relative">
                          <div className="relative w-full h-48 rounded-lg overflow-hidden">
                            <img
                              src={imagePreview}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />
                            <button
                              type="button"
                              onClick={() => removeImage(onChange)}
                              className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                          >
                            <ImageIcon className="w-4 h-4" />
                            Change image
                          </button>
                          <input
                            type="file"
                            ref={fileInputRef}
                            accept="image/jpeg,image/jpg,image/png,image/webp"
                            onChange={(e) =>
                              handleImageChange(e.target.files, onChange)
                            }
                            className="hidden"
                          />
                        </div>
                      )}
                    </>
                  )}
                />

                {errors.image && (
                  <p className="text-sm text-red-500">
                    {String(errors.image?.message)}
                  </p>
                )}
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsCreateCityOpen(false)}
                  className="flex-1"
                  disabled={isPending}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  disabled={isPending}
                >
                  {isPending ? "Creating..." : "Create City"}
                </Button>
              </div>
            </form>
          </div>
        </ScrollArea>
      </DrawerSheet>
    </div>
  );
}
