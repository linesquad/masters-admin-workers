import { PageTitle } from "@/components/page-title";
import { useGetLeadByIdMaster } from "../../hooks/use-get-lead-by-id-master";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AcceptDeclineLead } from "./accept-decline-lead";
import { useTranslation } from "react-i18next";
import { EmptyState } from "@/components/empthy-state";
import { LoadingState } from "@/components/loading-state";
import { ErrorState } from "@/components/error-state";

interface SingleLeadProps {
  id: string;
}

export function SingleLead({ id }: SingleLeadProps) {
  const { data, isLoading, isError, error } = useGetLeadByIdMaster(id);
  const { t } = useTranslation();

  if (isLoading)
    return (
      <LoadingState
        title="Loading lead"
        description="Please wait while we load the lead"
        className="mt-12"
      />
    );
  if (isError)
    return (
      <ErrorState
        title="Error loading lead"
        description={error?.message || "Please try again later"}
        className="mt-12"
      />
    );
  if (!data)
    return (
      <EmptyState
        title="No lead found"
        description="Please try again later"
        className="mt-12"
      />
    );

  const { email, fullName, phone } = data.data.client;

  return (
    <div className="py-4 px-4">
      <PageTitle
        title={t("leads.singleLead.title", { leadName: fullName })}
        className="mb-4"
      />

      <Link to="/master/leads" className="mb-4">
        <Button variant={"secondary"}>{t("leads.singleLead.goBack")}</Button>
      </Link>

      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">
              {t("leads.singleLead.clientInformation")}
            </h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium">
                  {t("leads.singleLead.fullName")}:
                </span>{" "}
                {fullName}
              </p>
              <p>
                <span className="font-medium">
                  {t("leads.singleLead.email")}:
                </span>{" "}
                {email}
              </p>
              <p>
                <span className="font-medium">
                  {t("leads.singleLead.phone")}:
                </span>{" "}
                {phone}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">
              {t("leads.singleLead.jobDetails")}
            </h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium">
                  {t("leads.leadCard.location")}:
                </span>{" "}
                {data.data.location}
              </p>
              <p>
                <span className="font-medium">
                  {t("leads.leadCard.requestedTime")}:
                </span>{" "}
                {new Date(data.data.requestedTime).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">
                  {t("leads.leadCard.status")}:
                </span>{" "}
                <span className="capitalize">{data.data.status}</span>
              </p>
              <p>
                <span className="font-medium">
                  {t("leads.leadCard.price")}:
                </span>{" "}
                {data.data.price ? `${data.data.price} ₾` : "Not set"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-4">
            {t("leads.singleLead.clientMessage")}
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{data.data.message}</p>
          </div>
        </div>

        {data.data.completedAt && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">
              {t("leads.singleLead.completionDetails")}
            </h3>
            <p>
              {t("leads.singleLead.completedAt")}:{" "}
              {new Date(data.data.completedAt).toLocaleString()}
            </p>
          </div>
        )}

        <AcceptDeclineLead id={id} />
      </div>
    </div>
  );
}
