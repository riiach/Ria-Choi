import React, { forwardRef } from "react";
import { NavLink, useLocation } from 'react-router-dom';

const NavbarSide = forwardRef(function NavbarSide(props, ref) {
    const location = useLocation();

    return (
        <nav
        ref={ref}
        className="
        group
        fixed top-0 right-0 z-[9999] mt-4 p-8 pt-4
        text-sm sm:text-base
        bg-transparent hover:bg-black rounded-xl
        transition-colors duration-300 ease-out
        ">
            <p className="text-xl text-white cursor-pointer text-right mb-4">
                menu
            </p>

            <div className="
            flex flex-col gap-2 z-50 text-white/40 text-right text-xl
            opacity-0 translate-y-2
            transition-all duration-300 ease-out
            group-hover:opacity-100 group-hover:translate-y-0
            pointer-events-none group-hover:pointer-events-auto
            "
            >
                <NavLink to="/" className="group/home hover:text-white" >Home</NavLink>
                {location.pathname === '/about' ? "" : <NavLink to="/about" className="group/about hover:text-white">About</NavLink>}
                <NavLink to="/skills" className="group/skills hover:text-white">Skills</NavLink>
                <NavLink to="/projects" className="hover:text-white">Projects</NavLink>
                <NavLink to="/certification" className="hover:text-white">Certification</NavLink>
                <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
            </div>
        </nav>
    );
});


export default NavbarSide;
