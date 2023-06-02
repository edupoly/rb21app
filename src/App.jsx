import React,{useState} from 'react'
import Gender from './Gender'
import Countries from './Countries'
import Techs from './Techs'

function App() {
  
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <h1>App Componenttttt</h1>
      <Gender></Gender>
      <Countries></Countries>
      <Techs></Techs>
    </div>
  )
}

export default App