import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RootLayout } from "./pages/RootLayout";
import { RegisterPage } from "./pages/RegisterPage";

const route = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={route} />,
);
