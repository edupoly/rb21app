import React, { useCallback, useState } from 'react'
import Todo from './Todo'
function Todolist() {
    var [todolist,setTodolist]=useState(['car wash','bankstatement','books','pens'])
    const [newtodo, setNewtodo] = useState('');
    function handleNewTodo(e){
        setNewtodo(e.target.value)
    }
    function addTodo(){
        setTodolist([...todolist,newtodo])
    }
    
    var deleteTodo=useCallback(function(ind){
        var temp = [...todolist];
        temp.splice(ind,1);
        setTodolist([...temp])
    },[todolist])
    return (
    <div>
        <h1>Todolist</h1>
        <input type="text" onChange={handleNewTodo}/>
        <button onClick={addTodo}>Add Todo</button>
        <ul className='list-group'>
            {
                todolist.map((t,i)=>{
                    return <Todo t={t} i={i} deleteTodo={deleteTodo}></Todo>
                })
            }
        </ul>
    </div>
  )
}

export default Todolist