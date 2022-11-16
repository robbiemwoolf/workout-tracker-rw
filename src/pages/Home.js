import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
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
    return card
}