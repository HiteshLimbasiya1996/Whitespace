import React from 'react'
// import Navbar from './Component/Navbar'
// import Footer from './Component/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
function App() {
  return (
    <div>     
      <BrowserRouter>
      {/* <Navbar /> */}
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  )
}

export default App
