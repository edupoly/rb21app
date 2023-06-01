import React, { useContext } from 'react'
import { UserContext } from './App'

function Third() {
    var u = useContext(UserContext)
  return (
    <div style={{border:'2px solid orange',padding:'5px',margin:'5px'}}>
        <h1>Third:{u}</h1>
    </div>
  )
}

export default Third