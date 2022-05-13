import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Group from '../views/Group'
import Student from '../views/Student'

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:index' element={<Group/>}/>
      <Route path='student/:index' element={<Student/>}/>
    </Routes>
  )
}

export default Router