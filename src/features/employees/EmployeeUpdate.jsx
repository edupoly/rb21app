import React, { useEffect } from 'react'
import { useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation } from '../../services/employeeApi'
import { useParams } from 'react-router-dom';

function EmployeeUpdate() {
    var {id}=useParams()
    var {isLoading,data}=useGetEmployeeByIdQuery(id);
    var [updateEmp,x]=useUpdateEmployeeByIdMutation()
    console.log(data)
    const [emp, setEmp] = React.useState({})
    useEffect(()=>{
        setEmp({...data})
    },[data])
    return (
        <div>
            <h1>Update</h1>
            {
                isLoading && (<h1>Please wait...</h1>)
            }
            {
                !isLoading && (
                    <div>
                        <input type="text" onChange={(e)=>{setEmp({...emp,firstname:e.target.value})}} value={emp.firstname}/><br/>
                        <input type="text" onChange={(e)=>{setEmp({...emp,lastname:e.target.value})}} value={emp.lastname}/><br/>
                        <input type="text" onChange={(e)=>{setEmp({...emp,age:e.target.value})}} value={emp.age}/><br/>
                        <button onClick={()=>{updateEmp(emp)}}>Update Employee</button>
                    </div>
                )
            }
        </div>
    )
}

export default EmployeeUpdate