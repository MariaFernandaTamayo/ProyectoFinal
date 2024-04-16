import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav className="navbar">
      <h1>Twitter Clone</h1>
      <ul>
        <li>Inicio</li>
        <li>Explorar</li>
        <li>Notificaciones</li>
        <li>Mensajes</li>
        {isLoggedIn && <li onClick={handleLogout}>Cerrar Sesión</li>}
      </ul>
    </nav>
  );
}

export default Navbar;