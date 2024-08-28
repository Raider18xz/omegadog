import React from 'react';
import { useNavigate } from 'react-router-dom';

function ListadoDeProductos() {
    const navigate = useNavigate();

    const productos = [
        { id: 1, nombre: 'Juguete para Perro', precio: '$10000', categoria: 'Juguetes', activo: true },
        { id: 2, nombre: 'Comida para Gato', precio: '$2500', categoria: 'Comida', activo: false },
        { id: 3, nombre: 'Collar para Perro', precio: '$1500', categoria: 'Accesorios', activo: true },
    ];

    const handleEdit = (id) => {
        navigate(`/editarproducto/${id}`);
    };

    const handleDelete = (id) => {
        console.log(`Eliminar producto con ID: ${id}`);
    };

    const handleAddProduct = () => {
        navigate('/crearproductos');
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
                <h3>Listado de Productos</h3>
                <button className="btn btn-primary mb-3" onClick={handleAddProduct}>Agregar Nuevo Producto</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Categoría</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.activo ? 'Activo' : 'Inactivo'}</td>
                                <td>
                                    <button className="btn btn-warning me-2" onClick={() => handleEdit(producto.id)}>Editar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListadoDeProductos;
