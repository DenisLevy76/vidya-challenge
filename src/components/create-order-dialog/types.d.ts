import { IProduct } from '../../@types/product'

export interface CreateOrderInputForm {
  client: string
}

export interface IProductOrder {
  product: IProduct
  quantity: number
}

export type Cart = IProductOrder[]
