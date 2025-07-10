import { billingSubnav } from "@/lib/biiling-subnav";
import { Link } from "@tanstack/react-router";

const activeLinkProps = {
  activeProps: {
    className: "text-blue-500",
  },
  inactiveProps: {
    className:
      "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
  },
};

export const BillingSubnav = () => {
  return (
    <div className="flex gap-6 border-b border-gray-200 mx-auto w-fit">
      {billingSubnav.map((item) => (
        <Link
          to={item.url}
          {...activeLinkProps}
          activeOptions={{ exact: true }}
          key={item.url}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
