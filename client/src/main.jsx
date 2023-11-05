import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <PersistGate persistor={persistor}>
  <App />
  </PersistGate>
  
    <Toaster />
  </Provider>,
)
