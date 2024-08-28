import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaCartArrowDown } from 'react-icons/fa'; // Asegúrate de tener esta librería instalada

function ComprarProducto() {
    const navigate = useNavigate();

    // Datos de ejemplo para el producto
    const producto = {
        id: 1,
        nombre: 'Juguete para Perro',
        imagen: 'https://m.media-amazon.com/images/I/615xsFxAxLL._AC_SL1200_.jpg', // Imagen por defecto
        precio: '10000',
        estado: 'Activo',
        descripcion: 'Un divertido juguete para perros, ideal para juegos al aire libre.'
    };

    const handleComprar = () => {
        // Mostrar mensaje de inicio de sesión o registro
        const confirmacion = window.confirm('Debes iniciar sesión o registrarte para comprar este producto. ¿Deseas iniciar sesión o registrarte?');
        if (confirmacion) {
            // Redirigir a la página de login o registro
            navigate('/login'); // Puedes redirigir a /register si prefieres
        } else {
            // Cancelar la compra
            console.log('Compra cancelada');
        }
    };

    const handleShow = () => {
        // Lógica para mostrar el carrito
        console.log('Mostrar carrito');
    };

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">OmegaShop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Inicio Sesión</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Registro</Link>
                            </li>
                        </ul>
                        <span className="navbar-text" onClick={handleShow}>
                            <FaCartArrowDown size={30} />
                        </span>
                    </div>
                </div>
            </nav>

            <div className="container mt-5 pt-5">
                <h3 className="text-center mb-4">Comprar Producto</h3>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={producto.imagen} className="img-fluid rounded-start" alt={producto.nombre} />
                                </div>
                                <div className="col-md-6 d-flex flex-column justify-content-center">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{producto.nombre}</h5>
                                        <p className="card-text"><strong>Precio:</strong> ${producto.precio}</p>
                                        <p className="card-text"><strong>Estado:</strong> {producto.estado}</p>
                                        <p className="card-text"><strong>Descripción:</strong> {producto.descripcion}</p>
                                        <div className="text-center">
                                            <button className="btn btn-primary" onClick={handleComprar}>Comprar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComprarProducto;
