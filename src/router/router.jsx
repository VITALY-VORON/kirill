import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout";
import Prew from "../pages/Prew";
import About from "../pages/About";
import Contakts from "../pages/contakt";
import Time from "../pages/time";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Prew />},
            { path: "/about", element: <About />},
            { path: "/contacts", element: <Contakts />},
            { path: "/time", element: <Time />}
        ]
    }
]);