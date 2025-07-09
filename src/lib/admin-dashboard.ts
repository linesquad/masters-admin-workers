import { Box, Briefcase, Home, MapPin, User, Users } from "lucide-react";

export const mainItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Create User",
    url: "/register",
    icon: User,
  },
  {
    title: "Create Category",
    url: "/create-category",
    icon: Box,
  },
  {
    title: "Create Job",
    url: "/create-jobs/jobs",
    icon: Briefcase,
  },
  {
    title: "Create City",
    url: "/create-city",
    icon: MapPin,
  },
  {
    title: "All Masters",
    url: "/get-masters/all-masters",
    icon: Users,
  },
];
