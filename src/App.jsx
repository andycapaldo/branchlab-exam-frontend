import { useState } from 'react'
import './App.css'
import MedicalInfo from './components/MedicalInfo';

function App() {

  return (
    <>
      <div className='container'>
        <MedicalInfo />
        <MedicalInfo />
        <MedicalInfo />
      </div>
    </>
  )
}

export default App
