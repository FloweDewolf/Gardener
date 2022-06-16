import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Template from 'components/Template'
import Test from './Test'

const Authenticated = () => {
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <Template>
      <Routes>
        <Route path="/test" element={<Test />} />
      </Routes>
    </Template>
  )
}

export default Authenticated
