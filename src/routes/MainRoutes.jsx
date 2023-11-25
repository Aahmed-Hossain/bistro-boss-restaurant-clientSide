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
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItems from "../pages/Dashboard/UpdateItems/UpdateItems";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";

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
      // normal users
      {
        path: 'cart',
        element: <Cart></Cart>
      },{
        path: 'payment',
        element: <Payment></Payment>
      },{
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin only
      {
        path: 'allUsers',
        element: <AdminRoutes><AllUser></AllUser></AdminRoutes>
      },
      {
        path: 'addItems',
        element:<AdminRoutes><AddItems></AddItems></AdminRoutes>
      },
      {
        path: 'updateItems/:id',
        element:<AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
        loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'manageItems',
        element:<AdminRoutes><ManageItems></ManageItems></AdminRoutes>
      }
    ]
  }
]);

export default MainRoutes;
