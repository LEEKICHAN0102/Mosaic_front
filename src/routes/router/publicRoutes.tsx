import { RouteObject } from "react-router-dom";

import Layout from "@/components/Layout";
import Home from "@/routes/Home";
import Saturi from "@/routes/Saturi";
import Culture from "@/routes/Culture";
import Place from "@/routes/Place";


export const publicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/saturi",
        element: <Saturi />,
      },
      {
        path: "/culture",
        element: <Culture />,
      },
      {
        path: "/place",
        element: <Place />,
      }
    ]
  }
];