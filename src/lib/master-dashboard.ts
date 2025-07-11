import {
  Briefcase,
  CheckCircle,
  Home,
  MapPin,
  Settings,
  User,
} from "lucide-react";

export const masterMainItems = [
  {
    title: "Dashboard",
    url: "/master",
    icon: Home,
  },
  {
    title: "Master Profile",
    url: "/master/master-profile",
    icon: User,
  },
  {
    title: "Profile Settings",
    url: "master/settings",
    icon: Settings,
  },
  {
    title: "Job Assignment",
    url: "master/job-assignment",
    icon: Briefcase,
  },
  {
    title: "Unlock Cities",
    url: "master/unlock-city",
    icon: MapPin,
  },
  {
    title: "Unlocked Cities",
    url: "master/unlocked-cities",
    icon: CheckCircle,
  },
];

export const availabilityOptions = [
  {
    value: "now",
    label: "Available Now",
    description: "Ready to take on new work immediately",
  },
  {
    value: "tomorrow",
    label: "Available Tomorrow",
    description: "Can start work from tomorrow",
  },
  {
    value: "next_week",
    label: "Available Next Week",
    description: "Ready to start next week",
  },
  {
    value: "on_holiday",
    label: "On Holiday",
    description: "Currently unavailable, on vacation",
  },
];
