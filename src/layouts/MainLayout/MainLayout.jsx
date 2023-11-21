import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Navbar from "../../shared/Navbar/Navbar";


const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/register') || location.pathname.includes('/login')
    return (
        <div>
           {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;