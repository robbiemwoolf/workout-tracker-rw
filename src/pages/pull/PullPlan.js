import React from 'react'
import 'bootstrap'
import '../../App.css'
import Header from '../../dayLayout/Header'


export default function PullPlan() {
    const day = 'Pull'
    const exercises = [
        {
            'name': 'Seated Cable Rows - Heavy',
            'sets': '2',
            'reps': '4 - 6',
            'weight': '105'
        },
        {
            'name': 'Seated Cable Rows',
            'sets': '2',
            'reps': '8 - 16',
            'weight': '75'
        },
        {
            'name': 'Lat Pulldowns',
            'sets': '3',
            'reps': '8 - 12',
            'weight': '45'
        },
        {
            'name': 'Cable Lat Pullovers',
            'sets': '2',
            'reps': '16',
            'weight': '20'
        },
        {
            'name': 'Rear Delt Flies',
            'sets': '3 - 4',
            'reps': '12 - 16',
            'weight': '5'
        },
        {
            'name': 'Alternating DB Curl',
            'sets': '2',
            'reps': '8 - 12',
            'weight': '13'
        },
        {
            'name': 'Standing BB Curl SS Reverse',
            'sets': '3',
            'reps': '8 - 12',
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