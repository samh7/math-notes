import React from "react";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Home from "./screens/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const paths = [{ path: "", element: <Home /> }];
export default function App() {
  const BrowserRouter = createBrowserRouter(paths);
  return (
    <MantineProvider>
      <RouterProvider router={BrowserRouter}></RouterProvider>
    </MantineProvider>
  );
}
