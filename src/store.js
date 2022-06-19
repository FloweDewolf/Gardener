import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'slices/authSlice'
import warningsReducer from 'slices/warningsSlice'
import locationReducer from 'slices/locationReducer'
import weatherSlice from 'slices/weatherSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    warnings: warningsReducer,
    location: locationReducer,
    weather: weatherSlice,
  },
})
