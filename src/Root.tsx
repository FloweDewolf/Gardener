import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useAppSelector } from './hooks'

import AuthForm from './views/AuthForm'
import App from './views/App'

const Root = () => {
  const isAuth = useAppSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('/home')
    }
  }, [isAuth])

  return (
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/register" element={<AuthForm />} />
    </Routes>
  )
}

export default Root
