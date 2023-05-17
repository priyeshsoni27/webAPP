import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Cart from '../components/Cart'
import Home from '../components/Home'
import Header from '../components/Header'
import Login from "../components/Login"

const Routing = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/" element={<Header/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>   
  )
}

export default Routing;