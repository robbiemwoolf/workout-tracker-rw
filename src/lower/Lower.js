import React from 'react'
import Header from '../dayLayout/Header'
import Card from '../dayLayout/Card'

export default function Lower() {
    const day = 'Lower'
    return (
        <>
            <Header day={day} />
            <Card />
        </>
    )
}