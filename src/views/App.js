import React, { useEffect } from 'react'
// import styled from 'styled-components'

import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { updateWarnings } from 'slices/warningsSlice'

import Template from 'components/Template'

import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db } from '../firebase'

import Home from './Home'
import Warnings from './Warnings'
import Warn from './Warn'
import Weather from './Weather'

const App = () => {
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
      const colRef = collection(db, 'warnings')
      const q = query(colRef, orderBy('createdAt'))
      onSnapshot(q, (snapshot) => {
        const warnings = []
        snapshot.docs.forEach((doc) => {
          warnings.push({ ...doc.data(), id: doc.id })
        })
        dispatch(updateWarnings(warnings))
      })
    })()
  }, [])

  return (
    <Template>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/warnings" element={<Warnings />} />
        <Route path="/warn" element={<Warn />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Template>
  )
}

export default App
