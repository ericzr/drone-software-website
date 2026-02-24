import { createBrowserRouter } from "react-router";
import { RootLayout } from "./RootLayout";
import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetail },
    ],
  },
]);
