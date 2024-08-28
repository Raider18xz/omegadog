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
import Editarproducto from './pages/editarproducto';
import ComprarProducto from './pages/comprarproducto'; // Importa la nueva vista

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
                <Route path="/editarproducto/:id" element={<Editarproducto />} />
                <Route path="/comprarproducto" element={<ComprarProducto />} />



            </Routes>
        </Router>
    );
}

export default App;
