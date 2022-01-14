import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { makeServer } from './api/mockserver'
makeServer({ environment: 'development' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
