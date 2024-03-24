import { useRoutes } from "react-router-dom";
import ClientRoutes from "./ClientRoutes";

function AppRouter() {
  return useRoutes([ClientRoutes]);
}

export default AppRouter;
