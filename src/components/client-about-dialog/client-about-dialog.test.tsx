import '@testing-library/jest-dom'

import { describe, expect, it } from 'vitest'
import { renderProvider } from '../../utils/renderProviders'
import { ClientAboutDialog } from './'
import { fireEvent } from '@testing-library/react'

describe('<ClientAboutDialog />', () => {
  it('Should be render in the document', () => {
    const { getByText } = renderProvider(
      <ClientAboutDialog
        CNPJ='12.345.678/9012-34'
        children={'abrir'}
      />
    )

    fireEvent.click(getByText('abrir'))

    expect(getByText('Apple Inc.')).toBeInTheDocument()
    expect(getByText('12.345.678/9012-34')).toBeInTheDocument()
    expect(getByText('(12) 3456-7890')).toBeInTheDocument()
    expect(getByText('12345-678')).toBeInTheDocument()
    expect(getByText('California')).toBeInTheDocument()
    expect(getByText('Cupertino')).toBeInTheDocument()
    expect(getByText('Silicon Valley')).toBeInTheDocument()
    expect(getByText('123')).toBeInTheDocument()
    expect(getByText('1 Infinite Loop')).toBeInTheDocument()
  })
})
