import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { UserTypes } from "@/modules/auth/types/userTypes";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import z from "zod";
import i18n from "@/lib/i18n";

interface RouterContext {
  getUser: () => Promise<UserTypes>;
  getUserRole: () => Promise<string>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  validateSearch: z.object({
    lang: z.string().optional(),
  }),
  component: RootComponent,
  loader: async ({ context }) => {
    const user = await context.getUser().catch(() => null);
    return { user };
  },
});

function RootComponent() {
  const { i18n: i18nInstance } = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");

    const storedLang = localStorage.getItem("language");
    const targetLang = urlLang || storedLang || "en";

    if (targetLang !== i18n.language) {
      i18n.changeLanguage(targetLang);
    }

    if (targetLang !== storedLang) {
      localStorage.setItem("language", targetLang);
    }
  }, [i18nInstance]);

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
