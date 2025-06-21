import { Button } from "@/components/ui/button";
import type { Job } from "@/modules/admin/createjob/types/jobs";
import { CheckCircle, Calendar, User, Clock } from "lucide-react";

export function MasterJobAssignConfirmation({
  selectedJob,
  handleBackToDetails,
  handleConfirmAssignment,
  isAssigningJob,
}: {
  selectedJob: Job;
  handleBackToDetails: () => void;
  handleConfirmAssignment: () => void;
  isAssigningJob: boolean;
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 shadow-lg">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Confirm Job Assignment
          </h2>
          <p className="text-gray-600">
            Please review the details before confirming
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Job Details</h3>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Job Title (English)
                </span>
                <p className="text-gray-900 font-medium">
                  {selectedJob.title.en}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Job Title (Georgian)
                </span>
                <p className="text-gray-900 font-medium">
                  {selectedJob.title.ka}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Job Title (Russian)
                </span>
                <p className="text-gray-900 font-medium">
                  {selectedJob.title.ru}
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">
                  Description
                </span>
                <p className="text-gray-700">{selectedJob.description.en}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>
                    Created:{" "}
                    {new Date(selectedJob.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{selectedJob.masterCount} masters assigned</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleBackToDetails}
            className="w-full sm:flex-1 cursor-pointer order-2 sm:order-1"
          >
            Back to Details
          </Button>
          <Button
            onClick={handleConfirmAssignment}
            disabled={isAssigningJob}
            className="w-full sm:flex-1 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2"
          >
            {isAssigningJob ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                <span className="hidden sm:inline">Assigning...</span>
                <span className="sm:hidden">Assigning...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Confirm Assignment</span>
                <span className="sm:hidden">Confirm</span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
