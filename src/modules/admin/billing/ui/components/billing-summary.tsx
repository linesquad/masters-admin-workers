import { useGetBillingSummary } from "../../hooks/use-get-billing-summary";

export const BillingSummary = () => {
  const { data, isLoading, error, isError } = useGetBillingSummary();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (isError) return <div>Error</div>;

  if (!data) return <div>No data</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-yellow-800">
              Pending Amount
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
              {data.data.pendingCount} pending
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-yellow-900">
            {data.data.totalPending}₾
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-green-800">Paid Amount</h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
              {data.data.paidCount} paid
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-green-900">
            {data.data.totalPaid}₾
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-red-800">Overdue Amount</h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
              {data.data.overdueCount} overdue
            </span>
          </div>
          <p className="mt-2 text-2xl font-bold text-red-900">
            {data.data.totalOverdue}₾
          </p>
        </div>
      </div>
    </div>
  );
};
