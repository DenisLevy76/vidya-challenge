import '@testing-library/jest-dom'

import { Photo } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'
import { theme } from '../../styles/theme'

describe('<Photo />', () => {
  it('Should be render in the document with EV text', () => {
    const { getByText } = renderProvider(<Photo name='Energia Verde' />)

    expect(getByText('EV')).toBeInTheDocument()
  })

  it('Should be render in the document with primary color', () => {
    const { getByText } = renderProvider(<Photo name='Energia Verde' />)

    expect(getByText('EV')).toHaveStyle({
      backgroundColor: theme.colors.primary,
    })
  })

  it('Should be render in the document with red color', () => {
    const { getByText } = renderProvider(
      <Photo
        name='Energia Verde'
        variant='secondary'
      />
    )

    expect(getByText('EV')).toHaveStyle({
      backgroundColor: theme.colors.red,
    })
  })
})
