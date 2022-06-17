import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Template from 'components/Template'
import { collection, getDocs } from '@firebase/firestore'

import { db } from '../firebase'

import { addWarning } from '../slices/warningsSlice'

import Warnings from './Warnings'

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
        dispatch(addWarning(doc.data()))
      })
    })()
  }, [])

  return (
    <Template>
      <Routes>
        <Route path="/warnings/*" element={<Warnings />} />
      </Routes>
    </Template>
  )
}

export default Home
