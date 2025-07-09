import type { Summary } from "../../types";

export function SingleMasterSummary({ summary }: { summary: Summary }) {
  return (
    <div className="grid grid-cols-2 gap-4 my-8">
      {[
        { label: "Total Works", value: summary.totalWorks },
        { label: "Total Certificates", value: summary.totalCertificates },
        { label: "Total Reviews", value: summary.totalReviews },
        { label: "Total Questions", value: summary.totalQuestions },
        { label: "Answered Questions", value: summary.answeredQuestions },
        {
          label: "Joined Date",
          value: new Date(summary.joinedDate).toLocaleDateString(),
        },
        {
          label: "Profile Completeness",
          value: `${summary.profileCompleteness}%`,
        },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-blue-50 p-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
        >
          <p className="text-sm font-medium text-blue-600">{item.label}</p>
          <p className="text-lg font-semibold text-blue-800">{item.value}</p>
        </div>
      ))}
    </div>
  );
}
