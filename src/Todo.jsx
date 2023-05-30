import React, { useEffect } from 'react'

function Todo(props) {
  useEffect(()=>{
      console.log('Todo component re-rendered',props.t)
  })
  return (
    <li className='list-group-item d-flex justify-content-between border border-2 p-2 m-2 list-style-none'>
        <div>{props.t}</div>
        <button onClick={()=>{props.deleteTodo(props.i)}}>delete</button>
    </li>
  )
}

export default React.memo(Todo)