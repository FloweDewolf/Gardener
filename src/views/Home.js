import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { updateWarnings } from 'slices/warningsSlice'

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
      const payload = []
      const querySnapshot = await getDocs(collection(db, 'warnings'))
      querySnapshot.forEach((doc) => {
        let obj = doc.data()
        obj = { ...obj, id: doc.id }
        payload.push(obj)
      })
      dispatch(updateWarnings(payload))
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
