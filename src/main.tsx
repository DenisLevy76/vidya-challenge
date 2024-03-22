import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import { Provider } from 'react-redux'
import { store } from './states/store.ts'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/react-query.tsx'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/reset.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
