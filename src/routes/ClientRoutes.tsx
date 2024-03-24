import Landing from "../pages/Landing";
import ClientLayout from "../layouts/ClientLayout";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "/",
      element: <Landing />,
    },
  ],
};

export default ClientRoutes;
