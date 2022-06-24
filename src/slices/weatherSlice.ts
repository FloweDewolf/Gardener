import { createSlice } from '@reduxjs/toolkit'

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: {} as any,
  },
  reducers: {
    setWeather: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setWeather } = weatherSlice.actions
export default weatherSlice.reducer
