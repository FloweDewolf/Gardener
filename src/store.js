import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'slices/authSlice'
import warningsReducer from 'slices/warningsSlice'
import locationReducer from 'slices/locationReducer'

export default configureStore({
  reducer: {
    auth: authReducer,
    warnings: warningsReducer,
    location: locationReducer,
  },
})
