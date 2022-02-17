import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from "./template/pages/Login";
import Home from "./template/pages/Home";
import { AuthProvider, AuthContext } from './Auth';

const AppRoutes = () =>{
    const Private = ({children}) =>{
        const { authenticated } = useContext(AuthContext);
        if(!authenticated){
            return <Navigate to="/login"/>
        } 
        return children;
    }

    return(
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                </Routes>
                <Routes>
                    <Route exact path="/" element={<Private><Home /></Private>} />
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes