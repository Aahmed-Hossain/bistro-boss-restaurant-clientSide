import {
  FaAddressCard,
  FaBook,
  FaBookMedical,
  FaCalendar,
  FaCartShopping,
  FaEnvelope,
  FaHouseMedical,
  FaList,
  FaSailboat,
  FaUser,
  FaUtensils,
} from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const DashboardLayout = () => {
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-1/6 bg-red-300 min-h-screen">
        <ul className="menu p-2 font-semibold text-xl space-y-2 ">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHouseMedical />
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils />
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList />
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBooking"}>
                  <FaBook />
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUser />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHouseMedical />
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/reservation"}>
                  <FaCalendar />
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaCartShopping />
                  My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                  <FaAddressCard />
                  Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/paymentHistory"}>
                  <FaBookMedical />
                  PaymentHistory
                </NavLink>
              </li>
            </>
          )}
          {/* shared navLinks */}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHouseMedical />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salad"}>
              <FaSailboat />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/contact"}>
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-5/6 bg-red-00">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
