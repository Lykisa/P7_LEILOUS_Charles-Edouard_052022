import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Login from './routes/Login';
import Signin from './routes/Signin';
import Mur from './routes/Mur';
import Compte from './routes/Compte';
import Create from './routes/Create';
import OnePost from './routes/OnePost'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="signin" element={<Signin />} />
      <Route path="wall" element={<Mur />} />
      <Route path="profile" element={<Compte />} />
      <Route path="creation" element={<Create />} />
      <Route path="/post/:postId" element={<OnePost />} />
    </Routes>
  </BrowserRouter>
);



