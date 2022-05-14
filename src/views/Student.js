import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Student(props) {
  const creditNumber = useParams().index
  const [student, setStudent] = useState('')

  let performance = ''
  if (student.academicPerformance === 'veryLow') {
    performance = 'Очень низкая'
  } else if (student.academicPerformance === 'low') {
    performance = 'Низкая'
  } else if (student.academicPerformance === 'med') {
    performance = 'Средняя'
  } else if (student.academicPerformance === 'high') {
    performance = 'Высокая'
  }

  let form = ''
  if (student.formEducation === 'full') {
    form = 'Очная'
  } else {
    form = 'Заочная'
  }

  let department = ''
  if (student.department === 'spo') {
    department = 'СПО'
  } else if (student.department === 'vo') {
    department = 'ВО'
  }

  let spec = ''
  if (student.speciality === 'Programmer') {
    spec = 'Программист'
  } else if (student.speciality === 'Electrician') {
    spec = 'Электрик'
  } else if (student.speciality === 'Mechanic') {
    spec = 'Механик'
  }

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
    <div className="fields">
      <div className="field"><b>Личный номер студента: </b>{student.creditNumber}</div>

      <div className="fieldImage">
        <img
          src={
            'http://localhost:1337' +
            (student !== '' ? student.photo.data.attributes.url : '')
          }
          alt=""
        />
      </div>
      <div className="fields fields__row">
        <div className="field">
          <b>ФИО: </b>
          {student.fullName}
        </div>
        <div className="field">
          <b>Номер паспорта: </b>
          {student.passportID}
        </div>
      </div>
      <div className="fields fields__row">
        <div className="field">
          <b>Специальность: </b>
          {spec}
        </div>
        <div className="field">
          <b>Курс: </b>
          {student.course}
        </div>
        <div className="field">
          <b>Отделение: </b>
          {department}
        </div>
        <div className="field">
          <b>Форма обучения: </b>
          {form}
        </div>
      </div>
      <div className="fields fields__row">
        <div className="field">
          <b>Телефон: </b>+{student.phone}
        </div>
        <div className="field">
          <b>Электронная почта: </b>
          {student.email}
        </div>
        <div className="field">
          <b>Адрес: </b>
          {student.address}
        </div>
      </div>
      <div className="fields fields__row">
        <div className="field">
          <b>Дата зачисления: </b>
          {student.enrollmentDate}
        </div>
        <div className="field">
          <b>Дата окончания учебы: </b>
          {student.expirationDate}
        </div>
        <div className="field">
          <b>Успеваемость: </b>
          {performance}
        </div>
        <div className="field">
          <b>{student.graduated ? 'Не Аттестован' : 'Не аттестован'}</b>
        </div>
      </div>
    </div>
  )
}

export default Student
