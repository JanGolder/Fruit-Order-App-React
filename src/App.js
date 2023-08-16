import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./components/ProductDetail";
import CartModal from "./components/CartModal";
import AdminPanel from "./components/AdminPanel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: '/',
        element: <Main />,
        children: [{ path: "cart", element: <CartModal /> },],
      },
      { path: ":productId", element: <ProductDetail /> },
      { path: "admin-panel", element: <AdminPanel/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
