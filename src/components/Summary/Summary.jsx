import React from 'react'
import './Summary.css'
import MemoryIcon from '../../images/icon-memory.svg'
import ReactionIcon from '../../images/icon-reaction.svg'
import VerbalIcon from '../../images/icon-verbal.svg'
import VisualIcon from '../../images/icon-visual.svg'

export default function Summary(){
    return(
        <div className='summary-component-container'>
            <h1 className='summary-title'>Summary</h1>
            <div className='summary-skills-container'>
                <div className='summary-reaction-container flex-skill'>
                    <img src={ReactionIcon} alt="lighting-bolt icon" />
                    <p className='summary-text'>Reaction</p>
                    <p className='summary-totals'><span className='mytotal'>80</span> / 100</p>
                </div>
                <div className='summary-memory-container flex-skill'>
                    <img src={MemoryIcon} alt="lighting-bolt icon" />
                    <p className='summary-text'>Memory</p>
                    <p className='summary-totals'><span className='mytotal'>92</span> / 100</p>
                </div>
                <div className='summary-verbal-container flex-skill'>
                    <img src={VerbalIcon} alt="lighting-bolt icon" />
                    <p className='summary-text'>Verbal</p>
                    <p className='summary-totals'><span className='mytotal'>61</span> / 100</p>
                </div>
                <div className='summary-visual-container flex-skill'>
                    <img src={VisualIcon} alt="lighting-bolt icon" />
                    <p className='summary-text'>Visual</p>
                    <p className='summary-totals'><span className='mytotal'>72</span> / 100</p>
                </div>
            </div>
            <button className='summary-btn'>Continue</button>
        </div>
    )
}