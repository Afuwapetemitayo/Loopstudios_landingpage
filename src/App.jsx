import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Index from './pages/Index.jsx'
import About from './pages/About.jsx'
import Career from './pages/Career.jsx'
import Events from './pages/Events.jsx'
import Products from './pages/Products.jsx'
import Support from './pages/Support.jsx'
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
