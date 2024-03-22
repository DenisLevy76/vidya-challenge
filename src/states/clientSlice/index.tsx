import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IClient } from '../../@types/client'

const initialState: { clients: IClient[] } = {
  clients: [
    {
      name: 'Apple Inc.',
      CNPJ: '12.345.678/9012-34',
      phone: '(12) 3456-7890',
      CEP: '12345-678',
      state: 'California',
      city: 'Cupertino',
      neighborhood: 'Silicon Valley',
      address: '1 Infinite Loop',
      number: 123,
    },
    {
      name: 'Google LLC',
      CNPJ: '56.789.012/3456-78',
      phone: '(98) 7654-3210',
      CEP: '54321-876',
      state: 'California',
      city: 'Mountain View',
      neighborhood: 'Bay Area',
      address: '1600 Amphitheatre Parkway',
      number: 456,
    },
    {
      name: 'Amazon.com Inc.',
      CNPJ: '90.123.456/7890-12',
      phone: '(13) 5792-4680',
      CEP: '98765-432',
      state: 'Washington',
      city: 'Seattle',
      neighborhood: 'Downtown',
      address: '410 Terry Avenue North',
      number: 789,
    },
    {
      name: 'Sony Corporation',
      CNPJ: '34.567.890/1234-56',
      phone: '(24) 6801-3579',
      CEP: '87654-321',
      state: 'Tokyo',
      city: 'Tokyo',
      neighborhood: 'Ginza',
      address: '1-7-1 Konan',
      number: 987,
    },
    {
      name: 'Samsung Electronics Co., Ltd.',
      CNPJ: '78.901.234/5678-90',
      phone: '(34) 9012-3456',
      CEP: '23456-789',
      state: 'Seoul',
      city: 'Seoul',
      neighborhood: 'Gangnam-gu',
      address: '129 Samsung-ro',
      number: 321,
    },
  ],
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
