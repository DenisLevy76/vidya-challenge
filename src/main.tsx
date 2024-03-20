import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import './styles/reset.css'
import { Provider } from 'react-redux'
import { store } from './states/store.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/react-query.tsx'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
