import type {
  Reviews,
  Points,
  QuestionsAndAnswers,
  SingleMaster,
  Summary,
  Certificate,
  Work,
} from "../../types";
import { useTranslation } from "react-i18next";

interface SingleMasterContentProps extends SingleMaster {
  works: Work[];
  certificates: Certificate[];
  reviews: Reviews;
  points: Points;
  questionsAndAnswers: QuestionsAndAnswers;
  summary: Summary;
}

export function SingleMasterContent({
  bio,
  city,
  availability,
  memberSince,
  profileUpdatedAt,
}: SingleMasterContentProps) {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      {[
        { label: t("allMasters.singleMaster.bio"), value: bio },
        { label: t("allMasters.singleMaster.city"), value: city },
        {
          label: t("allMasters.singleMaster.availability"),
          value: availability,
        },
        { label: t("allMasters.singleMaster.memberSince"), value: memberSince },
        {
          label: t("allMasters.singleMaster.profileUpdatedAt"),
          value: profileUpdatedAt,
        },
      ].map((item) => (
        <div
          key={item.label}
          className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <h2 className="text-sm font-medium text-gray-500 mb-1">
            {item.label}
          </h2>
          <p className="text-gray-900 font-medium">
            {item.value || <span className="text-gray-400">Not specified</span>}
          </p>
        </div>
      ))}
    </div>
  );
}
