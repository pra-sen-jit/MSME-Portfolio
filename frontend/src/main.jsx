import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProductsPage from "./components/product/ProductsPage.jsx";
import Explore from "./components/about/Explore.jsx";
import EmployeeDashboard from "./components/artisan/EmployeeDashboard.jsx";
import ContactForm from "./components/ContactForm.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <Explore /> },
      { path: "product", element: <ProductsPage /> },
      { path: "artisan", element: <EmployeeDashboard /> },
      { path: "contact", element: <ContactForm /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
    {/* <Footer /> */}
  </StrictMode>
);
