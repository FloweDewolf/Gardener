import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      email: '',
      password: '',
      isAuth: Boolean(sessionStorage.getItem('Auth Token')),
    },
  },
  reducers: {
    setInput: (state, action) => {
      state.value = {
        ...state.value,
        [action.payload.type]: action.payload.value,
      }
    },
    clearInputs: (state) => {
      state.value = {
        ...state.value,
        email: '',
        password: '',
      }
    },
    setIsAuth: (state) => {
      state.value = {
        ...state.value,
        isAuth: Boolean(sessionStorage.getItem('Auth Token')),
      }
    },
  },
})

export const { setInput, clearInputs, setIsAuth } = authSlice.actions
export default authSlice.reducer
