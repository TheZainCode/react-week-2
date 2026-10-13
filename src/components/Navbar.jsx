import  { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, NavLink } from "react-router-dom";
function Navbar(){
    const { user, setUser } = useContext(UserContext);
    const getLinkClass=({isActive}) =>
        `rounded-md px-3 py-2 transition ${isActive ? "bg-blue-600 text-white" : "bg-gray-700 hover:bg-gray-200"}`;
    function handleUpdateName(){
        setUser((prevUser) =>({
            ...prevUser,
            name: "React Developer"
    }));
    }
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
            <div className="flex items-center gap-2">
                <div className="font-semibold text-amber-400">
               {user ? `Welcome, ${user.name}!` : "Welcome, Guest!"}
               </div>
               <button onClick={handleUpdateName} className="bg-blue-600 text-white font-bold  rounded-md px-3 py-2 cursor-pointer">Change Name</button>
            </div>
        </nav>
    )
}
export default Navbar;