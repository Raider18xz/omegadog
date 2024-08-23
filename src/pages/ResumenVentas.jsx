import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ResumenDeVentas() {
    const navigate = useNavigate();

    // Datos para la gráfica de barras
    const data = {
        labels: ['Ventas Diarias', 'Ventas Semanales', 'Ventas Mensuales'],
        datasets: [
            {
                label: 'Ventas',
                data: [1200, 8500, 32000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)', // Color para Ventas Diarias
                    'rgba(54, 162, 235, 0.2)', // Color para Ventas Semanales
                    'rgba(255, 206, 86, 0.2)'  // Color para Ventas Mensuales
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `$${tooltipItem.raw}`;
                    },
                },
            },
        },
        maintainAspectRatio: false, // Para permitir el ajuste del tamaño
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
                                    <a className="nav-link" href="#" onClick={() => navigate('/resumenv')}>Resumen de Ventas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => navigate('/estadisticas')}>Estadísticas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => navigate('/productos')}>Gestión de Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" onClick={() => navigate('/crearproductos')}>Crear Productos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container mt-5 pt-5">
                <h3>Resumen de Ventas</h3>
                <ul>
                    <li>Ventas Diarias: $1,200</li>
                    <li>Ventas Semanales: $8,500</li>
                    <li>Ventas Mensuales: $32,000</li>
                </ul>
                <div className="mt-5" style={{ height: '300px' }}>
                    <h4>Gráfica de Ventas</h4>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </>
    );
}

export default ResumenDeVentas;
