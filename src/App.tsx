import React from "react";
import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/Navbar";
import MSidebar from "./components/MSidebar";
import HomeSection from "./components/HomeSection";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-white h-screen relative overflow-scroll  ">
      <Navbar />
      <MSidebar />
      <Outlet />
    </div>
  );
}

export default App;
