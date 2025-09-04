import { NavLink } from "react-router-dom"
import clsx from "clsx"

const NavLinks = () => {
    const activeList = ({isActive}:{isActive : boolean}) => 
        clsx("tracking-[2.7px] md:py-9 block lg:inline-block transition-text border-transparent duration-300", {
            "md:border-b-4 md:border-r-0 border-white border-r-4": isActive,
            "md:hover:border-b-4 md:hover:border-r-0 hover:border-r-4 hover:border-white/30": !isActive
        }
    )
    
    return (
        <>
            <li>
                <NavLink to="/" className={activeList}><span className="font-bold">00</span> Home</NavLink>
            </li>
            <li>
                <NavLink to="/destination" className={activeList}><span className="font-bold">01</span> Destination</NavLink>
                </li>
            <li>
                <NavLink to="/crew" className={activeList}><span className="font-bold">02</span> Crew</NavLink>
            </li>
            <li>
                <NavLink to="/technology" className={activeList}><span className="font-bold">03</span> Technology</NavLink>
            </li>
        </>
    )
}

export default NavLinks;