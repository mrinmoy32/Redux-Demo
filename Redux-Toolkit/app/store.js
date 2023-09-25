const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    }
})

module.exports = store;