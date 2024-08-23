import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();
    const [role, setRole] = useState('usuario'); // Estado para almacenar el rol seleccionado

    const handleSubmit = (event) => {
        event.preventDefault();
        if (role === 'usuario') {
            navigate('/'); // Redirige al home de usuario
        } else if (role === 'tienda') {
            navigate('/hometienda'); // Redirige al home de tienda
        }
    };

    const handleRegister = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <div className="login-container">
            <div className="card p-4 shadow-lg bg-transparent">
                <h1 className="card-title text-center text-danger-emphasis mb-4">OmegaShop</h1>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Correo electrónico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="ejemplo@correo.com"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Escoja su rol</label>
                        <select
                            className="form-select"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                        >
                            <option value="usuario">Usuario</option>
                            <option value="tienda">Tienda</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
                <div className="mt-3 text-center text-primary">
                    <p>No tienes cuenta?</p>
                    <button className="btn btn-secondary w-100" onClick={handleRegister}>Regístrate</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
