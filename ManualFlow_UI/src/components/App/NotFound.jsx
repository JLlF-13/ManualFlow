import React, { useState, useEffect, useTransition, useContext } from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return(
    <>
        <section className="min-h-screen flex flex-col items-center justify-center text-white p-8 bg-base-200">
            <p className="text-lg text-gray-300 mb-6">
            Are you lost, let me help you go back
            </p>
    
            
            <Link to={'/'}><button className="btn btn-primary bg-purple-500 hover:bg-purple-400 text-white px-6 py-3 rounded-lg shadow-md">
            Back to Home page
            </button></Link>
        </section>
    </>
    )
}