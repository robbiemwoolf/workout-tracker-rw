import './App.css'
import React from 'react'
import Push from './push/Push'
import Pull from './pull/Pull'
import Leg from './legs/Legs'
import Upper from './upper/Upper'
import Lower from './lower/Lower'


function App() {
  return (
    <div className='App'>
        <Push />
        <Pull />
        <Leg />
        <Upper />
        <Lower />
    </div>
  )
}

export default App