import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import StudentsItem from './StudentsItem'

function Students(props) {
  return <div className='students'>{props.students.map(student => <StudentsItem key={student.id} student={student}/>)}</div>
}

export default Students