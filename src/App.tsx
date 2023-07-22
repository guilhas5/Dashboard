import "./index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import Users from "./pages/users/Users.tsx";
import Products from "./pages/products/Products.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import Menu from "./components/Menu.tsx";
import Login from "./pages/login/Login.tsx";

function App() {
  const Layout = () => {
    return (
      <div className="font-inter bg-main-bg text-main-color  ">
        <Navbar />
        <div className="flex">
          <div className="w-[250px] py-1 px-5 border-r-2 border-soft-bg">
            <Menu />
          </div>
          <div className="w-[100%] py-1 px-5">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
