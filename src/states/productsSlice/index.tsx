import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../@types/product'

const initialState: IProduct[] = []

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload)
    },
    initializeProductState: (state, action: PayloadAction<IProduct[]>) => {
      state = action.payload
    },
  },
})

export const { createProduct, initializeProductState } = productsSlice.actions
export const productsReducers = productsSlice.reducer
