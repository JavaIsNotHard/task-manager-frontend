import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

function Home() {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return <h1> Home Route </h1>
}

export default Home;