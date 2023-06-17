import React from 'react'
import { Provider, useSelector } from 'react-redux';
import { store } from './app/store'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import { Link, Outlet } from 'react-router-dom';
import Navbar from './features/utils/Navbar';
function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
    </Provider>
  )
}

export default App