import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Plus } from "lucide-react";

import {
  createJobSchema,
  type CreateJobFormData,
} from "../../../schema/job-schema";
import type { JobAddFormProps } from "../../../types/jobs";

export function JobAddForm({
  handleCreateJob,
  categories,
  isPending,
  onClose,
}: JobAddFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateJobFormData>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      categoryId: "",
      title: {
        en: "",
        ru: "",
        ka: "",
      },
      description: {
        en: "",
        ru: "",
        ka: "",
      },
    },
  });

  const onSubmit = (data: CreateJobFormData) => {
    handleCreateJob(data);
    reset();
    onClose();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Plus className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Add New Job</h3>
        <p className="text-sm text-gray-800">
          Create a new job posting in one of your categories
        </p>
      </div>

      {/* Job Creation Form */}
      <div className="space-y-4">
        {/* Category Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Category</label>
          <Controller
            name="categoryId"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200">
                  {categories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={category.id}
                      className="cursor-pointer text-black hover:bg-gray-50 focus:bg-gray-50"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            {category.name.en.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        <span className="text-black">{category.name.en}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.categoryId && (
            <p className="text-sm text-red-500">{errors.categoryId.message}</p>
          )}
        </div>

        {/* Job Title - Multi-language */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-black">Job Title</label>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
                <span className="text-xs">🇺🇸</span>
              </div>
              <Controller
                name="title.en"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Job title in English"
                    {...field}
                    className="flex-1"
                  />
                )}
              />
            </div>
            {errors.title?.en && (
              <p className="text-sm text-red-500">{errors.title.en.message}</p>
            )}

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center">
                <span className="text-xs">🇬🇪</span>
              </div>
              <Controller
                name="title.ka"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Job title in Georgian"
                    {...field}
                    className="flex-1"
                  />
                )}
              />
            </div>
            {errors.title?.ka && (
              <p className="text-sm text-red-500">{errors.title.ka.message}</p>
            )}

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center">
                <span className="text-xs">🇷🇺</span>
              </div>
              <Controller
                name="title.ru"
                control={control}
                render={({ field }) => (
                  <Input
                    placeholder="Job title in Russian"
                    {...field}
                    className="flex-1"
                  />
                )}
              />
            </div>
            {errors.title?.ru && (
              <p className="text-sm text-red-500">{errors.title.ru.message}</p>
            )}
          </div>
        </div>

        {/* Job Description - Multi-language */}
        <div className="space-y-3">
          <label className="text-sm font-medium text-black">
            Job Description
          </label>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center mt-2">
                <span className="text-xs">🇺🇸</span>
              </div>
              <Controller
                name="description.en"
                control={control}
                render={({ field }) => (
                  <Textarea
                    placeholder="Job description in English"
                    {...field}
                    className="flex-1 min-h-[80px] resize-none"
                  />
                )}
              />
            </div>
            {errors.description?.en && (
              <p className="text-sm text-red-500">
                {errors.description.en.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center mt-2">
                <span className="text-xs">🇬🇪</span>
              </div>
              <Controller
                name="description.ka"
                control={control}
                render={({ field }) => (
                  <Textarea
                    placeholder="Job description in Georgian"
                    {...field}
                    className="flex-1 min-h-[80px] resize-none"
                  />
                )}
              />
            </div>
            {errors.description?.ka && (
              <p className="text-sm text-red-500">
                {errors.description.ka.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center mt-2">
                <span className="text-xs">🇷🇺</span>
              </div>
              <Controller
                name="description.ru"
                control={control}
                render={({ field }) => (
                  <Textarea
                    placeholder="Job description in Russian"
                    {...field}
                    className="flex-1 min-h-[80px] resize-none"
                  />
                )}
              />
            </div>
            {errors.description?.ru && (
              <p className="text-sm text-red-500">
                {errors.description.ru.message}
              </p>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-4">
          <button
            onClick={onClose}
            className="cursor-pointer px-4 py-2 border border-gray-200 text-black rounded-lg hover:bg-gray-50 transition-colors"
            disabled={isPending}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isPending}
            className="cursor-pointer px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? "Creating..." : "Create Job"}
          </button>
        </div>
      </div>
    </div>
  );
}
