import { PageTitle } from "@/components/page-title";
import { useGetLeadByIdMaster } from "../../hooks/use-get-lead-by-id-master";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { AcceptDeclineLead } from "./accept-decline-lead";

interface SingleLeadProps {
  id: string;
}

export function SingleLead({ id }: SingleLeadProps) {
  const { data, isLoading, isError, error } = useGetLeadByIdMaster(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;
  if (!data) return <div>No lead found</div>;

  const { email, fullName, phone } = data.data.client;

  return (
    <div className="py-4 px-4">
      <PageTitle
        title={`Information about ${fullName} lead`}
        className="mb-4"
      />

      <Link to="/master/leads" className="mb-4">
        <Button variant={"secondary"}>Go Back</Button>
      </Link>

      <div className="mt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">Client Information</h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Full Name:</span> {fullName}
              </p>
              <p>
                <span className="font-medium">Email:</span> {email}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {phone}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">Job Details</h3>
            <div className="space-y-3">
              <p>
                <span className="font-medium">Location:</span>{" "}
                {data.data.location}
              </p>
              <p>
                <span className="font-medium">Requested Time:</span>{" "}
                {new Date(data.data.requestedTime).toLocaleString()}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}
                <span className="capitalize">{data.data.status}</span>
              </p>
              <p>
                <span className="font-medium">Price:</span>{" "}
                {data.data.price ? `$${data.data.price}` : "Not set"}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg mb-4">Client Message</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700">{data.data.message}</p>
          </div>
        </div>

        {data.data.completedAt && (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-medium text-lg mb-4">Completion Details</h3>
            <p>
              Completed at: {new Date(data.data.completedAt).toLocaleString()}
            </p>
          </div>
        )}

        <AcceptDeclineLead id={id} />
      </div>
    </div>
  );
}
