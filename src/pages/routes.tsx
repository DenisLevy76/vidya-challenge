import { createBrowserRouter } from 'react-router-dom'
import { Orders } from './orders'
import { Clients } from './clients'
import { Products } from './products'

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
    element: <Products />,
  },
])
