import { PageTitle } from "@/components/page-title";
import { masterReviewsItems } from "@/lib/master-dashboard";
import { Link } from "@tanstack/react-router";

const activeLinkProps = {
  activeProps: {
    className: "text-black font-semibold",
  },
  inactiveProps: {
    className: "text-black/70",
  },
};

export const MasterReviewsView = () => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-between mb-4">
        <PageTitle title="Reviews" subtitle="Manage your reviews" />
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
