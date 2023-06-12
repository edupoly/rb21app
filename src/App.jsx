import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
function App() {
  
  return (
    <Provider store={store}>
      <div className='border border-2 border-success m-2 p-2'>
          <h1>Main App</h1>
          <Counter></Counter>
          <Todolist></Todolist>
      </div>
      
    </Provider>
  )
}

export default App