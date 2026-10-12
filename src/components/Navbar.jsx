import { Link, NavLink } from "react-router-dom";
function Navbar(){
    const getLinkClass=({isActive}) =>
        `rounded-md px-3 py-2 transition ${isActive ? "bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-200"}`;
    return(
        <nav className="flex flex-wrap items-center justify-between gap-4 border-b bg-white p-4">
            <Link to="/" className="text-3xl font-bold text-blue-600">
            Task Manager
            </Link>
            <div className="flex flex-wrap gap-2">
                <NavLink to="/" className={getLinkClass}>Home</NavLink>
                <NavLink to="/tasks" className={getLinkClass}>Tasks</NavLink>
                <NavLink to="/about" className={getLinkClass}>About</NavLink>
            </div> 
        </nav>
    )
}
export default Navbar;