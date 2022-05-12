import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function StudentsItem(props) {
  const student = props.student.attributes
  let performance = ''
  if (student.academicPerformance == 'veryLow') {
    performance = 'очень низкая'
  } else if (student.academicPerformance == 'low') {
    performance = 'низкая'
  } else if (student.academicPerformance == 'med') {
    performance = 'средняя'
  } else if (student.academicPerformance == 'high') {
    performance = 'высокая'
  }

  return (
    <div className="student">
      <div className="image">
        <img
          src={'http://localhost:1337' + student.photo.data.attributes.url}
          alt=""
        />
      </div>
      <div className='name'>{student.fullName}</div>
      <div className="grade">Успеваемость: {performance}</div>
      <div className="button">
        <Link to={`../student/${student.creditNumber}`}>выбрать</Link>
      </div>
    </div>
  )
}

export default StudentsItem
