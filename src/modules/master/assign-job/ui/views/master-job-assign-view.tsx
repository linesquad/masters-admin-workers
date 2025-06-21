import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCategories } from "@/modules/admin/category/hooks/useCategory";
import { useGetJobByCategoryId } from "@/modules/admin/createjob/hooks/useGetJobByCategoryId";
import type { Category } from "@/modules/admin/category/types/category";
import type { Job } from "@/modules/admin/createjob/types/jobs";
import { useAssignJob } from "@/modules/master/assign-job/hooks/useAssignJob";
import {
  jobAssignmentFormSchema,
  type JobAssignmentFormData,
} from "@/modules/master/assign-job/schema/assign";
import { MasterJobAssignConfirmation } from "../components/master-job-assign-confirmation";
import { MasterJobDetailForm } from "../components/master-job-detail-form";
import { MasterJobSelection } from "../components/master-job-seleciton";
import { MasterJobCategorySelect } from "../components/master-job-category-select";
import { MasterJobAssignHeader } from "../components/master-job-assign-header";
export function MasterJobAssignView() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [currentStep, setCurrentStep] = useState<
    "category" | "job" | "details" | "confirm"
  >("category");

  // Form for job assignment details
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<JobAssignmentFormData>({
    resolver: zodResolver(jobAssignmentFormSchema),
  });

  const {
    data: categoriesData,
    isLoading: categoriesLoading,
    isError: categoriesError,
  } = useCategories();
  const {
    data: jobsData,
    isLoading: jobsLoading,
    isError: jobsError,
  } = useGetJobByCategoryId(selectedCategoryId || "");

  const { mutate: assignJob, isPending: isAssigningJob } = useAssignJob();

  const handleCategorySelect = (category: Category) => {
    setSelectedCategoryId(category.id);
    setCurrentStep("job");
    setSelectedJob(null);
  };

  const handleJobSelect = (job: Job) => {
    setSelectedJob(job);
    setCurrentStep("details");
  };

  const handleBackToCategories = () => {
    setCurrentStep("category");
    setSelectedCategoryId(null);
    setSelectedJob(null);
    reset();
  };

  const handleBackToJobs = () => {
    setCurrentStep("job");
    setSelectedJob(null);
    reset();
  };

  const handleBackToDetails = () => {
    setCurrentStep("details");
  };

  const handleProceedToConfirm = (formData: JobAssignmentFormData) => {
    console.log("Form data:", formData, "Selected job:", selectedJob);
    setCurrentStep("confirm");
  };

  const handleConfirmAssignment = () => {
    if (!selectedJob) return;

    const formData = getValues();
    const assignmentData = {
      jobId: selectedJob.id,
      priceMin: formData.priceMin,
      priceMax: formData.priceMax,
      durationMinutes: formData.durationMinutes || undefined,
      note: formData.note || undefined,
      isActive: true,
    };

    assignJob(assignmentData, {
      onSuccess: () => {
        setCurrentStep("category");
        setSelectedCategoryId(null);
        setSelectedJob(null);
        reset();
      },
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-6 max-w-4xl">
        {/* Header */}
        <MasterJobAssignHeader
          currentStep={currentStep}
          handleBackToCategories={handleBackToCategories}
          handleBackToJobs={handleBackToJobs}
          handleBackToDetails={handleBackToDetails}
        />

        {/* Category Selection */}
        {currentStep === "category" && (
          <MasterJobCategorySelect
            categoriesLoading={categoriesLoading}
            categoriesError={categoriesError}
            categoriesData={categoriesData}
            handleCategorySelect={handleCategorySelect}
          />
        )}

        {/* Job Selection */}
        {currentStep === "job" && (
          <MasterJobSelection
            jobsLoading={jobsLoading}
            jobsError={jobsError}
            jobsData={jobsData}
            handleJobSelect={handleJobSelect}
          />
        )}

        {/* Job Details Form */}
        {currentStep === "details" && selectedJob && (
          <MasterJobDetailForm
            selectedJob={selectedJob}
            handleBackToJobs={handleBackToJobs}
            handleProceedToConfirm={handleProceedToConfirm}
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
          />
        )}

        {/* Confirmation */}
        {currentStep === "confirm" && selectedJob && (
          <MasterJobAssignConfirmation
            selectedJob={selectedJob}
            handleBackToDetails={handleBackToDetails}
            handleConfirmAssignment={handleConfirmAssignment}
            isAssigningJob={isAssigningJob}
          />
        )}
      </div>
    </div>
  );
}
