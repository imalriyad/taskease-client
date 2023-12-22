import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import ContextProvider from "./Context/ContextProvider";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./Private/PrivateRoute";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ContextProvider>
   <PrivateRoute><Toaster />
   <RouterProvider router={router}></RouterProvider></PrivateRoute>
   </ContextProvider>
  </React.StrictMode>
);
