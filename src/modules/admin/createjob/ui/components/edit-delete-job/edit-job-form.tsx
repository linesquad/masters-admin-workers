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
import { Edit } from "lucide-react";
import {
  updateJobSchema,
  type UpdateJobFormData,
} from "../../../schema/job-schema";
import type { Category } from "@/modules/admin/category/types/category";
import type { Job } from "../../../types/jobs";

interface EditJobFormProps {
  handleUpdateJob: (data: UpdateJobFormData) => void;
  categories: Category[];
  isPending: boolean;
  onClose: () => void;
  job: Job;
}

export function EditJobForm({
  handleUpdateJob,
  categories,
  isPending,
  onClose,
  job,
}: EditJobFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateJobFormData>({
    resolver: zodResolver(updateJobSchema),
    defaultValues: {
      categoryId: job.categoryId,
      jobId: job.id,
      jobData: {
        title: {
          en: job.title.en,
          ru: job.title.ru,
          ka: job.title.ka,
        },
        description: {
          en: job.description.en,
          ru: job.description.ru,
          ka: job.description.ka,
        },
        categoryId: job.categoryId,
      },
    },
  });

  const onSubmit = (data: UpdateJobFormData) => {
    handleUpdateJob(data);
    onClose();
  };

  return (
    <div className="p-6 space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Edit className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">Edit Job</h3>
        <p className="text-sm text-gray-800">
          Update the job posting information
        </p>
      </div>

      {/* Job Edit Form */}
      <div className="space-y-4">
        {/* Category Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-black">Category</label>
          <Controller
            name="jobData.categoryId"
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
          {errors.jobData?.categoryId && (
            <p className="text-sm text-red-500">{errors.jobData.categoryId.message}</p>
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
                name="jobData.title.en"
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
            {errors.jobData?.title?.en && (
              <p className="text-sm text-red-500">{errors.jobData.title.en.message}</p>
            )}

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center">
                <span className="text-xs">🇬🇪</span>
              </div>
              <Controller
                name="jobData.title.ka"
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
            {errors.jobData?.title?.ka && (
              <p className="text-sm text-red-500">{errors.jobData.title.ka.message}</p>
            )}

            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center">
                <span className="text-xs">🇷🇺</span>
              </div>
              <Controller
                name="jobData.title.ru"
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
            {errors.jobData?.title?.ru && (
              <p className="text-sm text-red-500">{errors.jobData.title.ru.message}</p>
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
                name="jobData.description.en"
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
            {errors.jobData?.description?.en && (
              <p className="text-sm text-red-500">
                {errors.jobData.description.en.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-green-100 rounded-md flex items-center justify-center mt-2">
                <span className="text-xs">🇬🇪</span>
              </div>
              <Controller
                name="jobData.description.ka"
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
            {errors.jobData?.description?.ka && (
              <p className="text-sm text-red-500">
                {errors.jobData.description.ka.message}
              </p>
            )}

            <div className="flex items-start gap-2">
              <div className="w-5 h-5 bg-red-100 rounded-md flex items-center justify-center mt-2">
                <span className="text-xs">🇷🇺</span>
              </div>
              <Controller
                name="jobData.description.ru"
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
            {errors.jobData?.description?.ru && (
              <p className="text-sm text-red-500">
                {errors.jobData.description.ru.message}
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
            {isPending ? "Updating..." : "Update Job"}
          </button>
        </div>
      </div>
    </div>
  );
} 