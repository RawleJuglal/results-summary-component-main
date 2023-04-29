import React from 'react'
import './Results.css'

export default function Results(){
    return(
        <div className='results-component-container'>
            <h1 className='results-title'>Your Result</h1>
            <div className='results-score-container'>
                <span className='results-score'><span className='results-myscore'>76</span>of 100</span>
            </div>
            <h2 className='results-desc'>Great</h2>
            <p className='results-comparison'>You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}