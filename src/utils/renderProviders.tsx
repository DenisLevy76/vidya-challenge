import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/reset'
import { queryClient } from '../libs/react-query'
import { theme } from '../styles/theme'
import { store } from '../states/store'
import { ReactNode } from 'react'

export const renderProvider = (Component: ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {Component}
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  )
}
