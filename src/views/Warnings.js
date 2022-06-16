import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Warn from 'components/large/Warn/Warn'

const Warnings = () => {
  return (
    <Routes>
      <Route path="/warn" element={<Warn />} />
    </Routes>
  )
}

export default Warnings
