import React from 'react'
import 'bootstrap'
import '../../App.css'
import Header from '../../dayLayout/Header'


export default function UpperPlan() {
    const day = 'Upper'
    const exercises = [
        {
            'name': 'Bent Over BB Row',
            'sets': '3',
            'reps': '10 - 15',
            'weight': '75'
        },
        {
            'name': 'Lebert Dips',
            'sets': '3',
            'reps': 'failure',
            'weight': 'body'
        },
        {
            'name': 'DB Arnold Press',
            'sets': '2 - 3',
            'reps': '8 - 12',
            'weight': '18'
        },
        {
            'name': 'Overhead DB Tricep Extension',
            'sets': '3',
            'reps': '10 - 15',
            'weight': '18'
        },
        {
            'name': 'Seated DB Hammer Curls',
            'sets': '3 - 4',
            'reps': '10 - 15',
            'weight': '8'
        },
        {
            'name': 'Cable Flies SS Reverse',
            'sets': '3',
            'reps': '10 - 12',
            'weight': '25.5'
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