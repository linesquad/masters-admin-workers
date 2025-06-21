import type { Job } from "@/modules/admin/createjob/types/jobs";
import type { JobAssignmentFormData } from "../../schema/assign";
import { FileText, DollarSign, Timer, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";    
import type { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";

export  function MasterJobDetailForm({
  selectedJob,
  handleBackToJobs,
  handleProceedToConfirm,
  register,
  errors,
  handleSubmit,
}: {
  selectedJob: Job;
  handleBackToJobs: () => void;
  handleProceedToConfirm: (data: JobAssignmentFormData) => void;
  register: UseFormRegister<JobAssignmentFormData>;
  errors: FieldErrors<JobAssignmentFormData>;
  handleSubmit: UseFormHandleSubmit<JobAssignmentFormData>;
}) {
  return (
    <div className="max-w-2xl mx-auto">
    <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">
              Job Assignment Details
            </h2>
            <p className="text-gray-600">
              Fill in the details for: {selectedJob.title.en}
            </p>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(handleProceedToConfirm)}
        className="space-y-4 sm:space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Minimum Price
            </label>
            <Input
              type="number"
              {...register("priceMin", { valueAsNumber: true })}
              placeholder="100000"
              className={errors.priceMin ? "border-red-500" : ""}
            />
            {errors.priceMin && (
              <p className="text-red-500 text-sm mt-1">
                {errors.priceMin.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Maximum Price
            </label>
            <Input
              type="number"
              {...register("priceMax", { valueAsNumber: true })}
              placeholder="100000"
              className={errors.priceMax ? "border-red-500" : ""}
            />
            {errors.priceMax && (
              <p className="text-red-500 text-sm mt-1">
                {errors.priceMax.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Timer className="w-4 h-4 inline mr-1" />
            Duration (Minutes)
          </label>
          <Input
            type="number"
            {...register("durationMinutes", { valueAsNumber: true })}
            placeholder="1440"
            className={errors.durationMinutes ? "border-red-500" : ""}
          />
          {errors.durationMinutes && (
            <p className="text-red-500 text-sm mt-1">
              {errors.durationMinutes.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <FileText className="w-4 h-4 inline mr-1" />
            Note
          </label>
          <Input
            {...register("note")}
            placeholder="Enter your note here..."
            className={errors.note ? "border-red-500" : ""}
          />
          {errors.note && (
            <p className="text-red-500 text-sm mt-1">
              {errors.note.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={handleBackToJobs}
            className="w-full sm:flex-1 cursor-pointer order-2 sm:order-1"
          >
            Back to Jobs
          </Button>
          <Button
            type="submit"
            className="w-full sm:flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 cursor-pointer order-1 sm:order-2"
          >
            <span className="hidden sm:inline">Continue to Review</span>
            <span className="sm:hidden">Continue</span>
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>
    </div>
  </div>
  )
}
