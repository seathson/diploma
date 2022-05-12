import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Student(props) {
  const creditNumber = useParams().index
  const [student, setStudent] = useState('')

  useEffect(() => {
    axios(`http://localhost:1337/api/students/${creditNumber}?populate=*`)
      .then((res) => res.data)
      .then((result) => {
        setStudent(result.data.attributes)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {student.creditNumber}
      <div className="image">
        <img
          src={
            'http://localhost:1337' +
            (student !== '' ? student.photo.data.attributes.url : '')
          }
          alt=""
        />
      </div>
      <div className="name">{student.fullName}</div>
      <div>{student.passportID}</div>
      <div>{student.speciality}</div>
      <div>{student.course}</div>
      <div>{student.department}</div>
      <div>{student.department}</div>
      <div>{student.formEducation}</div>
      <div>{student.phone}</div>
      <div>{student.email}</div>
      <div>{student.address}</div>
      <div>{student.enrollmentDate}</div>
      <div>{student.expirationDate}</div>
      <div>{student.academicPerformance}</div>
      <div>{student.graduated}</div>
    </div>
  )
}

export default Student
