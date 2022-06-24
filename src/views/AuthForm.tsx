import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'hooks'
import { setInput, clearInputs, setIsAuth } from 'slices/authSlice'
import { setLocation } from 'slices/locationReducer'

import { useLocation, useNavigate, Link } from 'react-router-dom'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

// eslint-disable-next-line
import { app } from '../firebase'

import {
  Container,
  StyledH1,
  StyledFormWrapper,
  StyledForm,
  StyledButton,
} from './AuthForm.styles'

const AuthForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const authentication = getAuth()
  const auth = useAppSelector((state) => state.auth.value)
  const dispatch = useDispatch()
  const buttonRef = useRef(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      dispatch(
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      )
    })
  }, [])

  const handleSubmitInAuthForm = (e) => {
    e.preventDefault()
    buttonRef.current.classList.add('button')

    let isLoginPage = false

    const authPromise = new Promise<void>((resolve, reject) => {
      if (location.pathname === '/login' || location.pathname === '/') {
        isLoginPage = true
        signInWithEmailAndPassword(authentication, auth.email, auth.password)
          .then((res) => {
            resolve()
            // @ts-ignore
            sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
            dispatch(setIsAuth())
            navigate('/home')
            dispatch(clearInputs())
          })
          .catch((err) => {
            buttonRef.current.classList.remove('button')
            reject()
            if (err.code === 'auth/wrong-password' || 'auth/user-not-found') {
              toast.error(
                `${
                  err.code === 'auth/wrong-password'
                    ? 'Please check the Password!'
                    : 'Please check the Email'
                }`,
                {
                  position: 'bottom-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              )
            }
          })
      } else if (location.pathname === '/register') {
        createUserWithEmailAndPassword(authentication, auth.email, auth.password)
          .then((res) => {
            resolve()
            // @ts-ignore
            sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
            dispatch(setIsAuth())
            navigate('/home')
            dispatch(clearInputs())
          })
          .catch((err) => {
            buttonRef.current.classList.remove('button')
            reject()
            if (err.code === 'auth/email-already-in-use') {
              toast.error('Email Already in Use', {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            }
          })
      }
    })

    toast.promise(
      authPromise,
      {
        pending: `${isLoginPage ? 'Logging in...' : 'Registering in...'}`,
        error: `${isLoginPage ? 'Login failed' : 'Registration failed'}`,
        success: `${isLoginPage ? 'Login successful' : 'Registration successful'}`,
      },
      {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    )
  }

  const handleChangeInAuthForm = ({ target }) => {
    const input = { type: target.type, value: target.value }
    dispatch(setInput(input))
  }
  return (
    <Container>
      <StyledH1>Gardener</StyledH1>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmitInAuthForm}>
          <label>
            Email
            <input
              type="email"
              onChange={handleChangeInAuthForm}
              value={auth.email}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={handleChangeInAuthForm}
              value={auth.password}
            />
          </label>
          <StyledButton
            ref={buttonRef}
            type="submit"
            backgroundColor="white"
            color="${({ theme })} => theme.colors.dark"
          >
            {location.pathname === '/login' || location.pathname === '/'
              ? 'Log in'
              : 'Sign in'}
          </StyledButton>
        </StyledForm>
        <Link
          to={
            location.pathname === '/login' || location.pathname === '/'
              ? '/register'
              : '/login'
          }
          onClick={() => dispatch(clearInputs())}
        >
          <p>
            {location.pathname === '/login' || location.pathname === '/'
              ? 'Do not have an account yet? Sign in!'
              : 'Already have an account? Log in'}
          </p>
        </Link>
      </StyledFormWrapper>
    </Container>
  )
}

export default AuthForm
