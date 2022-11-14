import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Push.css'
import Header from '../dayLayout/Header'
import Card from '../dayLayout/Card'
import Plan from '../dayLayout/Plan'

export default function Push() {
    const day = 'Push'
    return (
        <>
            <Header day={day} />
            <Routes>
                <Route path='/' element={<Card />} />
                <Route path='/plan' element={<Plan />} />
            </Routes>
        </>
    )
}