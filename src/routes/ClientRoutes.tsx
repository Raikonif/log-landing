import Landing from "../pages/Landing";
import ClientLayout from "../layouts/ClientLayout";
import AirImporter from "~/pages/logistic_services/AirImporter";
import Projects from "~/pages/logistic_services/Projects";
import Verifier from "~/pages/logistic_services/Verifier";
import Storage from "~/pages/logistic_services/Storage";
import Events from "~/pages/logistic_services/Events";
import MultiModal from "~/pages/logistic_services/Mutimodal";
import WaterImport from "~/pages/logistic_services/WaterImport";

const ClientRoutes = {
  path: "",
  element: <ClientLayout />,
  children: [
    {
      path: "",
      element: <Landing />,
    },
    {
      path: "projects",
      element: <Projects />,
    },
    {
      path: "verifier",
      element: <Verifier />,
    },
    {
      path: "storage",
      element: <Storage />,
    },
    {
      path: "events",
      element: <Events />,
    },
    {
      path: "multimodal",
      element: <MultiModal />,
    },
    {
      path: "air-importer",
      element: <AirImporter />,
    },
    {
      path: "water-importer",
      element: <WaterImport />,
    }
  ],
};

export default ClientRoutes;
