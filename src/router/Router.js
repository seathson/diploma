import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Group from '../components/Groups/Group'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:index' element={<Group/>}/>
    </Routes>
  )
}

export default Router