import { Routes, Route } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import "react-icons"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"



const App = () => {
  return (
    <>
    < ShoppingCartProvider>
   
    <Container className="  mb-4">
      <Row>
    <Navbar/>
      <Routes>
        
        <Route path="/" element ={<Home/>} />
        <Route path="/store" element ={<Store/>} /> 
        <Route path="/about" element ={<About/>} />

      </Routes>
      </Row>
    </Container>
    
    
    </ ShoppingCartProvider>
    
    </>
  )
}

export default App 