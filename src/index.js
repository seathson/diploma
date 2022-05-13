import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import { MainLayout } from './components/MainLayout'

ReactDOM.render(
  <BrowserRouter>
    <MainLayout>
      <App />
    </MainLayout>
  </BrowserRouter>,
  document.getElementById('root')
)
