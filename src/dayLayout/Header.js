import React from 'react'

export default function Header({day}) {
    return (
        <div className='container dark'>
            <h1 className='neonText glow'>{day} Day</h1>
        </div>
    )
}