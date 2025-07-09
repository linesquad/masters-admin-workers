import { useGetSingleMaster } from "../../hooks/use-get-single-master";
import { SingleMasterContent } from "./single-master-content";
import { SingleMasterHeader } from "./single-master-header";
import { SingleMasterReviews } from "./single-master-reviews";
import { SingleMasterSummary } from "./single-master-summary";
import { SingleMasterWorks } from "./single-master-works";

export function SingleMaster({ id }: { id: string }) {
  const { data, isLoading, isError, error } = useGetSingleMaster(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data found</div>;

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
