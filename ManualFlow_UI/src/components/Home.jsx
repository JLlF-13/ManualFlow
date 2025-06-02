import React, { useState, useEffect, useTransition, useContext } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return(
    <>
       <section className="min-h-screen flex flex-col items-center justify-center text-white p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold mb-4">Welcome to Manual Flow</h1>

      <p className="text-lg text-gray-300 mb-6">
        Where you can find simple and direct manuals
      </p>

      
      <Link to={'/list/manual'}><button className="btn btn-primary bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg shadow-md">
        Explore the manuals
      </button></Link>
      
    </section> 
    </>
    )
}