import React from 'react'
import 'bootstrap'
import '../../App.css'
import Header from '../../dayLayout/Header'


export default function PushPlan() {
    const day = 'Push'
    const exercises = [
        {
            'name': 'Flat DB Bench',
            'sets': '2',
            'reps': '4 - 6',
            'weight': '33'
        },
        {
            'name': 'Incline DB Bench',
            'sets': '3 - 4',
            'reps': '8 - 12',
            'weight': '28'
        },
        {
            'name': 'Chest Flies',
            'sets': '3 - 4',
            'reps': '8 - 12',
            'weight': '10'
        },
        {
            'name': 'Push Ups',
            'sets': '3',
            'reps': 'failure',
            'weight': 'body'
        },
        {
            'name': 'DB Lateral Raises',
            'sets': '3 - 4',
            'reps': '12 - 16',
            'weight': '10'
        },
        {
            'name': 'Incline BB Skullcrushers',
            'sets': '3',
            'reps': '8 - 12',
            'weight': '25.5'
        },
        {
            'name': 'Cable Tricep Pushdowns',
            'sets': '3',
            'reps': '12 - 16',
            'weight': '20'
        }
    ]
    const item = exercises.map((exercise) => {
        return (
            <div className='d-flex orangeText flex-row px-2' key={exercise.name} >
                <div className='name'>{exercise.name}</div>
                <div className='set'>{exercise.sets}</div>
                <div className='x pinkText'>x</div>
                <div className='rep'>{exercise.reps}</div> 
                <div className='a pinkText'>@</div>
                <div className='weight'>{exercise.weight}</div>
            </div>
        )
    })
    return ( 
        <> 
            <Header day={day} />    
            <div className='container'>
                <div className='planCard'>
                    <div className='d-flex flex-row pinkText px-2'>
                        <div className='name'>Exercise</div>
                        <div className='title'>Sets</div>
                        <div className='title'>Reps</div>
                        <div className='title px-3'>Weight</div>
                    </div>
                    {item}
                </div>
            </div>
        </>
    )
}