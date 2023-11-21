import { NavLink } from "react-router-dom";


const NavbarLinks = () => {
    return (
        <ul className=" flex gap-4 text-md font-bold ">
        <NavLink to="/" className={({ isActive})=> isActive ? 'border-b-2 border-[#FF3811] text-[#FF3811] hover:text-[#FF3811]': 'hover:text-[#FF3811]'}>Home</NavLink>
        <NavLink to="/menu" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>Menu</NavLink>
        <NavLink to="/order/salad" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>Order Food</NavLink>
        <NavLink to="/login" className={({ isActive})=>isActive ? 'border-b-2 text-[#FF3811] border-[#FF3811]': 'hover:text-[#FF3811]'}>Login</NavLink>
        </ul>
    );
};

export default NavbarLinks;