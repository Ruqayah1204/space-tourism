import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
 

const Layout = () => {
    const location = useLocation();

    let backgroundImg = "";

    if (location.pathname === "/") {
        backgroundImg ="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop";
    } else if (location.pathname === "/destination") {
        backgroundImg = "bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop";
    } else if (location.pathname === "/crew") {
        backgroundImg = "bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop";
    } else if (location.pathname === "/technology") {
        backgroundImg = "bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop";
    }




    return (
        <div className={`min-h-screen bg-cover bg-fixed bg-center bg-no-repeat ${backgroundImg} text-white pt-6`}>
            <Navbar/>
            <main>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout;