import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IOrder } from '../../@types/order'

const initialState: { orders: IOrder[] } = {
  orders: [],
}

export const ordersSlice = createSlice({
  name: 'Orders',
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<IOrder>) => {
      state.orders.push(action.payload)
    },
    initializeOrdersState: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload
    },
  },
})

export const { createOrder, initializeOrdersState } = ordersSlice.actions
export const ordersReducers = ordersSlice.reducer
