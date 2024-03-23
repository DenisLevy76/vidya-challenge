import { Cart } from '../components/create-order-dialog/types'
import { IClient } from './client'

export interface IOrder {
  client: IClient
  cart: Cart
  totalPrice: number
  nItems: number
  createdAt: Date
}
