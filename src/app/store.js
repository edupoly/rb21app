import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todolist/todoSlice'
import { setupListeners } from '@reduxjs/toolkit/query';
import { countriesApi } from '../services/countriesApi';
import { productsApi } from '../services/productsApi';
import { studentsApi } from '../services/studentsApi';
export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todolist:todoReducer,
        [countriesApi.reducerPath]: countriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [studentsApi.reducerPath]:studentsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware().concat(countriesApi.middleware,productsApi.middleware,studentsApi.middleware),
})
setupListeners(store.dispatch)