import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Push from './pages/push/Push'
import Pull from './pages/pull/Pull'
import Leg from './pages/leg/Leg'
import Upper from './pages/upper/Upper'
import Lower from './pages/lower/Lower'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import PushPlan from './pages/push/PushPlan'
import PullPlan from './pages/pull/PullPlan'
import LegPlan from './pages/leg/LegPlan'
import UpperPlan from './pages/upper/UpperPlan'
import LowerPlan from './pages/lower/LowerPlan'

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/push' element={<Push />} />
        <Route path='/push/plan' element={<PushPlan />} />
        <Route path='/pull' element={<Pull />} />
        <Route path='/pull/plan' element={<PullPlan />} />
        <Route path='/leg' element={<Leg />} />
        <Route path='/leg/plan' element={<LegPlan />} />
        <Route path='/upper' element={<Upper />} />
        <Route path='/upper/plan' element={<UpperPlan />} />
        <Route path='/lower' element={<Lower />} />
        <Route path='/lower/plan' element={<LowerPlan />} />
        <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App