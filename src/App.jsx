import React from 'react'
import './App.css'
import Results from './components/Results/Results'
import Summary from './components/Summary/Summary'

export default function App() {

  return (
    <>
    <main className='--app-page-container'>
      <div className='--app-centering'>
        <div className='--app-flex-container'>
          <Results />
          <Summary />
        </div>
      </div>
      
      

        
        
        
        
    </main>
    <footer className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Rawle Juglal</a>.
    </footer>
    </>
  )
}
