import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { setIsAuth } from 'reducers/authSlice'

const StyledNav = styled.nav`
  justify-self: center;
  margin-top: 30px;
  height: 100px;
  width: 90%;

  ul {
    display: flex;
    width: 100%;
    list-style: none;

    li {
      width: 100%;
      border-radius: 25px 10px;
      cursor: pointer;

      a {
        display: block;
        height: 100%;
        width: 100%;
        font-size: ${({ theme }) => theme.fontSize.m};
        text-align: center;
        text-shadow: 7px 4px 1px rgba(10, 46, 54, 0.5);
        line-height: 100px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
`

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
          <Link to="/home/form">Form</Link>
        </li>
        <li>
          <Link to="/home/three">Three</Link>
        </li>
        <li>
          <Link to="/home/four">Four</Link>
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
