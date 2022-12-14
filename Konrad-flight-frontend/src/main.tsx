import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Airlines } from "./features/Airlines/Airlines.js";
import "./index.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { createRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={createRoutes()} />
  </React.StrictMode>
);
