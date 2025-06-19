import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import type { UserTypes } from "@/modules/auth/types/userTypes";

interface RouterContext {
  getUser: () => Promise<UserTypes>;
  getUserRole: () => Promise<string>;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
  loader: async ({ context }) => {
    const user = await context.getUser().catch(() => null);
    return { user };
  },
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}
