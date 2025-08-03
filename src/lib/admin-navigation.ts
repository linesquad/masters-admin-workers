import {
  Box,
  Briefcase,
  CreditCardIcon,
  FileText,
  Home,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  Star,
  User,
  Users,
} from "lucide-react";

export const getAdminNavigationItems = (t: (key: string) => string) => [
  {
    title: t("adminNavigation.dashboard"),
    url: "/",
    icon: Home,
  },
  {
    title: t("adminNavigation.createUser"),
    url: "/register",
    icon: User,
  },
  {
    title: t("adminNavigation.createCategory"),
    url: "/create-category",
    icon: Box,
  },
  {
    title: t("adminNavigation.createJob"),
    url: "/create-jobs/jobs",
    icon: Briefcase,
  },
  {
    title: t("adminNavigation.createCity"),
    url: "/create-city",
    icon: MapPin,
  },
  {
    title: t("adminNavigation.allMasters"),
    url: "/get-masters/all-masters",
    icon: Users,
  },
  {
    title: t("adminNavigation.billing"),
    url: "/billing",
    icon: CreditCardIcon,
  },
  {
    title: t("adminNavigation.reviews"),
    url: "reviews",
    icon: Star,
  },
  {
    title: t("adminNavigation.reports"),
    url: "/reports",
    icon: FileText,
  },
  {
    title: t("adminNavigation.contactUs"),
    url: "/contact-us",
    icon: Phone,
  },
  {
    title: t("adminNavigation.newApplications"),
    url: "/master-applies",
    icon: Newspaper,
  },
  {
    title: t("adminNavigation.gmailSubscriptions"),
    url: "/gmail-subscriptions",
    icon: Mail,
  },
];
