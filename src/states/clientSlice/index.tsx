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
    initializeClientState: (state, action: PayloadAction<IClient[]>) => {
      state.clients = action.payload
    },
  },
})

export const { createClient, initializeClientState } = clientsSlice.actions
export const clientsReducers = clientsSlice.reducer
