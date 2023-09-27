import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/iceCream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

// import { createLogger } from 'redux-logger';
// logger middleware
// const logger = createLogger(); 

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // in the list of default middlewares created by configureStore we append our logger middleware
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch