import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { renderProvider } from '../../utils/renderProviders'
import { CreateClientDialog } from '.'
import { fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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

  it('Should list all states from brazil in Select', async (): Promise<void> => {
    const { getByTestId, getByText, findAllByTestId } = renderProvider(
      <CreateClientDialog />
    )

    fireEvent.click(getByTestId('create-client-dialog-trigger'))
    expect(getByText('Cadastrar Cliente')).toBeInTheDocument()

    fireEvent.click(getByTestId('select-state'))

    expect((await findAllByTestId('option-state')).length).toBeGreaterThan(0)
  })

  it('Should auto complete the address once the CEP input field loses focus', async (): Promise<void> => {
    const { getByTestId, getByText, getByLabelText } = renderProvider(
      <CreateClientDialog />
    )

    const user = userEvent.setup()

    fireEvent.click(getByTestId('create-client-dialog-trigger'))
    expect(getByText('Cadastrar Cliente')).toBeInTheDocument()

    await user.type(getByTestId('cep-input'), '01001000')
    await user.tab()

    await waitFor(() => {
      expect(getByLabelText('Cidade')).toHaveValue('São Paulo')
      expect(getByLabelText('Estado')).toHaveValue('SP')
      expect(getByLabelText('Bairro')).toHaveValue('Sé')
      expect(getByLabelText('Endereço')).toHaveValue('Praça da Sé')
    })
  })
})
