import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const navigate = useNavigate()
  const isAuth = useSelector((state) => state.auth.value.isAuth)

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return <div>Home</div>
}

export default Home
