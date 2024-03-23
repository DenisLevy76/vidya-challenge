import '@testing-library/jest-dom'

import { Products } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Products />,
  },
])

describe('<Products />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(<RouterProvider router={route} />)

    expect(getByText('Novo Produto')).toBeInTheDocument()
  })
})
