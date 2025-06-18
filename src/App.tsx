import { RouterProvider } from "@tanstack/react-router";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { getUser, getUserRole } from "./modules/auth/services/auth";

const router = createRouter({
  routeTree,
  context: {
    getUser,
    getUserRole,
  }
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
