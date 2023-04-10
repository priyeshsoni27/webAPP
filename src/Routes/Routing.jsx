import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Cart from '../components/Cart'
import Home from '../components/Home'
import Header from '../components/Header'

const Routing = () => {
  return (
    
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/" element={<Header/>}/>
        </Routes>
        </BrowserRouter>   
  )
}

export default Routing;