import { Box, Briefcase, Home, User } from "lucide-react";

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
    url: "/create-jobs",
    icon: Briefcase,
  },
];
