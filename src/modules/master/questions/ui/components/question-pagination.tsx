import PaginationComp from "@/components/PaginationComp";
import { Card, CardContent } from "@/components/ui/card";

export function QuestionPagination({
  questions,
  filters,
  currentPage,
  handlePageChange,
}: {
  questions: any;
  filters: any;
  currentPage: number;
  handlePageChange: (page: number) => void;
}) {
  return (
    <>
      {/* Pagination Component */}
      {questions?.data?.pagination && questions.data.pagination.pages > 1 && (
        <div className="flex justify-center mt-6">
          <PaginationComp
            totalcount={questions.data.pagination.total}
            limit={filters.limit}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {/* Pagination Info */}
      {questions?.data?.pagination && (
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="text-sm text-gray-600">
                Showing {questions.data.pagination.limit} items per page
              </div>
              <div className="text-sm text-gray-600">
                Total: {questions.data.pagination.total} questions
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
