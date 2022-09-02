import { useState } from 'react'
import Title from './components/Title'
import { Contador } from './components/Contador'

function App() {

  return (
    <div className='container bg-dark text-light rounded-5 pb-3 mt-5 pt-3'>
      <Title />
      <Title texto = 'Este tiene textoooo'/>

      <Contador />
      <Contador/>
    </div>
  )
}

export default App
