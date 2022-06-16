import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsAuth } from 'slices/authSlice'

import { StyledNav } from './Navigation.styles'

const Navigation = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    sessionStorage.removeItem('Auth Token')
    dispatch(setIsAuth())
  }

  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <div>
            <Link to="/home/warnings/warn">Warn</Link>
            <Link to="/home/warnings">ings</Link>
          </div>
        </li>
        <li>
          <Link to="/home/weather">Weather</Link>
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
