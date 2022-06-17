import { createSlice } from '@reduxjs/toolkit'

const warningsSlice = createSlice({
  name: 'warnings',
  initialState: {
    value: {
      formValues: { title: '', message: '', id: '' },
      warnings: [],
    },
  },
  reducers: {
    changeFormValue: (state, action) => {
      state.value.formValues[action.payload.id] = action.payload.value
    },
    clearForm: (state) => {
      state.value.formValues.title = ''
      state.value.formValues.message = ''
    },
    updateWarnings: (state, action) => {
      state.value.warnings = action.payload
    },
  },
})

export const { changeFormValue, clearForm, updateWarnings } =
  warningsSlice.actions

export default warningsSlice.reducer
