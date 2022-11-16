import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Push from './pages/push/Push'
import Pull from './pages/pull/Pull'
import Leg from './pages/leg/Leg'
import Upper from './pages/upper/Upper'
import Lower from './pages/lower/Lower'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Plan from './dayLayout/Plan'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/push' element={<Push />} />
        <Route path='/push/plan' element={<Plan />} />
        <Route path='/pull' element={<Pull />} />
        <Route path='/leg' element={<Leg />} />
        <Route path='/upper' element={<Upper />} />
        <Route path='/lower' element={<Lower />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App