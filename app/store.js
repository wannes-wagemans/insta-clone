import { configureStore } from '@reduxjs/toolkit'
import { openSlice } from '../features/openSlicer'

export const store = configureStore({
  reducer: {
    open: openSlice.reducer,
  },
})
