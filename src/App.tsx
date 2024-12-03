import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import MSidebar from "./components/MSidebar";
import HomeSection from "./components/HomeSection";

function App() {
  return (
    <div className="bg-white h-screen relative">
      <Navbar />
      <MSidebar />
      <HomeSection />
    </div>
  );
}

export default App;
