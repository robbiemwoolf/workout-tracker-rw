import React from 'react'
import Header from '../../dayLayout/Header'
import Card from '../../dayLayout/Card'

export default function Pull() {
    const day = 'Pull'
    const path ='/pull/plan'
    const query = ['Are you ready?']
    return (
        <>
            <Header day={day}/>
            <Card path={path} query={query}/>
        </>
    )
}