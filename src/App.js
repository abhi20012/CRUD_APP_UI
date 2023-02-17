import React from 'react';
import './App.css';

//Component
import NavBar from './Components/NavBar';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import Register from './Components/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditUser from './Components/EditUser';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/all' element={<AllUser />} />
          <Route path='/add' element={<AddUser />} />
          <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
