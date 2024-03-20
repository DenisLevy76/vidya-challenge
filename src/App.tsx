import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './states/store'
import { useEffect } from 'react'
import { initializeState } from './states/clientSlice'

export const App: React.FC = () => {
  const clients = useSelector((state: RootState) => state.clients.clients)
  const dispatch = useDispatch()

  useEffect(() => {
    const persistentState = localStorage.getItem('clients')

    if (persistentState && persistentState?.length > 2) {
      const data = JSON.parse(persistentState)
      dispatch(initializeState(data))
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('clients', JSON.stringify(clients))
  }, [clients])

  return <RouterProvider router={routes} />
}
