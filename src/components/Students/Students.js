import React from 'react'
import StudentsItem from './StudentsItem'
import { useLocation } from 'react-router-dom'

function Students(props) {
  let location = useLocation().pathname.split('').slice(1)
  return (
    <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
      <div style={{fontSize: '1.1rem'}}>Группа: <b>{location}</b></div>
      <div className="students">
        {props.students.map((student) => (
          <StudentsItem key={student.id} student={student} />
        ))}
      </div>
    </div>
  )
}

export default Students
