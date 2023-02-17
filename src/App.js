import React from 'react';
import './App.css';

//Component
import NavBar from './Components/NavBar';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import Login from './Components/Login';
import Signup from './Components/Signup';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
          <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
