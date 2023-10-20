import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomeAdmi from "./Pages/HomeAdmin";
import GestionUsuarios from "./Pages/GestionUsuarios";
import HomeUsuario from './Pages/HomeUsuario';
import Login from './Pages/Login';
import PerfilAdmin from './Pages/PerfilAdmin';
import PerfilUsuario from './Pages/PerfilUsuario';
import Registro from './Pages/Registro.JSX';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeAdmi />} />
      <Route path='/GestionUsuarios' element={<GestionUsuarios />} />
      <Route path='/Home/Usuario' element={<HomeUsuario />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Perfil/Administrador' element={<PerfilAdmin />} />
      <Route path='/Perfil/Usuario' element={<PerfilUsuario />} />
      <Route path='/Registro' element={<Registro/>} />
    </Routes>
  )
}

export default App
