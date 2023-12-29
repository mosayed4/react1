import React from 'react';
import './App.css';
import { Nav } from './companats/Nav';

import { Card } from './companats/Card';
import { Single } from './companats/Single';
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './companats/Home';
import { Products } from './companats/Products';


function App() {
  return (
    <div className="App">
     <Nav/>


    <Routes>
    <Route path="/"element = {<Home/>}/>
    <Route paht="products" element={<Products/>}/>
    <Route path="products/:id" element={<Single/>}/>

    </Routes>
   </div>
  );   
}

export default App;
 