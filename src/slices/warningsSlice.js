import { createSlice } from '@reduxjs/toolkit'

const warningsSlice = createSlice({
  name: 'warnings',
  initialState: {
    value: {
      formValues: { title: '', message: '' },
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
    initWarnings: (state, action) => {
      state.value.warnings = [
        ...state.value.warnings,
        {
          title: action.payload.title,
          message: action.payload.message,
        },
      ]
    },
  },
})

export const { changeFormValue, clearForm, initWarnings } =
  warningsSlice.actions

export default warningsSlice.reducer
