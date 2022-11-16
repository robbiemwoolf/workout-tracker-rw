import React from 'react'
import { Link } from 'react-router-dom'

export default function Card() {
    return (        
        <div className='container'>
            <div className='card'>
                <p className='query neonText glow'>Are you ready?</p>
                <button className='btn neonText glow'>Let's go!</button>
                <Link to='/push/plan' style={{textDecoration: 'none', textAlign: 'center' }}>
                    <small className='plan pinkText'>Preview the plan</small>
                </Link>
            </div>
        </div>
    )
}