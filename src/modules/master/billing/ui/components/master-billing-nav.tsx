import { Link } from "@tanstack/react-router";

const activeLinkProps = {
  activeProps: {
    className: "text-blue-500",
  },
  inactiveProps: {
    className: "text-gray-500",
  },
};

const navItems = [
  {
    label: "Billing",
    href: "/master/billing",
  },
  {
    label: "Upload Proof",
    href: "/master/billing/upload-proof",
  },
];

export const MasterBillingNav = () => {
  return (
    <nav className="w-full flex items-center justify-center gap-x-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          {...activeLinkProps}
          activeOptions={{ exact: true }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
