import { createSlice } from '@reduxjs/toolkit'

const locationReducer = createSlice({
  name: 'location',
  initialState: {
    value: { lat: '50.0647', lon: '19.9450' },
  },
  reducers: {
    setLocation: (state, action) => {
      state.value = { lat: action.payload.lat, lon: action.payload.lon }
    },
  },
})

export const { setLocation } = locationReducer.actions
export default locationReducer.reducer
