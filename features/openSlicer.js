import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState = {
  value: false,
}

export const openSlice = createSlice({
  name: 'openSlice',
  initialState,
  reducers: {
    setOpen: (state) => {
      state.value = !state.value
    },
  },
})

export const { setOpen } = openSlice.actions

export default openSlice.reducer
