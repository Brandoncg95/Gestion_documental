import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/dashboard/Home";
import GestionUsuarios from "./Pages/GestionUsuarios";
import HomeUsuario from './Pages/HomeUsuario';
import Login from './Pages/Login';
import PerfilAdmin from './Pages/PerfilAdmin';
import PerfilUsuario from './Pages/PerfilUsuario';
import Registro from './Pages/Registro.JSX';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/GestionUsuarios' element={<GestionUsuarios />} />
      <Route path='/Home/Usuario' element={<HomeUsuario />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Perfil/Administrador' element={<PerfilAdmin />} />
      <Route path='/Perfil/Usuario' element={<PerfilUsuario />} />
      <Route path='/Registro' element={<Registro/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
