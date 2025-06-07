// is-authenticated.js
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useAuthRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    // Redirect logic
    if (!token && location.pathname !== "/login") {
      navigate("/login");
    } else if (token && location.pathname === "/login") {
      navigate("/");
    }
  }, [navigate, location.pathname, token]);
};

export { useAuthRedirect };
