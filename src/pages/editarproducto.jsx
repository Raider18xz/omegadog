import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditarProducto() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Datos de ejemplo para el producto
    const [producto, setProducto] = useState({
        id: 1,
        nombre: 'Juguete para Perro',
        precio: '10000',
        categoria: 'Juguetes',
        estado: 'Activo'
    });

    const [nuevoPrecio, setNuevoPrecio] = useState(producto.precio);
    const [nuevoEstado, setNuevoEstado] = useState(producto.estado);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Mostrar mensaje de confirmación
        const confirmacion = window.confirm('¿Seguro que quieres editar este producto?');
        if (confirmacion) {
            // Aquí iría la lógica para guardar los cambios
            console.log('Producto editado:', {
                ...producto,
                precio: nuevoPrecio,
                estado: nuevoEstado
            });

            // Redirigir a la lista de productos
            navigate('/productos');
        }
    };

    return (
        <div className="container mt-5 pt-5">
            <h3>Editar Producto</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" value={producto.nombre} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">Categoría</label>
                    <input type="text" className="form-control" id="categoria" value={producto.categoria} disabled />
                </div>
                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">Precio</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="precio" 
                        value={nuevoPrecio} 
                        onChange={(e) => setNuevoPrecio(e.target.value)} 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select 
                        className="form-control" 
                        id="estado" 
                        value={nuevoEstado} 
                        onChange={(e) => setNuevoEstado(e.target.value)}
                    >
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
        </div>
    );
}

export default EditarProducto;
