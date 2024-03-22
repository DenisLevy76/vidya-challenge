import '@testing-library/jest-dom'

import { Input } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { theme } from '../../styles/theme'

describe('<Input />', () => {
  it('Should be render in the document', () => {
    const { getByPlaceholderText } = renderProvider(
      <Input placeholder='Name' />
    )

    expect(getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('Should have a label with "Name" text', () => {
    const { getByText } = renderProvider(<Input label='Name' />)

    expect(getByText('Name')).toBeInTheDocument()
  })

  it('Should have a paragraph with the helper text', () => {
    const helperText = 'required'

    const { getByText } = renderProvider(<Input helperText={helperText} />)

    expect(getByText(helperText)).toBeInTheDocument()
  })

  it('Should helper text be in the red color', () => {
    const helperText = 'required'

    const { getByText } = renderProvider(<Input helperText={helperText} />)

    expect(getByText(helperText)).toHaveStyle({
      color: theme.colors.red,
    })
  })
})
