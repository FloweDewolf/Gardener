import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'

import Warn from 'views/Warn'

const Warnings = () => {
  const warnings = useSelector((state) => state.warnings.value)

  return (
    <div>
      {warnings.warnings.map((warning) => (
        <p>
          {warning.title}
          {warning.message}
        </p>
      ))}
      <Routes>
        <Route path="/warn" element={<Warn />} />
      </Routes>
    </div>
  )
}

export default Warnings
