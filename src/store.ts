import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'slices/authSlice'
import warningsReducer from 'slices/warningsSlice'
import locationReducer from 'slices/locationReducer'
import weatherSlice from 'slices/weatherSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    warnings: warningsReducer,
    location: locationReducer,
    weather: weatherSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
