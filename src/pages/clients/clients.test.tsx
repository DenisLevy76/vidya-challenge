import '@testing-library/jest-dom'

import { Clients } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Clients />,
  },
])

describe('<Clients />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(<RouterProvider router={route} />)

    expect(getByText('Novo Cliente')).toBeInTheDocument()
  })
})
