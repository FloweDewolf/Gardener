import React, { useEffect } from 'react'

import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import Template from 'components/Template'

import { collection, onSnapshot, orderBy, query } from '@firebase/firestore'
import { db } from '../firebase'

import { updateWarnings } from '../slices/warningsSlice'
import { setLocation } from '../slices/locationReducer'

import Warnings from './Warnings'
import Warn from './Warn'
import Weather from './Weather'

const Home = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.value.isAuth)
  const navigate = useNavigate()

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
        <Route path="/warnings" element={<Warnings />} />
        <Route path="/warn" element={<Warn />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Template>
  )
}

export default Home
