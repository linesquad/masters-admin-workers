import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  createCityPartSchema,
  type CreateCityPartFormData,
} from "../../schema/citySchema";


interface CreateCityPartFormProps {
  cityId: string;
  cityName: string;
  onSubmit: (data: CreateCityPartFormData) => void;
  onSuccess?: () => void;
  isPending?: boolean;
}

export function CreateCityPartForm({
  cityId,
  cityName,
  onSubmit,

  isPending = false,
}: CreateCityPartFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCityPartFormData>({
    resolver: zodResolver(createCityPartSchema),
    defaultValues: {
      cityId: cityId,
      name: "",
      unlockCost: 1,
      lat: undefined,
      lng: undefined,
    },
  });

  const handleFormSubmit = (data: CreateCityPartFormData) => {
    console.log("Form submitted with data:", data);
    onSubmit(data);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">
          Add New Part to {cityName}
        </h3>
        <p className="text-sm text-gray-600">
          Fill in the details to create a new city part
        </p>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        {/* Hidden City ID */}
        <input type="hidden" {...register("cityId")} />

        {/* City Part Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            City Part Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter city part name"
            {...register("name")}
            className={errors.name ? "border-red-500 focus:border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Unlock Cost */}
        <div className="space-y-2">
          <label
            htmlFor="unlockCost"
            className="text-sm font-medium text-gray-700"
          >
            Unlock Cost
          </label>
          <Input
            id="unlockCost"
            type="number"
            min="1"
            step="1"
            placeholder="Enter unlock cost"
            {...register("unlockCost", { valueAsNumber: true })}
            className={
              errors.unlockCost ? "border-red-500 focus:border-red-500" : ""
            }
          />
          {errors.unlockCost && (
            <p className="text-sm text-red-500">{errors.unlockCost.message}</p>
          )}
        </div>

        {/* Coordinates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Latitude */}
          <div className="space-y-2">
            <label htmlFor="lat" className="text-sm font-medium text-gray-700">
              Latitude <span className="text-gray-400">(optional)</span>
            </label>
            <Input
              id="lat"
              type="number"
              step="any"
              placeholder="Enter latitude (optional)"
              {...register("lat", { 
                setValueAs: (value) => {
                  if (value === "" || value === null || value === undefined) {
                    return undefined;
                  }
                  const num = Number(value);
                  return isNaN(num) ? undefined : num;
                }
              })}
              className={
                errors.lat ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.lat && (
              <p className="text-sm text-red-500">{errors.lat.message}</p>
            )}
          </div>

          {/* Longitude */}
          <div className="space-y-2">
            <label htmlFor="lng" className="text-sm font-medium text-gray-700">
              Longitude <span className="text-gray-400">(optional)</span>
            </label>
            <Input
              id="lng"
              type="number"
              step="any"
              placeholder="Enter longitude (optional)"
              {...register("lng", { 
                setValueAs: (value) => {
                  if (value === "" || value === null || value === undefined) {
                    return undefined;
                  }
                  const num = Number(value);
                  return isNaN(num) ? undefined : num;
                }
              })}
              className={
                errors.lng ? "border-red-500 focus:border-red-500" : ""
              }
            />
            {errors.lng && (
              <p className="text-sm text-red-500">{errors.lng.message}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end pt-4">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full md:w-auto cursor-pointer"
          >
            {isPending ? "Creating..." : "Create City Part"}
          </Button>
        </div>
      </form>
    </div>
  );
}
