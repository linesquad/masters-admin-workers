import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { MasterJobProgress } from "./master-job-progress";
import { useTranslation } from "react-i18next";

export function MasterJobAssignHeader({
  currentStep,
  handleBackToCategories,
  handleBackToJobs,
  handleBackToDetails,
}: {
  currentStep: "category" | "job" | "details" | "confirm";
  handleBackToCategories: () => void;
  handleBackToJobs: () => void;
  handleBackToDetails: () => void;
}) {
  const { t } = useTranslation();
  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex items-start gap-2 sm:gap-4 mb-4">
        {currentStep !== "category" && (
          <Button
            variant="ghost"
            size="sm"
            onClick={
              currentStep === "job"
                ? handleBackToCategories
                : currentStep === "details"
                  ? handleBackToJobs
                  : handleBackToDetails
            }
            className="p-1.5 sm:p-2 cursor-pointer flex-shrink-0"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
        )}
        <div className="min-w-0 flex-1">
          <h1 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {currentStep === "category" && t("jobAssigment.chooseCategory")}
            {currentStep === "job" && t("jobAssigment.selectJob")}
            {currentStep === "details" && t("jobAssigment.jobDetails")}
            {currentStep === "confirm" && t("jobAssigment.confirmation")}
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 leading-tight">
            {currentStep === "category" &&
              t("jobAssigment.selectACategoryToSeeAvailableJobs")}
            {currentStep === "job" &&
              t("jobAssigment.chooseAJobFromThisCategory")}
            {currentStep === "details" && t("jobAssigment.jobSubtitle")}
            {currentStep === "confirm" &&
              "Review your selection before confirming"}
          </p>
        </div>
      </div>

      <MasterJobProgress currentStep={currentStep} />
    </div>
  );
}
