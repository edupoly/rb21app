import React from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store'
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import Countries from './features/countries/Countries';
import { Link, Outlet } from 'react-router-dom';
function App() {
  
  return (
    <Provider store={store}>
      <div>
          <nav class="navbar navbar-expand-lg navbar-dark bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Edupoly</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
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
              </ul>
            </div>
          </div>
        </nav>
        <Outlet></Outlet>
      </div>
    </Provider>
  )
}

export default App