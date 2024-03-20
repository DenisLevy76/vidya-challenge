import { configureStore } from '@reduxjs/toolkit'
import { counterReducers } from './clientSlice'

export const store = configureStore({
  reducer: {
    clients: counterReducers,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
