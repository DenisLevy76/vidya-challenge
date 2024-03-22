import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { renderProvider } from '../../utils/renderProviders'
import { CreateClientDialog } from '.'
import { fireEvent } from '@testing-library/react'

describe('<CreateClientDialog />', () => {
  it('Should be render the trigger in the document', () => {
    const { getByTestId } = renderProvider(<CreateClientDialog />)

    expect(getByTestId('create-client-dialog-trigger')).toBeInTheDocument()
  })

  it('Should open the dialog after click in the trigger', () => {
    const { getByTestId, getByText } = renderProvider(<CreateClientDialog />)

    fireEvent.click(getByTestId('create-client-dialog-trigger'))
    expect(getByText('Cadastrar Cliente')).toBeInTheDocument()
  })
})
