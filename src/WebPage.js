import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import Bussiness from './Bussiness';
import Ideas from './Ideas';
import Navbar from './Navbar'

function WebPage() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/bussiness' element = {<Bussiness/>}>
       
        </Route>
      </Routes>
      <Routes>
        <Route exact path='/ideas/:id' element = {<Ideas/>}>
            
        </Route>
      </Routes>
      <Routes>
        <Route exact path='/about' element = {<About/>}>
            
        </Route>
      </Routes>
      <Routes>
        <Route exact path='/'>

        </Route>
      </Routes>
    </Router>
  )
}

export default WebPage
