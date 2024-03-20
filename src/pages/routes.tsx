import { createBrowserRouter } from 'react-router-dom'
import { Header } from '../components/header'
import { Orders } from './orders'
import { Clients } from './clients'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Clients />,
    errorElement: (
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem' }}>Not found.</h1>
      </div>
    ),
  },
  {
    path: '/orders',
    element: <Orders />,
  },
  {
    path: '/products',
    element: <Header />,
  },
])
