import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    const handleRegister = () => {
        navigate('/register'); // Redirige a la página de registro
    };

    return (
        <div className="login-container">
            <div className="card p-4 shadow-lg">
                <h1 className="card-title text-center mb-4">OmegaShop</h1>
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
                    <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                </form>
                <div className="mt-3 text-center">
                    <p>No tienes cuenta?</p>
                    <button className="btn btn-secondary w-100" onClick={handleRegister}>Regístrate</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
