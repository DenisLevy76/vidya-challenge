import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { renderProvider } from '../../utils/renderProviders'
import { CreateOrderDialog } from '.'
import { fireEvent } from '@testing-library/react'

describe('<CreateOrderDialog />', () => {
  it('Should be render the trigger in the document', () => {
    const { getByTestId } = renderProvider(<CreateOrderDialog />)

    expect(getByTestId('create-order-dialog-trigger')).toBeInTheDocument()
  })

  it('Should open the dialog after click in the trigger', () => {
    const { getByTestId, getByText } = renderProvider(<CreateOrderDialog />)

    fireEvent.click(getByTestId('create-order-dialog-trigger'))
    expect(getByText('Cadastro de pedidos')).toBeInTheDocument()
  })
})
