import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Group(props) {
  let course = (useParams().index + '')[2]
  let spec = ''
  if ((useParams().index + '')[4] == 5) {
    spec = 'Programmer'
  }
  if ((useParams().index + '')[4] == 7) {
    spec = 'Electrician'
  }
  if ((useParams().index + '')[4] == 9) {
    spec = 'Mechanic'
  }
  
  const [group, setGroup] = useState([])
  // const [students, setStudents] = useState([])

  useEffect(() => {
    axios(
      `http://localhost:1337/api/students?filters[speciality][$eq]=${spec}&filters[course][$eq]=${course}`
    )
      .then((res) => res.data)
      .then((result) => {
        setGroup(result.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(group)

  return <div></div>
}

export default Group
