import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Components/Login/LoginButton";
import LogoutButton from "./Components/Login/LogoutButton";

function App() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container mx-auto ">
      <LoginButton />
      <LogoutButton />
      {isAuthenticated && (
        <div>
          <img src={user?.picture} alt={user?.name} />
          <h2>{user?.name}</h2>
          <p>{user?.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;
