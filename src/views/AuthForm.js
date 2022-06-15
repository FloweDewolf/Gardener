import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput, clearInputs, setIsAuth } from 'reducers/authSlice'

import { useLocation, useNavigate, Link } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify'
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
  const auth = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  useEffect(() => {
    if (auth.isAuth.value) {
      navigate('/login')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (location.pathname === '/login' || location.pathname === '/') {
      signInWithEmailAndPassword(authentication, auth.email, auth.password)
        .then((res) => {
          // eslint-disable-next-line no-underscore-dangle
          sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
          dispatch(setIsAuth())
          navigate('/home')
          dispatch(clearInputs())
        })
        .catch((err) => {
          if (err.code === 'auth/wrong-password') {
            toast.error('Please check the Password!', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          } else if (err.code === 'auth/user-not-found') {
            toast.error('Please check the Email', {
              position: 'top-right',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        })
    } else if (location.pathname === '/register') {
      createUserWithEmailAndPassword(authentication, auth.email, auth.password)
        .then((res) => {
          // eslint-disable-next-line no-underscore-dangle
          sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
          dispatch(setIsAuth())
          navigate('/home')
          dispatch(clearInputs())
        })
        .catch((err) => {
          if (err.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use', {
              position: 'top-left',
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
  }

  const handleChange = ({ target }) => {
    const input = { type: target.type, value: target.value }
    dispatch(setInput(input))
  }
  return (
    <Container>
      <StyledH1>Gardener</StyledH1>
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" onChange={handleChange} value={auth.email} />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={handleChange}
              value={auth.password}
            />
          </label>
          <StyledButton
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastStyle={{ backgroundColor: '#0a2e36', color: 'whitesmoke' }}
      />
    </Container>
  )
}

export default AuthForm
