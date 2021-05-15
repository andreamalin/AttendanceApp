import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ option, onClick }) => (
  <button type="button" onClick={onClick}>{option}</button>
)

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
