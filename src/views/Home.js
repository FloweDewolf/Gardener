import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { initWarnings } from 'slices/warningsSlice'

import { ToastContainer } from 'react-toastify'

import Template from 'components/Template'

import { collection, getDocs } from '@firebase/firestore'
import { db } from '../firebase'

import Warnings from './Warnings'
import Warn from './Warn'

const Home = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuth) {
      navigate('/login')
    }
  }, [isAuth])

  useEffect(() => {
    ;(async () => {
      const querySnapshot = await getDocs(collection(db, 'warnings'))
      querySnapshot.forEach((doc) => {
        dispatch(initWarnings(doc.data()))
      })
    })()
  }, [])

  return (
    <Template>
      <Routes>
        <Route path="/warnings" element={<Warnings />} />
        <Route path="/warn" element={<Warn />} />
      </Routes>
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
    </Template>
  )
}

export default Home
