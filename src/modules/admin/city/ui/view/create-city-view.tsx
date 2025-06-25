import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createCitySchema,
  type CreateCityFormData,
} from "../../schema/citySchema";
import { useCreateCity } from "../../hooks/useCreateCity";

import { useGetCities } from "@/modules/master/unlock-cities/hooks/useGetCities";
import { CityCards } from "../components/city-cards";
import { CreateCityForm } from "../components/create-city-form";

export function CreateCityView() {
  const [isCreateCityOpen, setIsCreateCityOpen] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mutate: createCity, isPending } = useCreateCity();

  const { data: citiesResponse, isLoading: isLoadingCities } = useGetCities();
  const cities = citiesResponse?.data || citiesResponse;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CreateCityFormData>({
    resolver: zodResolver(createCitySchema),
    defaultValues: {
      name: "",
    },
  });

  const handleImageChange = (
    files: FileList | null,
    onChange: (value: FileList) => void
  ) => {
    if (files && files.length > 0) {
      const file = files[0];
      onChange(files); 

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (onChange: (value: FileList) => void) => {
    const emptyFileList = new DataTransfer().files;
    onChange(emptyFileList); 
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = (data: CreateCityFormData) => {
    const imageFile =
      data.image && data.image.length > 0 ? data.image[0] : undefined;

    // Only include the image if a file was actually selected
    const image = imageFile && imageFile.size > 0 ? imageFile : undefined;

    createCity(
      {
        name: data.name,
        image,
      },
      {
        onSuccess: () => {
          reset();
          setImagePreview(null);
          setIsCreateCityOpen(false);
        },
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className="mb-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              City Management
            </h1>
            <p className="text-gray-600">
              Create and manage cities in the system
            </p>
          </div>
          <CreateCityForm
            isCreateCityOpen={isCreateCityOpen}
            setIsCreateCityOpen={setIsCreateCityOpen}
            errors={errors}
            imagePreview={imagePreview}
            handleImageChange={handleImageChange}
            removeImage={removeImage}
            isPending={isPending}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            control={control}
            fileInputRef={fileInputRef}
          />
          {/* Cities List */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Existing Cities
              </h2>
              {cities && Array.isArray(cities) && cities.length > 0 && (
                <span className="text-sm text-gray-500">
                  {cities.length} {cities.length === 1 ? "city" : "cities"}
                </span>
              )}
            </div>
            <CityCards cities={cities} isLoadingCities={isLoadingCities} />
          </div>
        </div>
      </div>
    </div>
  );
}
