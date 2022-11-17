import React from 'react'
import 'bootstrap'
import '../../App.css'
import Header from '../../dayLayout/Header'


export default function LowerPlan() {
    const day = 'Lower'
    const exercises = [
        {
            'name': 'BB Squat - Drop Set',
            'sets': '10',
            'reps': '10',
            'weight': '60'
        },
        {
            'name': 'Manual Hamstring Curl',
            'sets': '3',
            'reps': 'failure',
            'weight': 'body'
        },
        {
            'name': 'Standing Calf Raises',
            'sets': '3',
            'reps': '10 -15',
            'weight': 'body'
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