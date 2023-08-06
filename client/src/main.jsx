import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"
import AppComingSoon from './AppComingSoon.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AppComingSoon />
    </Router>
  </React.StrictMode>,
)
