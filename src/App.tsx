import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './states/store'
import { useEffect, useState } from 'react'
import { initializeClientState } from './states/clientSlice'
import { initializeProductState } from './states/productsSlice'
import { initializeOrdersState } from './states/ordersSlice'

export const App: React.FC = () => {
  const clients = useSelector((state: RootState) => state.clients.clients)
  const orders = useSelector((state: RootState) => state.orders.orders)
  const products = useSelector((state: RootState) => state.products.products)

  const [loading, setLoading] = useState<boolean>(true)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!loading) return

    const persistentOrdersState = localStorage.getItem('orders')
    const persistentClientState = localStorage.getItem('clients')
    const persistentProductState = localStorage.getItem('products')

    if (persistentProductState && persistentProductState?.length > 2) {
      const data = JSON.parse(persistentProductState)
      dispatch(initializeProductState(data))
    }

    if (persistentClientState && persistentClientState?.length > 2) {
      const data = JSON.parse(persistentClientState)
      dispatch(initializeClientState(data))
    }

    if (persistentOrdersState && persistentOrdersState?.length > 2) {
      const data = JSON.parse(persistentOrdersState)
      dispatch(initializeOrdersState(data))
    }

    setLoading(false)
  }, [dispatch, loading])

  useEffect(() => {
    if (loading) return

    localStorage.setItem('clients', JSON.stringify(clients))
    localStorage.setItem('products', JSON.stringify(products))
    localStorage.setItem('orders', JSON.stringify(orders))
  }, [clients, products, loading, orders])

  return <RouterProvider router={routes} />
}
