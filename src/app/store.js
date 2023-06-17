import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from '../services/countriesApi';
import { productsApi } from '../services/productsApi';
import { studentsApi } from '../services/studentsApi';
import { employeesApi } from '../services/employeeApi';
import { authApi } from '../services/authApi';
import userReducer from '../features/User/userSlice'
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer,
        userData:userReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [studentsApi.reducerPath]:studentsApi.reducer,
        [employeesApi.reducerPath]:employeesApi.reducer,
        [authApi.reducerPath]:authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(
        countriesApi.middleware,
        productsApi.middleware,
        studentsApi.middleware,
        employeesApi.middleware,
        authApi.middleware
    ),
})
setupListeners(store.dispatch)