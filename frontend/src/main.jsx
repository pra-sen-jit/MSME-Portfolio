import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Explore from "./components/about/Explore.jsx";
import ProductsPage from "./components/product/ProductsPage.jsx";
import EmployeeDashboard from "./components/artisan/EmployeeDashboard.jsx";
import ContactForm from "./components/ContactForm.jsx";
import LoginPage from "./components/login/LoginPage.jsx";
import SignUpPage from "./components/login/SignUpPage.jsx";
import NotFound from "./components/NotFound.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <Explore /> },
      { path: "product", element: <ProductsPage /> },
      { path: "artisan", element: <EmployeeDashboard /> },
      { path: "contact", element: <ContactForm /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Analytics />
    <SpeedInsights />
  </StrictMode>
);
