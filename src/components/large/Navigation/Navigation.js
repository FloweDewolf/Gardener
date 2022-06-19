import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsAuth } from 'slices/authSlice'

import { toast } from 'react-toastify'
import { StyledNav } from './Navigation.styles'

const Navigation = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token')
    dispatch(setIsAuth())

    toast.error('Logged out', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <div>
            <Link to="/warn">Warn</Link>
            <Link to="/warnings">ings</Link>
          </div>
        </li>
        <li>
          <Link to="/weather">Weather</Link>
        </li>
        <li>
          <Link to="/login" onClick={handleLogout}>
            Log out
          </Link>
        </li>
      </ul>
    </StyledNav>
  )
}

export default Navigation
