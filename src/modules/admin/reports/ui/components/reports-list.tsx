import { LoadingState } from "@/components/loading-state";
import { useGetReports } from "../../hooks/use-get-reports";
import { ReportsCard } from "./reports-card";
import { ErrorState } from "@/components/error-state";
import { FileIcon } from "lucide-react";
import PaginationComp from "@/components/PaginationComp";

interface ReportsListProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

export function ReportsList({ page, limit, setPage }: ReportsListProps) {
  const { data, isLoading, isError } = useGetReports(page, limit);

  if (isLoading)
    return (
      <LoadingState
        title="Loading"
        description="Please wait while we load the reports"
      />
    );

  if (isError)
    return (
      <ErrorState title="Error" description="Failed to load the reports" />
    );

  if (!data.data.length)
    return (
      <ErrorState
        title="Empty"
        description="No reports found"
        icon={<FileIcon className="w-10 h-10" />}
      />
    );

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map(
          (report: {
            id: string;
            title: string;
            phone: string;
            note: string | null;
            createdAt: string;
          }) => (
            <ReportsCard
              key={report.id}
              id={report.id}
              title={report.title}
              phone={report.phone}
              note={report.note}
              createdAt={report.createdAt}
            />
          )
        )}
      </div>
      <PaginationComp
        totalcount={data.total}
        currentPage={page}
        limit={limit}
        onPageChange={setPage}
      />
    </div>
  );
}
