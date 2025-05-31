import { Routes, Route } from "react-router-dom";
import About from "../components/About"
import Home from "../components/Home"
import Product from "../components/Product"
import Services from "../components/Services"

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
    </Routes>
  )
}

export default Mainroutes
