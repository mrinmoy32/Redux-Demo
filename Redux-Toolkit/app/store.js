const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')

const reduxLogger = require('redux-logger');
// logger middleware
const logger = reduxLogger.createLogger(); 

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },
    // in the list of default middlewares created by configureStore we append our logger middleware
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),  
})

module.exports = store;