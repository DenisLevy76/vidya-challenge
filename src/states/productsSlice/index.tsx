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
      image: 'https://img.kalunga.com.br/fotosdeprodutos/176072z_1.jpg',
    },
    {
      id: '4c102372-6d2c-4377-b5a3-78310bb4302f',
      name: 'Bloco de Notas Pautado',
      price: 5.49,
      description:
        'Bloco de notas com folhas pautadas para anotações e tarefas diárias.',
      image:
        'https://5df841b7b6204c6b.cdn.gocache.net/images/1691516/bloco-de-notas-adesivo-102x148mm-com-1-bloco-de-90-folhas-pastel-colors-pautado-maxprint-74000011-724c8718..jpg',
    },
    {
      id: 'b1b6d7a3-2a5d-4814-9a67-fcdad094c10a',
      name: 'Lápis Grafite HB',
      price: 0.99,
      description: 'Lápis grafite com dureza HB para escrita suave e precisa.',
      image:
        'https://casadaarte.vteximg.com.br/arquivos/ids/212021/lapis-grafite-jumbo-9000--faber-castell-HB.jpg?v=636324361236870000',
    },
    {
      id: '5f2a7b06-0e8a-4cfd-a3b6-4c4aefdb9d95',
      name: 'Caderno Universitário',
      price: 12.99,
      description:
        'Caderno universitário com capa dura e folhas brancas, ideal para estudantes.',
      image: 'https://img.kalunga.com.br/fotosdeprodutos/139099z.jpg',
    },
    {
      id: 'd4dcaace-3a90-4b1f-a9c8-39b74d4a1d27',
      name: 'Marcadores de Texto Coloridos',
      price: 4.79,
      description:
        'Conjunto de marcadores de texto em cores vibrantes para destacar informações importantes.',
      image:
        'https://www.frutodearte.com.br/media/catalog/product/cache/12/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/p/e/perspectiva-aberta-marcadores-e-deskset-stabilo-boss-701501.jpg',
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
