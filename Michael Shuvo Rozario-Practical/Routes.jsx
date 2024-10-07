import { createBrowserRouter } from "react-router-dom";
import Home from "./src/Pages/Home";
import About from "./src/Pages/About";
import Contactme from "./src/Pages/Contactme";
import Links from "./src/Pages/Links";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Contactme",
      element: <Contactme />,
    },
    {
      path: "/Links",
      element: <Links />,
    },
  ]);

  export default router