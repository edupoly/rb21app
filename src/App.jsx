import React from 'react'
import StudentForm from './StudentForm'
import StudentForm2 from './StudentForm2'
import EmployeeForm from './EmployeeForm'

function App() {
  
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <h1>Hello App</h1>
      <EmployeeForm></EmployeeForm>
      <StudentForm></StudentForm>
      <StudentForm2></StudentForm2>
    </div>
  )
}

export default App