import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import NavLinks from "./NavLink";
import { useState } from "react";
import { Button } from "./ui/button";
import MenuIcon from "../assets/shared/icon-hamburger.svg"
import CloseIcon from "../assets/shared/icon-close.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [closed, setClosed] = useState(false)

    const handleClose = () => {
        setClosed(true);
        setTimeout(() => {
            setIsOpen(false);
            setClosed(false);
        }, 500);

    }

    return (
        <header className="bg-beige-500 font-barlow-condensed uppercase text-white">
            <nav className="container mx-auto flex items-center justify-between py-8 px-8 lg:pl-8 lg:py-0 lg:pr-0">
                <h1 className="sr-only">Space tourism</h1>
                <Link to="/">
                    <img src={Logo} alt="space tourism logo" />
                </Link>

                <div className="hidden lg:block flex-1 w-full relative -right-20 z-10 px-10">
                    <hr className="border-t border-white/30" />
                </div>


                <ul className="hidden md:flex gap-8 bg-white/5 backdrop-blur-md pl-28 lg:pl-32 pr-8 ">
                    <NavLinks/>
                </ul>

                <Button 
                    variant="ghost" 
                    className="flex md:hidden hover:bg-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <img src={MenuIcon} alt="menu-icon" className="w-10 h-10" />
                </Button>

                {/* Mobile nav */}

                {isOpen && (
                    <ul className={`md:hidden fixed top-0 bg-white/10 right-0 h-screen sm:w-1/2 backdrop-blur-md py-16 px-10 flex flex-col gap-12 ${closed ? "animate-slide-out" : "animate-slide-in"} `}>
                        <Button 
                            variant="ghost" 
                            className="flex lg:hidden hover:bg-none self-end mb-10"
                            onClick={handleClose}
                        >
                            <img src={CloseIcon} alt="menu-icon" className="w-10 h-10" />
                        </Button>
                        <NavLinks/>
                    </ul>
                )}


            </nav>
            
        </header>
    )
}

export default Navbar;