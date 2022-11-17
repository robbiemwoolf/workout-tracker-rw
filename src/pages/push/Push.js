import React from 'react'
import './Push.css'
import Header from '../../dayLayout/Header'
import Card from '../../dayLayout/Card'

export default function Push() {
    const day = 'Push'
    const path = '/push/plan'
    const query = ['Are you ready?']
    return (
        <>
            <Header day={day}/>
            <Card path={path} query={query}/>
        </>
    )
}