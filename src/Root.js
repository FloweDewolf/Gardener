import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'

import AuthForm from './views/AuthForm'
import Authenticated from './views/Authenticated'

const Root = () => {
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuth) {
      navigate('home')
    }
  }, [isAuth])

  return (
    <Routes>
      <Route path="/home/*" element={<Authenticated />} />
      <Route path="/" element={<AuthForm />} />
      <Route path="/login" element={<AuthForm />} />
      <Route path="/register" element={<AuthForm />} />
    </Routes>
  )
}

export default Root
