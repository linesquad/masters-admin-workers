import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getUser, getUserRole } from "./modules/auth/services/auth";
import type { UserTypes } from "./modules/auth/types/userTypes";
// main app

const router = createRouter({
  routeTree,
  context: {
    getUser: getUser as () => Promise<UserTypes>,
    getUserRole: getUserRole as () => Promise<string>,
  },
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
