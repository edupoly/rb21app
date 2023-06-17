import React from 'react'
import { useAddNewEmployeeMutation } from '../../services/employeeApi'

function EmployeeAdd() {
    const [newemp, setNewemp] = React.useState({
        firstname:'',
        lastname:'',
        age:''
    })
    var [addEmp,x]=useAddNewEmployeeMutation()
   
  return (
    <div>
        <h1>EmployeeAdd</h1>
        <div>
            <input type="text" onChange={(e)=>{setNewemp({...newemp,firstname:e.target.value})}}/><br/>
            <input type="text" onChange={(e)=>{setNewemp({...newemp,lastname:e.target.value})}}/><br/>
            <input type="text" onChange={(e)=>{setNewemp({...newemp,age:e.target.value})}}/><br/>
            <button onClick={()=>{addEmp(newemp)}}>Add Employee</button>
        </div>
    </div>
  )
}

export default EmployeeAdd