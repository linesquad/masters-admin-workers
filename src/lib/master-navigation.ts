import {
  Briefcase,
  CheckCircle,
  Home,
  MapPin,
  Settings,
  User,
  UserPlus,
  Bell,
  Star,
  CreditCard,
} from "lucide-react";

export const getMasterNavigationItems = (t: (key: string) => string) => [
  {
    title: t("masterNavigation.dashboard"),
    url: "/master",
    icon: Home,
  },
  {
    title: t("masterNavigation.masterProfile"),
    url: "/master/master-profile",
    icon: User,
  },
  {
    title: t("masterNavigation.profileSettings"),
    url: "master/settings",
    icon: Settings,
  },
  {
    title: t("masterNavigation.jobAssignment"),
    url: "master/job-assignment",
    icon: Briefcase,
  },
  {
    title: t("masterNavigation.unlockCities"),
    url: "master/unlock-city",
    icon: MapPin,
  },
  {
    title: t("masterNavigation.unlockedCities"),
    url: "master/unlocked-cities",
    icon: CheckCircle,
  },
  {
    title: t("masterNavigation.leads"),
    url: "master/leads",
    icon: UserPlus,
  },
  {
    title: t("masterNavigation.notifications"),
    url: "master/notifications",
    icon: Bell,
  },
  {
    title: t("masterNavigation.reviews"),
    url: "master/reviews",
    icon: Star,
  },
  {
    title: t("masterNavigation.billing"),
    url: "master/billing",
    icon: CreditCard,
  },
];
