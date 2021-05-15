/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from '../../firebase'
import Button from '../Button'
import './Home.css'

const Home = () => {
  const history = useHistory()
  const actualUsername = localStorage.getItem('actualUsername')
  const db = firebase.firestore()
  const collection = db.collection('courses')
  const [courses, setCourses] = useState([])

  useEffect(() => {
    collection.onSnapshot((snapshot) => {
      const allCourses = []
      snapshot.forEach((item) => {
        const datos = item.data()
        datos.id = item.id
        allCourses.push(datos)
      })

      setCourses(allCourses)
    })
  }, [])

  const actualCourse = (course) => {
    localStorage.setItem('actualCourse', course)
    history.push('/assistance')
  }

  return (
    <div className="home">
      <div className="header">
        <h1>Bienvenido,</h1>
        <h1>{actualUsername}</h1>
      </div>

      {courses.map((result) => (
        <Button
          option={result.course}
          key={result.id}
          onClick={() => actualCourse(result.course)}
        />
      ))}

      <div className="exit">
        <Button option="Salir" onClick={() => history.push('/')} />
      </div>
    </div>
  )
}

export default Home
