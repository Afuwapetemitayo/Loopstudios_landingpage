import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import About from './pages/About'
import Career from './pagess/Career'
import Events from './pages/Events'
import Products from './pages/Products'
import Support from './pages/Support'
import './App.css'


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/events" element={<Events />} />
          <Route path="/products" element={<Products />} />
          <Route path="/support" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )
}
export default App
