import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Main from "./components/Main";
import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./components/ProductDetail";
// import CartModal from "./components/CartModal";
import AdminPanel from "./components/AdminPanel";
import {AuthContextProvider} from "./context/auth-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: '/',
        element: <Main />,
      },
      { path: ":productId", element: <ProductDetail /> },
      { path: "admin-panel", element: <AdminPanel/> },
    ],
  },
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />;
    </AuthContextProvider>
  )
};

export default App;
