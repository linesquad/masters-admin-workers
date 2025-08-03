import { LoadingState } from "@/components/loading-state";
import { useGetContactUs } from "../../hooks/use-get-contact-us";
import { ErrorState } from "@/components/error-state";
import { ContactUsCard } from "./contact-us-card";
import PaginationComp from "@/components/PaginationComp";

interface GetterContactsProps {
  page: number;
  limit: number;
  setPage: (page: number) => void;
}

export function GetterContacts({ page, limit, setPage }: GetterContactsProps) {
  const { data, isLoading, isError } = useGetContactUs(page, limit);

  if (isLoading) {
    return (
      <LoadingState
        title="Loading contacts"
        description="Please wait... we are loading your contacts"
      />
    );
  }

  if (isError) {
    return (
      <ErrorState
        title="Error"
        description="Contact us messages are not available"
      />
    );
  }

  if (!data) {
    return (
      <ErrorState
        title="Error"
        description="Contact us messages are not available"
      />
    );
  }

  console.log(data.total.count);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.messages.map((contact) => (
          <ContactUsCard key={contact.id} contact={contact} />
        ))}
      </div>
      <PaginationComp
        totalcount={data.total.count}
        limit={limit}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}
