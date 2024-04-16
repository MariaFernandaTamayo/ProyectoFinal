// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TweetForm from './components/TweetForm';
import TweetList from './components/TweetList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [tweets, setTweets] = useState([]);
  const [showLogin, setShowLogin] = useState(true); // Estado para controlar qué formulario mostrar
  const [showRegister, setShowRegister] = useState(false); // Estado para controlar si mostrar el formulario de registro

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true); // Establecer como autenticado si hay un nombre de usuario almacenado
      setShowLogin(false); // Ocultar el formulario de inicio de sesión si el usuario está autenticado
    }

    const storedTweets = localStorage.getItem('tweets');
    if (storedTweets) {
      setTweets(JSON.parse(storedTweets));
    }
  }, []);

  const handleRegister = (name) => {
    setUsername(name);
    setShowLogin(true); // Mostrar el formulario de inicio de sesión después del registro
    setShowRegister(false); // Ocultar el formulario de registro después del registro
  };

  const handleLogin = (name) => {
    setUsername(name);
    setIsLoggedIn(true); // Establecer como autenticado después del inicio de sesión
    localStorage.setItem('username', name);
    setShowLogin(false); // Ocultar el formulario de inicio de sesión después del inicio de sesión
    setShowRegister(false); // Ocultar el formulario de registro después del inicio de sesión
  };

  const handleLogout = () => {
    setUsername('');
    setIsLoggedIn(false);
    localStorage.removeItem('username');
    setShowLogin(true); // Mostrar el formulario de inicio de sesión después de cerrar la sesión
  };

  const handleTweetSubmit = (tweet) => {
    const updatedTweets = [...tweets, tweet];
    setTweets(updatedTweets);
    localStorage.setItem('tweets', JSON.stringify(updatedTweets));
  };

  const handleRegisterClick = () => {
    // Al hacer clic en "Regístrate aquí", mostrar el formulario de registro y ocultar el formulario de inicio de sesión
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      {showLogin && (
        <Login onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
      )}
      {showRegister && (
        <Register onRegister={handleRegister} />
      )}
      {!showLogin && isLoggedIn && !showRegister && (
        <>
          <h2>Bienvenido {username}</h2>
          <TweetForm onTweetSubmit={handleTweetSubmit} username={username} />
          <TweetList tweets={tweets} onTweetEdit={setTweets} onTweetDelete={setTweets} />
        </>
      )}
    </div>
  );
}

export default App;