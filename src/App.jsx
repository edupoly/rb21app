import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function App() {
  
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <ul className='d-flex flex-wrap justify-content-around list-style-none'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/courses">Course</Link></li>
        <li><Link to="/newbatches">Newbatches</Link></li>
        <li><Link to="/contactus">Contactus</Link></li>
        <li><Link to="/countries">Countries</Link></li>
      </ul>
      <Outlet></Outlet>
    </div>
  )
}

export default App