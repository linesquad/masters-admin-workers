import { LoadingState } from "@/components/loading-state";
import { useGetBillingSummary } from "../../hooks/use-get-billing-summary";
import { EmptyState } from "@/components/empthy-state";
import { ErrorState } from "@/components/error-state";
import { useTranslation } from "react-i18next";

export const BillingSummary = () => {
  const { t } = useTranslation();
  const { data, isLoading, error, isError } = useGetBillingSummary();

  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the billing summary"}
        className="mt-4"
      />
    );
  if (isError && error)
    return (
      <ErrorState
        title={"Error"}
        description={error.message || "Something went wrong"}
        className="mt-4"
      />
    );

  if (!data)
    return (
      <EmptyState
        title={"No data"}
        description={"Please try again later"}
        className="mt-4"
      />
    );

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-yellow-800">
              {t("adminBilling.billingStats.pendingAmount")}
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
            <h3 className="text-sm font-medium text-green-800">
              {t("adminBilling.billingStats.paidAmount")}
            </h3>
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
            <h3 className="text-sm font-medium text-red-800">
              {t("adminBilling.billingStats.overdueAmount")}
            </h3>
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
