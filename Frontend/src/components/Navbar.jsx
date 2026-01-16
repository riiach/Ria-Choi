import { NavLink, useLocation } from 'react-router-dom';
import { forwardRef } from 'react'

const Navbar = forwardRef(function Navbar(props, ref) {
    const location = useLocation();
    const title =
        location.pathname === '/'
            ? "Ria Choi"
            : location.pathname === '/skills'
            ? "Skills"
            : location.pathname === '/certification'
            ? "Certification"
            : location.pathname === '/projects'
            ? "Projects"
            : "Ria Choi";

    return (
        <nav className="flex items-center
        p-4 md:p-10 py-8 md:py-10
        bg-black w-screen h-8
        text-sm sm:text-base" ref={ref}>
            {/* Left (brand) */}
            <NavLink to="/" className="text-base sm:text-base md:text-2xl text-white/90">
                {title}
            </NavLink>

            {/* Right (menu) */}
            <div className="ml-auto flex gap-2 sm:gap-2 md:gap-4 lg:gap-6 text-white/60">
                {location.pathname === '/' ? "" : <NavLink to="/" className="hover:text-white/90">Home</NavLink>}
                <NavLink to="/about" className="hover:text-white/90">About</NavLink>
                <NavLink to="/skills" className="hover:text-white/90">Skills</NavLink>
                <NavLink to="/projects" className="hover:text-white/90">Projects</NavLink>
                <NavLink to="/certification" className="hover:text-white/90">Certification</NavLink>
                <NavLink to="/contact" className="hover:text-white/90">Contact</NavLink>
            </div>
        </nav>
    );
});

export default Navbar;
