import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar2";
import Login from "./components/Login";



import AddProduct from "./components/AddProduct";
import Singup from "./components/Singup";
import ManageProducts from "./components/ManageProduct";
import ListProduct from "./components/ListProduct";
import { UserProvider } from "./UserContext";
import Find from "./components/Find";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Login />} path="Login" />
            <Route element={<Singup />} path="signup" />
          
            <Route element={<AddProduct />} path="Addproduct" />
            <Route element={<ManageProducts />} path="Manageproduct" />
            <Route element={<ListProduct />} path="browse" />
            <Route element={<Find />} path="browse/:category" />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
