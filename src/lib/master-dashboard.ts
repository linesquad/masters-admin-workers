import {
  Briefcase,
  CheckCircle,
  Home,
  MapPin,
  MessageCircle,
  Settings,
  User,
} from "lucide-react";

export const masterMainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Master Profile",
    url: "/master-profile",
    icon: User,
  },
  {
    title: "Profile Settings",
    url: "/settings",
    icon: Settings,
  },
  {
    title: "Job Assignment",
    url: "/job-assignment",
    icon: Briefcase,
  },
  {
    title: "Unlock Cities",
    url: "/unlock-city",
    icon: MapPin,
  },
  {
    title: "Unlocked Cities",
    url: "/unlocked-cities",
    icon: CheckCircle,
  },
  {
    title: "Questions",
    url: "/questions",
    icon: MessageCircle,
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
