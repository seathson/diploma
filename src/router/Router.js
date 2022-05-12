import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Group from '../components/Groups/Group'
import Student from '../components/Students/Student'

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