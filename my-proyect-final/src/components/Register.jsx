// Register.jsx
import React, { useState } from 'react';
import './Register.css'; // Importa los estilos del componente de registro

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podríamos realizar la validación de los datos de registro
    // Por simplicidad, asumiremos que los datos son válidos y procederemos con el registro
    onRegister(username); // Llamamos a la función de registro y pasamos el nombre de usuario
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Registro</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input
            type="text"
            className="register-input"
            placeholder="Nombre de usuario"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="register-input"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="register-input"
            placeholder="Contraseña"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;