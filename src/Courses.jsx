import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Courses() {
  return (
    <div>
        <h1>Courses</h1>
        <ol>
            <li>
                <Link to="/courses/reactjs">ReactJS</Link>
            </li>
            <li>
                <Link to="/courses/angular">Angular</Link>
            </li>
            <li>
                <Link to="/courses/node">Node</Link>
            </li>
        </ol>
        <Outlet></Outlet>
    </div>
  )
}

export default Courses