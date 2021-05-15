/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import firebase from '../../firebase'

const ToggleSwitch = ({ result }) => {
  const db = firebase.firestore()
  const collection = db.collection('students')

  const changeAssistance = () => {
    collection.doc(result.id).update({ assisted: !result.assisted })
  }

  return (
    <label className="switch">
      <input type="checkbox" checked={!result.assisted} onChange={changeAssistance} />
      <span className="slider round" />
    </label>
  )
}

ToggleSwitch.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    assisted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  }).isRequired,
}

export default ToggleSwitch
