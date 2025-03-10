import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import About from "./components/About";
import Career from "./components/Career";
import Events from "./components/Events";
import Products from "./components/Products";
import Support from "./components/Support";
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}
export default App
