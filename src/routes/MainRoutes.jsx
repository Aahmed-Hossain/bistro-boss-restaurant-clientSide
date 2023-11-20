import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";

const MainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        { 
            path: "/", 
            element: <Home></Home> 
        },
        {
          path:'/menu',
          element:<Menu></Menu>
        },
        {
          path:'/order',
          element:<Order></Order>
        }
    ],
  },
]);

export default MainRoutes;
