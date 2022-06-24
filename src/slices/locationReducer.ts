import { createSlice } from '@reduxjs/toolkit'

const locationReducer = createSlice({
  name: 'location',
  initialState: {
    value: { lat: '52.2297', lon: '21.0122' },
  },
  reducers: {
    setLocation: (state, action) => {
      state.value = { lat: action.payload.lat, lon: action.payload.lon }
    },
  },
})

export const { setLocation } = locationReducer.actions
export default locationReducer.reducer
