import { Fa4, FaAddressCard, FaBookMedical, FaCalendar, FaCartShopping, FaDAndD, FaHouseMedical } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-1/4 bg-red-300 min-h-screen">
        <ul className="menu p-3 font-semibold text-xl space-y-2 ">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHouseMedical/>
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
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAddressCard />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaBookMedical />
              Bookings
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="w-3/4 bg-yellow-300">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
