import '@testing-library/jest-dom'

import { Select } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { theme } from '../../styles/theme'

describe('<Select />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(<Select placeholder='Name' />)

    expect(getByText('Name')).toBeInTheDocument()
  })

  it('Should have a label with "Name" text', () => {
    const { getByTestId } = renderProvider(<Select label='Estado' />)

    expect(getByTestId('select-label').innerHTML).toBe('Estado')
  })

  it('Should have a paragraph with the helper text', () => {
    const helperText = 'required'

    const { getByTestId } = renderProvider(<Select helperText={helperText} />)

    expect(getByTestId('select-helper-text').innerHTML).toBe(helperText)
  })

  it('Should helper text be in the red color', () => {
    const helperText = 'required'

    const { getByTestId } = renderProvider(<Select helperText={helperText} />)

    expect(getByTestId('select-helper-text')).toHaveStyle({
      color: theme.colors.red,
    })
  })
})
