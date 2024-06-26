import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import SharedForm from "./components/sharedform";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import Pharmacy from "./components/Pharmacy";
import Finance from "./components/Finance";
import DoctorRecords from "./components/Doctors";
import { FormDataProvider } from "./components/datacontext"; // Import the provider
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <RecordList /> },
      { path: "/", element: <SharedForm /> }, 
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      { index: true, element: <Record /> },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      { index: true, element: <Record /> },
    ],
  },
  {
<<<<<<< HEAD
    path: "/doctors",
=======
    path: "/doctors/:id",
    element: <App />,
    children: [
      {
        path: "doctors/:id",
        element: <DoctorRecord />,
      },
    ],
  },
  {
    path: "/prescriptions/:id",
>>>>>>> ec630387571cff3308894f0bffa79f558b607bd9
    element: <App />,
    children: [
      { index: true, element: <DoctorRecords /> },
    ],
  },
  {
    path: "/pharmacy",
    element: <App />,
    children: [
      { index: true, element: <Pharmacy /> },
    ],
  },
  {
    path: "/pharmacy/edit/:id",
    element: <App />,
    children: [
      { index: true, element: <Pharmacy /> },
    ],
  },
  {
    path: "/finance",
    element: <App />,
    children: [
      { index: true, element: <Finance /> },
    ],
  },
  {
    path: "/finance/edit/:id",
    element: <App />,
    children: [
      { index: true, element: <Finance /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormDataProvider> 
      <RouterProvider router={router} />
    </FormDataProvider>
  </React.StrictMode>
);
