import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          credentials: "include",
        });

        if (!response.ok) {
          setStatus("unauthenticated");
          return;
        }

        const data = await response.json();

        setStatus(data.authenticated ? "authenticated" : "unauthenticated");
      } catch {
        setStatus("unauthenticated");
      }
    };

    checkAuth();
  }, []);

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        Checking session...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
