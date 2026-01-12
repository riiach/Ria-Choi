import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="flex items-center p-4 px-10 py-10 bg-black w-screen h-8 text-sm sm:text-base">
            {/* Left (brand) */}
            <NavLink to="/" className="font-semibold text-white/90">
                Ria Choi
            </NavLink>

            {/* Right (menu) */}
            <div className="ml-auto flex gap-6 text-white/60">
                <NavLink to="/about" className="hover:text-white/90">About</NavLink>
                <NavLink to="/skills" className="hover:text-white/90">Skills</NavLink>
                <NavLink to="/projects" className="hover:text-white/90">Projects</NavLink>
                <NavLink to="/certification" className="hover:text-white/90">Certification</NavLink>
                <NavLink to="/contact" className="hover:text-white/90">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
