import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">OmegaShop Admin</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Opciones</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                              
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => handleNavigation('/resumenv')}>Resumen de Ventas</a>
                                </li>
                    
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => handleNavigation('/estadisticas')}>Estadísticas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => handleNavigation('/productos')}>Gestión de Productos</a>
                                </li>             
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => handleNavigation('/crearproductos')}>Crear Productos</a>
                                </li>
                              
                            </ul>
                         
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5 pt-5">
                <h1 className="text-center mb-4">Bienvenido a OmegaShop</h1>
                <p className="text-center">Seleccione lo que quiere hacer usando el menú.</p>
            </div>
        </>
    );
}

export default Home;
