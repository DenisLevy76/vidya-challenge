import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { renderProvider } from '../../utils/renderProviders'
import { CreateProductDialog } from '.'
import { fireEvent } from '@testing-library/react'

describe('<CreateProductDialog />', () => {
  it('Should be render the trigger in the document', () => {
    const { getByTestId } = renderProvider(<CreateProductDialog />)

    expect(getByTestId('create-product-dialog-trigger')).toBeInTheDocument()
  })

  it('Should open the dialog after click in the trigger', () => {
    const { getByTestId, getByText } = renderProvider(<CreateProductDialog />)

    fireEvent.click(getByTestId('create-product-dialog-trigger'))
    expect(getByText('Cadastrar Produto')).toBeInTheDocument()
  })
})
