import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme.ts'

import { Provider } from 'react-redux'
import { store } from './states/store.ts'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/reset.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
