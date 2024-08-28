import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Registrar los componentes de Chart.js necesarios
ChartJS.register(Title, Tooltip, Legend, ArcElement);

function Estadisticas() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    // Datos de ejemplo para la gráfica de pastel
    const data = {
        labels: ['Juguete para Perro', 'Comida para Gato', 'Collar para Perro'],
        datasets: [
            {
                data: [1200, 1500, 800], // Cantidad vendida de cada producto
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores para cada segmento
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.label || '';
                        if (context.parsed !== null) {
                            label += `: ${context.parsed.toLocaleString()}`;
                        }
                        return label;
                    },
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
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
                                    <a className="nav-link" href="#" onClick={() => navigate('/hometienda')}>Inicio</a>
                                </li>
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
                <h3>Estadísticas</h3>
                <div className="kpi-statistics">
                    <div className="kpi">
                        <h4>Inventario</h4>
                        <p>150 productos</p>
                    </div>
                    <div className="kpi">
                        <h4>Productos Vendidos</h4>
                        <p>1,200 unidades</p>
                    </div>
                    <div className="kpi">
                        <h4>Ganancias</h4>
                        <p>$24,000</p>
                    </div>
                    <div className="pie-chart mt-5" style={{ height: '400px', position: 'relative' }}>
                        <h4 className="text-center">Productos Más Vendidos</h4>
                        <Pie data={data} options={options} />
                        <div className="text-center mt-3">
                            <p><strong>Productos Vendidos:</strong> Los datos muestran la cantidad vendida de los productos más populares.</p>
                            <p><strong>Ganancias:</strong> Las ganancias totales generadas por los productos vendidos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Estadisticas;
