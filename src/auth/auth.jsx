import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getUserByDUI } from "../firebase/api";

const roleList = [
  {
    name: "Rodrigo",
    info: "un poco de mi info personal",
    role: "admin",
  },
  {
    name: "Ricardo",
    info: "un poco de mi info personal",
    role: "user",
  },
];

const AuthContext = createContext();

function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const login = async ({ userName, from }) => {
    from = from || "/MyProjects";

    try {
      const userSnapshot = await getUserByDUI("User", userName);

      if (userSnapshot.length > 0) {
        console.log("El usuario existe");
        const userData = userSnapshot[0];
        console.log(userData);
        setUser(userData); // ahora estamos guardando todo el objeto de usuario, no solo el rol

        // Redirección basada en el rol
        if (userData.Role === "admin") {
          navigate("/dashboard");
        } else if (userData.Role === "user") {
          navigate("/myProjects");
        } else {
          console.error("Rol desconocido");
        }
      } else {
        console.error("Usuario no encontrado");
      }
    } catch (error) {
      console.error(`Error al obtener el usuario: ${error}`);
    }
  };
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const auth = useContext(AuthContext);
  return auth;
}

function CheckRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user || auth.user.Role !== "user") {
    return <Navigate to="/publicLogin" state={{ from: location }} replace />;
  }

  return children;
}

function CheckAdminRoute({ children }) {
  const auth = useAuth();
  const location = useLocation();
  if (!auth.user || auth.user.Role !== "admin") {
    return <Navigate to="/adminLogin" state={{ from: location }} replace />;
  }

  return children;
}

export { AuthProvider, useAuth, CheckRoute, CheckAdminRoute };
