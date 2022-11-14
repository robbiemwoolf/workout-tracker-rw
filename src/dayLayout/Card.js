import React from 'react'

export default function Card() {
    return (        
        <div className='container'>
            <div className='card'>
                <p className='query neonText glow'>Are you ready?</p>
                <button className='btn neonText glow'>Let's go!</button>
                <small className='plan pinkText'>Preview the plan</small>
            </div>
        </div>
    )
}