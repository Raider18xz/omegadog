import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AgregarProducto() {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState(null);
    const [mensaje, setMensaje] = useState('');
    const navigate = useNavigate();

    const categorias = [
        'Juguete',
        'Salud',
        'Ropa',
        'Accesorios',
        'Comida',
        'Higiene'
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para agregar el producto
        // Aquí se puede realizar la solicitud para agregar el producto

        // Mostrar mensaje de éxito
        setMensaje('Producto agregado exitosamente');

        // Redirigir después de un breve periodo para que el mensaje sea visible
        setTimeout(() => {
            navigate('/productos');
        }, 2000);
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
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card p-4">
                            <h3 className="text-center mb-4">Agregar Nuevo Producto</h3>
                            {mensaje && <div className="alert alert-success">{mensaje}</div>}
                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-md-12">
                                    <label htmlFor="nombre" className="form-label">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nombre"
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="descripcion"
                                        value={descripcion}
                                        onChange={(e) => setDescripcion(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="precio" className="form-label">Precio</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="precio"
                                        value={precio}
                                        onChange={(e) => setPrecio(e.target.value)}
                                    />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="categoria" className="form-label">Categoría</label>
                                    <select
                                        id="categoria"
                                        className="form-select"
                                        value={categoria}
                                        onChange={(e) => setCategoria(e.target.value)}
                                    >
                                        <option value="">Seleccione una categoría</option>
                                        {categorias.map((cat, index) => (
                                            <option key={index} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="imagen" className="form-label">Imagen</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="imagen"
                                        onChange={(e) => setImagen(e.target.files[0])}
                                    />
                                </div>
                                <div className="col-12 text-center mt-3">
                                    <button type="submit" className="btn btn-primary">Agregar Producto</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AgregarProducto;
