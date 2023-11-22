import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Secret from "../shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/Dashboard/DashboardLayout";
import Cart from "../pages/Dashboard/Cart/Cart";

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
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ],
  },
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      }
    ]
  }
]);

export default MainRoutes;
