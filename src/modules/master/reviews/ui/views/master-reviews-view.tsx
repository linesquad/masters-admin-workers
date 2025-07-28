import { PageTitle } from "@/components/page-title";
import { masterReviewsItems } from "@/lib/master-dashboard";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

const activeLinkProps = {
  activeProps: {
    className: "text-black font-semibold",
  },
  inactiveProps: {
    className: "text-black/70",
  },
};

export const MasterReviewsView = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <PageTitle
          title={t("reviews.title")}
          subtitle={t("reviews.subtitle")}
        />
      </div>
      <nav className="w-full mx-auto flex justify-center">
        <ul className="flex items-center gap-4">
          {masterReviewsItems.map((item) => (
            <li key={item.title}>
              <Link
                to={item.url}
                {...activeLinkProps}
                activeOptions={{ exact: true }}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
