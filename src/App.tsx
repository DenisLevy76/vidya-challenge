import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './states/store'
import { useEffect } from 'react'
import { initializeClientState } from './states/clientSlice'
import { initializeProductState } from './states/productsSlice'

export const App: React.FC = () => {
  const clients = useSelector((state: RootState) => state.clients.clients)
  const products = useSelector((state: RootState) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    const persistentClientState = localStorage.getItem('clients')
    const persistentProductState = localStorage.getItem('products')

    if (persistentClientState && persistentClientState?.length > 2) {
      const data = JSON.parse(persistentClientState)
      dispatch(initializeClientState(data))
    }

    if (persistentProductState && persistentProductState?.length > 2) {
      const data = JSON.parse(persistentProductState)
      dispatch(initializeProductState(data))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
    localStorage.setItem('products', JSON.stringify(products))
  }, [clients, products])

  return <RouterProvider router={routes} />
}
