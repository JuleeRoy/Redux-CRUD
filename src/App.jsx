import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
  <HomePage/>
  <Footer/>
   </BrowserRouter>
  
  )
}

export default App