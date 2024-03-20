import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import './styles/reset.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './pages/routes.tsx'
import { Provider } from 'react-redux'
import { store } from './states/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={routes} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
