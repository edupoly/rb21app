import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import Products from './features/products/Products';
function App() {
  
  return (
    <Provider store={store}>
      <div className='border border-2 border-success m-2 p-2'>
          <h1>Main App</h1>
          <Products></Products>
          <Counter></Counter>
          <Todolist></Todolist>
          <Countries></Countries>
      </div>
      
    </Provider>
  )
}

export default App