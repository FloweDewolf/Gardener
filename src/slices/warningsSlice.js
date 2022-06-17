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
    initWarnings: (state, action) => {
      state.value.warnings = [
        ...state.value.warnings,
        {
          title: action.payload.title,
          message: action.payload.message,
          id: action.payload.id,
        },
      ]
    },
    addWarning: (state) => {
      state.value.warnings = [
        ...state.value.warnings,
        {
          title: state.value.formValues.title,
          message: state.value.formValues.message,
          id: state.value.formValues.id,
        },
      ]
    },
  },
})

export const { changeFormValue, clearForm, initWarnings, addWarning } =
  warningsSlice.actions

export default warningsSlice.reducer
