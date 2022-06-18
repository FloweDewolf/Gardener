import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import Template from 'components/Template'

import { collection, onSnapshot } from '@firebase/firestore'
import { db } from '../firebase'

import { updateWarnings } from '../slices/warningsSlice'

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
      onSnapshot(collection(db, 'warnings'), (snapshot) => {
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
        <Route path="/warnings" element={<Warnings />} />
        <Route path="/warn" element={<Warn />} />
      </Routes>
    </Template>
  )
}

export default Home
