import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/reset'
import { theme } from '../styles/theme'
import { store } from '../states/store'
import { ReactNode } from 'react'

export const renderProvider = (Component: ReactNode) => {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {Component}
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  )
}
