
import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = Boolean(user);

  function login() {
    setUser({
      name: "Zain",
      role: "Frontend Developer",
    });
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated  }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
