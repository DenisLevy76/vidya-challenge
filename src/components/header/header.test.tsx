import '@testing-library/jest-dom'

import { Header } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { theme } from '../../styles/theme'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
  },
])

describe('<Header />', () => {
  it('Should be render in the document', () => {
    const { container } = renderProvider(<RouterProvider router={route} />)

    expect(
      container.querySelector('header > nav > ul > li a')
    ).toBeInTheDocument()
  })

  it('Should the active link must be in the primary color', () => {
    const { container } = renderProvider(<RouterProvider router={route} />)

    expect(
      container.querySelector('header > nav > ul > li a.active')
    ).toHaveStyle({
      color: theme.colors.primary,
    })

    expect(
      container.querySelector('header > nav > ul > li a.active > svg')
    ).toHaveStyle({
      stroke: theme.colors.primary,
    })
  })
})
