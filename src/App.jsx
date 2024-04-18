import React, { useState, useEffect } from 'react';
import './App.css';
import appFirebase from './credenciales.js';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Importa Navigate junto con Routes

import Login from './components/Login';
import Home from './components/Home';
import Producto from './components/Producto.jsx';

import background from "./assets/fondo.jpg";

function App() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const auth = getAuth(appFirebase);

    onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div style={{ backgroundImage: `url(${background})` }}>
        {/* Utiliza los Routes para manejar las rutas */}
        <Routes>
          {/* Ruta para el componente Home */}
          <Route path="/" element={usuario ? <Home correoUsuario={usuario.email} /> : <Navigate to="/login" />} />
          {/* Ruta para el componente Login */}
          <Route path="/login" element={<Login />} />
          {/* Ruta para el componente Producto */}
          <Route path="/producto" element={<Producto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;