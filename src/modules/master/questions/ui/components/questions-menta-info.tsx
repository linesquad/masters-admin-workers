import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function QuestionsMentaInfo({
  questions,
  formatDate,
}: {
  questions: any;
  formatDate: (date: string) => string;
}) {
  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Profile Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Answered</p>
              <p className="text-xl font-semibold">
                {questions?.data?.meta?.totalAnswered || 0}
              </p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Avg Response Time</p>
              <p className="text-xl font-semibold">
                {questions?.data?.meta?.avgResponseTime || 0}h
              </p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Can Answer</p>
              <p className="text-xl font-semibold">
                {questions?.data?.meta?.canAnswer ? "Yes" : "No"}
              </p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">Can Moderate</p>
              <p className="text-xl font-semibold">
                {questions?.data?.meta?.canModerate ? "Yes" : "No"}
              </p>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Last updated:{" "}
            {questions?.data?.meta?.lastUpdated
              ? formatDate(questions.data.meta.lastUpdated)
              : "N/A"}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
