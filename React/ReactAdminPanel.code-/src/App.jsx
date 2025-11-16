import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/admin-components/Navbar";
import Products from "./components/Products";
import Deshboard from "./components/Deshboard";
import Carts from "./components/Carts";
import Users from "./components/Users";
import './index.css' 

export default function App() {
  return (



  
        <Routes>

          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/carts" element={<Carts/>} />
          <Route path="/settings" element={<h1>Settings Page</h1>} />
          <Route path="/" element={<Deshboard/>} />
        </Routes>


  );
}
