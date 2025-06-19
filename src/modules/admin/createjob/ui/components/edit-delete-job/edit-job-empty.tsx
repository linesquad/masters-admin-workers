import { Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function EditJobEmpty() {
  return (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Briefcase className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Jobs Found
      </h3>
      <p className="text-gray-600 mb-6">
        There are currently no job postings in this category.
      </p>
      <Link to="/create-jobs/jobs">
        <button className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
          <Briefcase className="w-4 h-4" />
          Add First Job
        </button>
      </Link>
    </div>
  );
}
