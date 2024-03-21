import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../@types/product'

const initialState: { products: IProduct[] } = {
  products: [
    {
      id: '1f768b9e-83a4-47b1-9ed5-89c4b1e34655',
      name: 'Caneta Esferográfica Azul',
      price: 1.99,
      description:
        'Caneta esferográfica de tinta azul para escrever de forma suave e precisa.',
      image: 'https://source.unsplash.com/random/37',
    },
    {
      id: '4c102372-6d2c-4377-b5a3-78310bb4302f',
      name: 'Bloco de Notas Pautado',
      price: 5.49,
      description:
        'Bloco de notas com folhas pautadas para anotações e tarefas diárias.',
      image: 'https://source.unsplash.com/random/72',
    },
    {
      id: 'b1b6d7a3-2a5d-4814-9a67-fcdad094c10a',
      name: 'Lápis Grafite HB',
      price: 0.99,
      description: 'Lápis grafite com dureza HB para escrita suave e precisa.',
      image: 'https://source.unsplash.com/random/55',
    },
    {
      id: '5f2a7b06-0e8a-4cfd-a3b6-4c4aefdb9d95',
      name: 'Caderno Universitário',
      price: 12.99,
      description:
        'Caderno universitário com capa dura e folhas brancas, ideal para estudantes.',
      image: 'https://source.unsplash.com/random/19',
    },
    {
      id: 'd4dcaace-3a90-4b1f-a9c8-39b74d4a1d27',
      name: 'Marcadores de Texto Coloridos',
      price: 4.79,
      description:
        'Conjunto de marcadores de texto em cores vibrantes para destacar informações importantes.',
      image: 'https://source.unsplash.com/random/84',
    },
  ],
}

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    createProduct: (state, action: PayloadAction<IProduct>) => {
      state.products.push(action.payload)
    },
    initializeProductState: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    },
  },
})

export const { createProduct, initializeProductState } = productsSlice.actions
export const productsReducers = productsSlice.reducer
