import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IClient } from '../../@types/client'

const initialState: { clients: IClient[] } = {
  clients: [],
}

export const clientsSlice = createSlice({
  name: 'Clients',
  initialState,
  reducers: {
    createClient: (state, action: PayloadAction<IClient>) => {
      state.clients.push(action.payload)
    },
  },
})

export const { createClient } = clientsSlice.actions
export const counterReducers = clientsSlice.reducer
