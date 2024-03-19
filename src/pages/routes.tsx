import { createBrowserRouter } from 'react-router-dom'
import { App } from '../App'
import { Header } from '../components/header'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    element: <Header />,
  },
  {
    path: '/products',
    element: <Header />,
  },
])
