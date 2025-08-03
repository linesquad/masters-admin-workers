import { LoadingState } from "@/components/loading-state";
import { useGetAllNewApplies } from "../hooks/use-get-all-new-applies";
import { NewAppliesCard } from "./new-applies-card";
import { ErrorState } from "@/components/error-state";
import PaginationComp from "@/components/PaginationComp";
import { FileIcon } from "lucide-react";

interface NewAppliesListProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

export function NewAppliesList({ page, limit, setPage }: NewAppliesListProps) {
  const { data, isLoading, isError } = useGetAllNewApplies(page, limit);

  if (isLoading)
    return (
      <LoadingState
        title="Loading"
        description="Please wait while we load the new applies"
      />
    );
  if (isError)
    return (
      <ErrorState title="Error" description="Failed to load the new applies" />
    );

  if (!data.data.length)
    return (
      <ErrorState
        title="Empty"
        description="No new applies found"
        icon={<FileIcon className="w-10 h-10" />}
      />
    );

  return (
    <div className="flex flex-col gap-4 mt-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.data.map(
          (apply: {
            id: string;
            fullName: string;
            phone: string;
            speciality: string;
            note: string;
            createdAt: string;
          }) => (
            <NewAppliesCard
              key={apply.id}
              id={apply.id}
              fullName={apply.fullName}
              phone={apply.phone}
              speciality={apply.speciality}
              note={apply.note}
              createdAt={apply.createdAt}
            />
          )
        )}
      </div>
      <PaginationComp
        totalcount={data.total}
        limit={limit}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}
