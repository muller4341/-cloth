import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './Components/Context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ShopContextProvider>
    <App />
  
  </ShopContextProvider>
  </React.StrictMode>

)
