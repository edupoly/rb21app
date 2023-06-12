import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addTodo, deleteTodo } from './todoSlice';

function Todolist() {
    var {todos} = useSelector(state=>state.todolist);
    var dispatch = useDispatch()
    const [newtodo, setNewtodo] = useState('')
    return (
        <div className='border border-2 border-secondary m-2 p-2'>
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addTodo(newtodo))}}>Add Todo</button>
            {
                todos.map((t,i)=>{
                    return (<li>
                                {t}
                                <button onClick={()=>{dispatch(deleteTodo(i))}}>Delete</button>
                            </li>)
                })
            }
        </div>
    )
}

export default Todolist