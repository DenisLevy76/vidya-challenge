import { configureStore } from '@reduxjs/toolkit'
import { clientsReducers } from './clientSlice'
import { productsReducers } from './productsSlice'
import { ordersReducers } from './ordersSlice'

export const store = configureStore({
  reducer: {
    clients: clientsReducers,
    products: productsReducers,
    orders: ordersReducers,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
