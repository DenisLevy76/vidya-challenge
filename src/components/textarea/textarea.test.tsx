import '@testing-library/jest-dom'

import { Textarea } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { theme } from '../../styles/theme'

describe('<Textarea />', () => {
  it('Should be render in the document', () => {
    const { getByPlaceholderText } = renderProvider(
      <Textarea placeholder='Name' />
    )

    expect(getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('Should have a label with "Name" text', () => {
    const { getByTestId } = renderProvider(<Textarea label='Estado' />)

    expect(getByTestId('textarea-label').innerHTML).toBe('Estado')
  })

  it('Should have a paragraph with the helper text', () => {
    const helperText = 'required'

    const { getByTestId } = renderProvider(<Textarea helperText={helperText} />)

    expect(getByTestId('textarea-helper-text').innerHTML).toBe(helperText)
  })

  it('Should helper text be in the red color', () => {
    const helperText = 'required'

    const { getByTestId } = renderProvider(<Textarea helperText={helperText} />)

    expect(getByTestId('textarea-helper-text')).toHaveStyle({
      color: theme.colors.red,
    })
  })
})
