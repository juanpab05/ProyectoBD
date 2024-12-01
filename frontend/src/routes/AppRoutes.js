import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthRoutes from './AuthRoutes';
import UserRoutes from './UserRoutes';
import AdminRoutes from './AdminRoutes';

import "./style.css";

const AppRoutes = () => {
    return (
        <div className='Contenedor'>
            <Router>
                <Routes>
                    {AuthRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                    {UserRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                    {AdminRoutes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))}
                    {/* Se puede agregar mas rutas aquí */}
                </Routes>
            </Router>
        </div>
    )
};

export default AppRoutes;
