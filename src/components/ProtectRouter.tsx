import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "./Login";
import Navbar from "./Navbar";

export default function ProtectRouter({ children }: { children: any }) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading)
    return (
      <div>
        <Navbar />
        <h1>Loading...</h1>
      </div>
    );
  return isAuthenticated ? children : <Login />;
}
