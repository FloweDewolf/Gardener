import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'slices/authSlice'
import warningsReducer from 'slices/warningsSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    warnings: warningsReducer,
  },
})
