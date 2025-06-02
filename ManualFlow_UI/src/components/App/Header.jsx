import React from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-black/30 backdrop-blur-lg shadow-xl rounded-full p-4 z-50 flex items-center justify-between">
      <div className="text-white text-xl font-bold px-4">Manual Flow</div>

      <nav className="flex gap-4 px-4">
        <Link
          to="/"
          className={`btn ${
            location.pathname === "/" ? "bg-purple-500 hover:bg-purple-700" : "bg-gray-500 hover:bg-gray-700"
          } text-white`}
        >
          <i className="fa-solid fa-house"></i> Home
        </Link>
        
        <Link
          to="/list/manual"
          className={`btn ${
            location.pathname === "/list/manual" ? "bg-purple-500 hover:bg-purple-700" : "bg-gray-500 hover:bg-gray-700"
          } text-white`}
        >
          <i className="fa-solid fa-list-ul"></i> List
        </Link>
      </nav>
    </header>
  );
};
