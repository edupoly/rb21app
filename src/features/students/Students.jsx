import React from 'react'
import { useAddStudentMutation } from '../../services/studentsApi'

function Students() {
    var [postStudent,result] = useAddStudentMutation();

    function addStudent(){
        postStudent({firstname:'praveen'})
    }
  return (
    <div>
        <h1>Students</h1>
        <button onClick={addStudent}>Add Student</button>
    </div>
  )
}

export default Students