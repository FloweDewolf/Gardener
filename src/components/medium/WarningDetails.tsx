import React from 'react'
import PropTypes from 'prop-types'

const WarningDetails = ({
  warning = { title: 'example title', message: 'example message' },
}) => {
  return (
    <>
      <h1>{warning.title}</h1>
      <p>{warning.message}</p>
    </>
  )
}

WarningDetails.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  warning: PropTypes.any.isRequired,
}

export default WarningDetails
