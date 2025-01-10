import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Login from "./Login";

export default function ProtectRouter({ children }: { children: any }) {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) return <div>Loading...</div>;
  return isAuthenticated ? children : <Login />;
}
