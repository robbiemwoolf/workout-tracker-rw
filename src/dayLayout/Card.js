import React from 'react'
import '../pages/push/Push.css'
import { Link } from 'react-router-dom'

export default function Card({path}) {
    return (        
        <div className='container'>
            <div className='card'>
                <p className='query neonText glow'>Are you ready?</p>
                <button className='btn neonText glow'>Let's go!</button>
                <Link to={path} className='preview pinkText'>
                    Preview the plan
                </Link>
            </div>
        </div>
    )
}