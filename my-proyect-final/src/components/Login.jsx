// Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Importamos los estilos del componente de inicio de sesión

const Login = ({ onLogin, onRegisterClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podríamos realizar la autenticación con el servidor
    // Por simplicidad, asumiremos que el inicio de sesión es exitoso y llamaremos a la función onLogin
    onLogin(username);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="text"
            className="login-input"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="login-input"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="login-btn">Iniciar sesión</button>
      </form>
      {/* Sección para el enlace de registro */}
      <div className="register-link">
        <p>¿Aún no tienes cuenta? <span className="register-here" onClick={onRegisterClick}>Regístrate aquí</span></p>
      </div>
    </div>
  );
};

export default Login;