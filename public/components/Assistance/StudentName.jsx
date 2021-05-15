import React from 'react'
import PropTypes from 'prop-types'
import ToggleSwitch from './ToggleSwitch'

const StudentName = ({ result }) => (
  <div className="student">
    <h3>{result.name}</h3>
    <ToggleSwitch result={result} />
  </div>
)

StudentName.propTypes = {
  result: PropTypes.shape({
    name: PropTypes.string.isRequired,
    assisted: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  }).isRequired,
}

export default StudentName
