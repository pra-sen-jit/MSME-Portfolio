import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import ProductsPage from "./components/product/ProductsPage.jsx";
import Footer from "./components/header/Footer.jsx";
import Explore from "./components/about/Explore.jsx";
import Header from "./components/header/Header.jsx";
import EmployeeDashboard from "./components/artisan/EmployeeDashboard.jsx";
import ContactForm from "./components/ContactForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <Explore />,
  },
  {
    path: "/product",
    element: <ProductsPage />,
  },
  {
    path: "/artisan",
    element: <EmployeeDashboard />,
  },
  {
    path: "/contact",
    element: <ContactForm />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
