import React from 'react'
import Header from '../../dayLayout/Header'
import Card from '../../dayLayout/Card'

export default function Upper() {
    const day = 'Upper'
    const path = '/upper/plan'
    const query = ['Are you ready?']
    return (
        <>
            <Header day={day}/>
            <Card path={path} query={query}/>
        </>
    )
}