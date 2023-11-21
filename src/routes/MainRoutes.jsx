import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

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
          path:`/order/:category`,
          element:<Order></Order>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
    ],
  },
]);

export default MainRoutes;
