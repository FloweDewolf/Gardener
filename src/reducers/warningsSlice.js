import { createSlice } from '@reduxjs/toolkit'

const warningsSlice = createSlice({
  name: 'warnings',
  initialState: {
    value: [
      {
        title: 'title',
        message: 'message',
      },
    ],
  },
  reducers: {
    addWarning: (state) => {
      state.value = [...state.value, {}]
    },
  },
})

export const { addWarning } = warningsSlice.actions
export default warningsSlice.reducer
