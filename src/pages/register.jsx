import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('cliente');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (role === 'admin') {
            navigate('/admin-home'); // Redirige al home de admin
        } else {
            navigate('/home'); // Redirige al home de cliente
        }
    };

    const handleBack = () => {
        navigate('/'); // Redirige al login
    };

    return (
        <div className="register-container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg">
                <h1 className="card-title text-center mb-4">OmegaShop</h1>
                <h2 className="text-center mb-4">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="ejemplo@correo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Rol</label>
                        <select
                            id="role"
                            className="form-select"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="cliente">Cliente</option>
                            <option value="admin">Administrador</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </form>
                <button className="back-button mt-3" onClick={handleBack}>Volver</button>
            </div>
        </div>
    );
}

export default Register;
