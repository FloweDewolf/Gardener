import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Warn from 'views/Warn'

const Warnings = () => {
  return (
    <Routes>
      <Route path="/warn" element={<Warn />} />
    </Routes>
  )
}

export default Warnings
