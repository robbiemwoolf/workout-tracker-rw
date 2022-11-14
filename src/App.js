import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Push from './push/Push'
import Pull from './pull/Pull'
import Leg from './leg/Leg'
import Upper from './upper/Upper'
import Lower from './lower/Lower'

function App() {
    const days = ['Push', 'Pull', 'Leg', 'Upper', 'Lower']
    const card = days.map((day) => {
        return (
                    <Link to={day} style={{textDecoration: 'none'}}>
                        <div key={day} className='App'>
                            <div className='homeCard'>
                                <h3 className='greenText glowGreen'>{day} Day</h3>
                            </div>
                        </div>
                    </Link>
        )
    })

  return (
    <Routes>
        <Route path='/' element={card} />
        <Route path='/push' element={<Push />} />
        <Route path='/pull' element={<Pull />} />
        <Route path='/leg' element={<Leg />} />
        <Route path='/upper' element={<Upper />} />
        <Route path='/lower' element={<Lower />} />
    </Routes>
  )
}

export default App