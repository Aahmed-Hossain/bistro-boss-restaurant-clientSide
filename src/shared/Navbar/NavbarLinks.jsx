import { NavLink } from "react-router-dom";


const NavbarLinks = () => {
    return (
        <ul className="flex gap-4 text-md font-bold">
  <NavLink to="/" className={({ isActive }) => isActive ? 'border-b-2 border-[#F59E0B] text-[#F59E0B] hover:text-[#F59E0B]' : 'hover:text-[#F59E0B]'}>Home</NavLink>
  <NavLink to="/menu" className={({ isActive }) => isActive ? 'border-b-2 text-[#F59E0B] border-[#F59E0B]' : 'hover:text-[#F59E0B]'}>Menu</NavLink>
  <NavLink to="/order/salad" className={({ isActive }) => isActive ? 'border-b-2 text-[#F59E0B] border-[#F59E0B]' : 'hover:text-[#F59E0B]'}>Order Food</NavLink>
  <NavLink to="/login" className={({ isActive }) => isActive ? 'border-b-2 text-[#F59E0B] border-[#F59E0B]' : 'hover:text-[#F59E0B]'}>Login</NavLink>
</ul>

    );
};

export default NavbarLinks;