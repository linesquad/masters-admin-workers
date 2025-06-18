import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { type User } from "@/modules/auth/services/auth";

export const Route = createRootRouteWithContext<User>()({
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
