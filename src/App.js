import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import HomeTienda from './pages/homeTienda';
import ResumenV from './pages/ResumenVentas';
import Estadisticas from './pages/Estadisticas';
import Productos from './pages/Productos';
import CrearProductos from './pages/CrearProducto';


import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/hometienda" element={<HomeTienda />} />
                <Route path="/resumenv" element={<ResumenV />} />
                <Route path="/estadisticas" element={<Estadisticas />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/crearproductos" element={<CrearProductos />} />


            </Routes>
        </Router>
    );
}

export default App;
