import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './App.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* store is provided at the top of the componenet tree, this is simply beacause
    //Provider component uses context under the hood */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
