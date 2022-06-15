import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsAuth } from 'reducers/authSlice'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/small/Button'

const Authenticated = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  return (
    <div>
      <Button
        type="button"
        onClick={() => {
          sessionStorage.removeItem('Auth Token')
          dispatch(setIsAuth())
        }}
      >
        Log out
      </Button>
    </div>
  )
}

export default Authenticated
