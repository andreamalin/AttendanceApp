/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import Button from './Button'

const AddStudent = () => {
  const [newStudents, setNewStudents] = useState([])

  const addNewStudent = (newStudent) => {
    setNewStudents({
      ...newStudents,
      newStudent,
    })
  }

  return (
    <div>
      <div className="header">
        <h1>Agregar estudiante</h1>
      </div>
      <form>
        <label htmlFor="fname">Nombre a aparecer: </label>
        <input type="text" id="fname" name="" placeholder="John Alvarez" />
      </form>

      <div className="buttons">
        <Button option="Aceptar" onClick={() => {}} />
        <button type="button" className="add" onClick={addNewStudent}>Agregar otro</button>
      </div>
    </div>
  )
}

export default AddStudent
