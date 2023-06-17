import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout, updateUserDetails } from '../User/userSlice'
function Navbar() {
    var user = useSelector(state=>{return state.userData.userDetails})
    var dispatch=useDispatch();
    var navigate = useNavigate()
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Edupoly</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                
                {
                    user===null && (<li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
                  </li>)
                }
                {
                    user!==null && (
                        <>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/counter">Counter</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/countries">Countries</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/todolist">Todolist</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/students">Students</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/employees">Employees</Link>
                            </li>
                            <li class="nav-item">
                                <button className='btn btn-info' onClick={()=>{dispatch(logout());navigate("/login")}}>Logout</button>
                            </li>
                        </>
                  )
                }
              </ul>
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar