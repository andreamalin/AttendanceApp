import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import './Assistance.css'
import Button from '../Button'
import StudentName from './StudentName'

const Assistance = () => {
  const history = useHistory()
  const actualCourse = localStorage.getItem('actualCourse')
  const db = firebase.firestore()
  const collection = db.collection('students')
  const onlySelected = collection.where('course', '==', actualCourse)
  const [students, setStudents] = useState([])

  useEffect(() => {
    onlySelected.onSnapshot((snapshot) => {
      const allStudents = []
      snapshot.forEach((item) => {
        const datos = item.data()
        datos.id = item.id
        allStudents.push(datos)
      })

      setStudents(allStudents)
    })
  }, [])

  return (
    <div className="assistance">
      <div className="header">
        <h1>{actualCourse}</h1>
        <h2>Asistencia del curso</h2>
      </div>

      {students.map((result) => (
        <StudentName result={result} key={result.id} />
      ))}

      <div className="buttons">
        <Button option="Regresar" onClick={history.goBack} />
        <button type="button" className="add">Agregar Estudiante</button>
      </div>
      <h5>Todos los cambios son automaticamente guardados</h5>
    </div>
  )
}

export default Assistance
