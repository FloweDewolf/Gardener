import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'reducers/authSlice'
import warningsReducer from 'reducers/warningsSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    warnings: warningsReducer,
  },
})
