import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/home'
import StartAMatch from './components/startAMatch'
import Scorecard from './components/scorecard'

const App = () => {
  return (
    <div className="inner">
      <BrowserRouter>
      < Navbar/> 
      <Routes>

      <Route path = "/" element ={<Home/>} />
     <Route path = "StartAMatch" element ={<StartAMatch/>} />
     <Route path = "scorecard" element ={<Scorecard/>} />

     



      </Routes>
     <Footer/>
    </BrowserRouter>
    
    </div>
  )
}

export default App
