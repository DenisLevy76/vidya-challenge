import '@testing-library/jest-dom'

import { ClientCard } from '.'
import { renderProvider } from '../../utils/renderProviders'
import { describe, expect, it } from 'vitest'

describe('<ClientCard />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(
      <ClientCard
        name='Apple Inc.'
        CNPJ='12.345.678/9012-34'
      />
    )

    expect(getByText('Apple Inc.')).toBeInTheDocument()
  })

  it('Should use primary variant of <Photo />', () => {
    const { getByText } = renderProvider(
      <ClientCard
        name='Apple Inc.'
        CNPJ='12.345.678/9012-34'
      />
    )

    expect(getByText('AI').getAttribute('variant')).toBe('primary')
  })

  it(`Should show the client's name`, () => {
    const { getByText } = renderProvider(
      <ClientCard
        name='Apple Inc.'
        CNPJ='12.345.678/9012-34'
      />
    )

    expect(getByText('Apple Inc.')).toBeInTheDocument()
  })

  it(`Should show the client's CNPJ`, () => {
    const { getByText } = renderProvider(
      <ClientCard
        name='Apple Inc.'
        CNPJ='12.345.678/9012-34'
      />
    )

    expect(getByText('12.345.678/9012-34')).toBeInTheDocument()
  })
})
