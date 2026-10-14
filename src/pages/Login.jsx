import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
function Login(){
    const { user, login, logout, isAuthenticated }= useContext(AuthContext);
    return(
        <div className="flex flex-wrap p-6">
        {isAuthenticated ? (
            <section className="flex flex-col flex-wrap gap-4 items-center justify-center text-center">
            <h2 className="text-3xl text-blue-600 font-bold">Welcome,{user.name} </h2>
            <button onClick={logout} className="px-3 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-400 cursor-pointer">Logout</button>
            </section>
    ) : (
        <button onClick={login} className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-400 cursor-pointer">Login</button>
    )
        }
        </div>
    )
}
export default Login;