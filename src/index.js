import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import * as Page from "./page";
import ErrorPage from "./error-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page.Page30Juni />,
    errorElement: <ErrorPage />,
  },
  {
    path: "mars",
    element: <Page.Mars />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "mengulang",
  //   element: <Page.Mengulang />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "tentang-omb",
    element: <Page.TentangOMB />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pelaksanaan",
    element: <Page.Pelaksanaan />,
    errorElement: <ErrorPage />,
  },
  {
    path: "divisi",
    element: <Page.Divisi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "30juni",
    element: <Page.Page30Juni />,
    errorElement: <ErrorPage />,
  },
  {
    path: "tata-cara",
    element: <Page.TataCara />,
    errorElement: <ErrorPage />,
  },
  {
    path: "lini-masa",
    element: <Page.Linimasa />,
    errorElement: <ErrorPage />,
  },
  {
    path: "rute-bus",
    element: <Page.RuteBus />,
    errorElement: <ErrorPage />,
  },
  {
    path: "bingkai",
    element: <Page.BingkaiResmi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "informasi-prodi",
    element: <Page.InformasiProdi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "faq",
    element: <Page.FAQpage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "duta-hanasta",
    element: <Page.KontenInteraktif />,
    errorElement: <ErrorPage />,
  },
  {
    path: "3agu",
    element: <Page.Home3Agu />,
    errorElement: <ErrorPage />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
