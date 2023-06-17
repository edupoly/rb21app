import React from 'react'
import { useDeleteEmployeeByIdMutation, useGetAllEmployeesQuery } from '../../services/employeeApi'
import { Link } from 'react-router-dom';

function Employees() {
    var {isLoading,data}=useGetAllEmployeesQuery();
    var [deleteEmp,x] = useDeleteEmployeeByIdMutation();
  return (
    <div>
        <Link to="/addEmployee"><button>Add Employee</button></Link>
        <h1>Employees</h1>
        {
            isLoading && <h1>Please wait....</h1>
        }
        {
            !isLoading && (
                data.map((e)=>{
                    return  <li>
                                {e.firstname}
                                <Link className='btn btn-info m-2' to={`/editEmp/${e.id}`}>Edit</Link>
                                <button onClick={()=>{deleteEmp(e)}}>Delete</button>
                            </li>
                })
            )
        }
    </div>
  )
}

export default Employees