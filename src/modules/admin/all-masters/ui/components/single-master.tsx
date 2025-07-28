import { LoadingState } from "@/components/loading-state";
import { useGetSingleMaster } from "../../hooks/use-get-single-master";
import { SingleMasterContent } from "./single-master-content";
import { SingleMasterHeader } from "./single-master-header";
import { SingleMasterReviews } from "./single-master-reviews";
import { SingleMasterSummary } from "./single-master-summary";
import { SingleMasterWorks } from "./single-master-works";
import { ErrorState } from "@/components/error-state";
import { EmptyState } from "@/components/empthy-state";

export function SingleMaster({ id }: { id: string }) {
  const { data, isLoading, isError, error } = useGetSingleMaster(id);

  if (isLoading)
    return (
      <LoadingState
        title={"Loading"}
        description={"Please wait while we load the master details"}
        className="mt-4"
      />
    );
  if (isError)
    return (
      <ErrorState
        title={"Error"}
        description={error?.message || "Something went wrong"}
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

  const {
    fullName,
    email,
    phone,
    bio,
    city,
    imageUrl,
    availability,
    memberSince,
    profileUpdatedAt,
    works,
    certificates,
    reviews,
    points,
    questionsAndAnswers,
    summary,
  } = data;

  return (
    <div className="pt-5">
      <div className="mx-auto max-w-3xl">
        <SingleMasterHeader
          fullName={fullName}
          email={email}
          phone={phone}
          imageUrl={imageUrl}
        />
        <SingleMasterContent
          id={id}
          fullName={fullName}
          email={email}
          phone={phone}
          imageUrl={imageUrl}
          bio={bio}
          city={city}
          availability={availability}
          memberSince={memberSince}
          profileUpdatedAt={profileUpdatedAt}
          works={works}
          certificates={certificates}
          reviews={reviews}
          points={points}
          questionsAndAnswers={questionsAndAnswers}
          summary={summary}
        />
        <SingleMasterWorks works={works} />
        <SingleMasterReviews reviews={reviews} />
        <SingleMasterSummary summary={summary} />
      </div>
    </div>
  );
}
